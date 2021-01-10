import { ApolloClient, InMemoryCache } from "@apollo/client";

const inMemoryCache = new InMemoryCache();

export default new ApolloClient({
    cache: inMemoryCache,
    uri: process.env.GRAPHQL_URL,
});
