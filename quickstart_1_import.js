const weaviate = require("weaviate-client");

const client = weaviate.client({
    scheme: 'https',
    host: 'some-endpoint.weaviate.network/',  // Replace with your endpoint
    headers: {'X-OpenAI-Api-Key': '<THE-KEY>'},
  }); 

var classObj = {
  "class": "Question",
  "vectorizer": "text2vec-openai"  // Or "text2vec-cohere" or "text2vec-huggingface"
}

// add the schema
client
  .schema
  .classCreator()
  .withClass(classObj)
  .do()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  });

async function getJsonData() {
    const file = await fetch('https://raw.githubusercontent.com/weaviate/weaviate-examples/main/jeopardy_small_dataset/jeopardy_tiny.json');
    // const file = await fetch('jeopardy_tiny.json');
    return file.json();
}

async function importQuestions() {
  // Get the data from the data.json file
  const data = await getJsonData();

  // Prepare a batcher
  let batcher = client.batch.objectsBatcher();
  let counter = 0;
  let batchSize = 100;

  data.forEach(question => {
    // Construct an object with a class and properties 'answer' and 'question'
    const obj = {
      class: 'Question',
      properties: {
        answer: question.Answer,
        question: question.Question,
        category: question.Category,
      },
    }

    // add the object to the batch queue
    batcher = batcher.withObject(obj);

    // When the batch counter reaches batchSize, push the objects to Weaviate
    if (counter++ == batchSize) {
      // flush the batch queue
      batcher
      .do()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      });
      
      // restart the batch queue
      counter = 0;
      batcher = client.batch.objectsBatcher();
    }
  });

  // Flush the remaining objects
  batcher
  .do()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  });
}

importQuestions();
