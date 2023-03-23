const weaviate = require('weaviate-client');

const client = weaviate.client({
    scheme: 'https',
    host: 'some-endpoint.weaviate.network',  // Replace with your endpoint
  });

client
    .data
    .getter()
    .do()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    });