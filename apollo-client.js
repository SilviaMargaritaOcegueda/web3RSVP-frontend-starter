import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/silviamargaritaocegueda/silvia-margarita",
  cache: new InMemoryCache(),
});

export default client;
