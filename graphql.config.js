require('dotenv').config({ path: '.env.development' });

module.exports = {
  schema: process.env.GRAPHQL_URL,
};
