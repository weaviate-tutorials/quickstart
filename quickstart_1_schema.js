const weaviate = require('weaviate-client');

// update the endpoint!
const client = weaviate.client({
    scheme: 'https',
    host: 'some-endpoint.weaviate.network/',  // Replace with your endpoint
  }); 

// we will create the class "Question"

let classObj = {
    'class': 'Question',
    'description': 'Information from a Jeopardy! question',  // description of the class
    'properties': [
        {
            "dataType": ["text"],
            "description": "The question",
            "name": "question",
        },
        {
            "dataType": ["text"],
            "description": "The answer",
            "name": "answer",
        },
        {
            "dataType": ["text"],
            "description": "The category",
            "name": "category",
        },        
    ],
    "vectorizer": "text2vec-openai",
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

// get and print the schema
client
  .schema
  .getter()
  .do()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err)
  });