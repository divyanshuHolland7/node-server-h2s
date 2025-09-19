// lib/apollo.js
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import fetch from "cross-fetch"; // ok on Node 18+ too

const MAGENTO_GRAPHQL_URL =  process.env.NEXT_PUBLIC_API_GRAPH;
const STORE_CODE = "default";

const authLink = setContext((_, { headers }) => {
  // Pass through customer token from current request context, if any
  const token = globalThis.__customerToken || null; // or inject via function arg/closure
  return {
    headers: {
      ...headers,
      ...(STORE_CODE ? { Store: STORE_CODE } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "Content-Type": "application/json",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    for (const e of graphQLErrors) {
      console.error(`[GraphQL error] op=${operation.operationName}`, e.message, e.path);
    }
  }
  if (networkError) {
    console.error(`[Network error] op=${operation.operationName}`, networkError);
  }
});

const httpLink = new HttpLink({ uri: MAGENTO_GRAPHQL_URL, fetch, fetchOptions: { timeout: 15000 } });

export function makeApolloClient() {
  return new ApolloClient({
    ssrMode: true,                          // important on Node
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: "no-cache" },
      query:      { fetchPolicy: "no-cache" },
      mutate:     { errorPolicy: "all" },
    },
  });
}
