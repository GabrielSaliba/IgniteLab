import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4xioqug0k0g01t81jmcb5yi/master",
  cache: new InMemoryCache(),
});
