const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://localhost:9200' }); // Adjust the node URL to your Elasticsearch instance

module.exports = client;