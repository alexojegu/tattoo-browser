import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
    uri: new URL("/", process.env.GRAPHQL_URL).toString(),
    cache: new InMemoryCache(),
});
