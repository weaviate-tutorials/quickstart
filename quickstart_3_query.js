const weaviate = require("weaviate-client");

const client = weaviate.client({
  scheme: 'https',
  host: 'some-endpoint.weaviate.network',  // Replace with your endpoint
  headers: {'X-OpenAI-Api-Key': '<THE-KEY>'},
});

  client.graphql
  .get()
  .withClassName('Question')
  .withFields('question answer category')
  .withNearText({concepts: ["biology"]})
  .withLimit(2)
  .do()
  .then(res => {
    console.log(JSON.stringify(res, null, 2))
  })
  .catch(err => {
    console.error(err)
  });
