require('dotenv').config();

module.exports = {
  schema: process.env.GRAPHQL_URL,
  documents: './src/requests/*.ts',
};
