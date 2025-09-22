// lib/apollo.js
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from, Observable } from "@apollo/client";
import fetch from "cross-fetch";

const MAGENTO_GRAPHQL_URL = process.env.NEXT_PUBLIC_API_GRAPH;
const DEFAULT_STORE =  "default";
const DEFAULT_TIMEOUT_MS = 15000;

export function makeApolloClient({ customerToken, store, timeoutMs } = {}) {
  const authLink = new ApolloLink((operation, forward) => {
    const prev = operation.getContext().headers || {};
    operation.setContext({
      headers: {
        ...prev,
        Store: store || DEFAULT_STORE,                         // CAPITAL S for Magento
        ...(customerToken ? { Authorization: `Bearer ${customerToken}` } : {}),
        "Content-Type": "application/json",
      },
    });
    return forward(operation);
  });

  // 2) Timeout via AbortController (no map)
  const timeoutLink = new ApolloLink((operation, forward) => {
    const controller = new AbortController();
    const ms = timeoutMs ?? DEFAULT_TIMEOUT_MS;

    // set or merge fetchOptions.signal
    operation.setContext(({ fetchOptions = {} }) => ({
      fetchOptions: { ...fetchOptions, signal: controller.signal },
    }));

    let timer = null;
    if (typeof AbortSignal?.timeout !== "function") {
      // fallback for older Node: manual timer that aborts
      timer = setTimeout(() => controller.abort(), ms);
    } else {
      // Node 18+: could also do AbortSignal.timeout(ms), but we already have controller
      timer = setTimeout(() => controller.abort(), ms);
    }

    return new Observable((observer) => {
      const sub = forward(operation).subscribe({
        next: (result) => observer.next(result),
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      });

      // teardown
      return () => {
        try { clearTimeout(timer); } catch {}
        try { controller.abort(); } catch {}
        sub.unsubscribe();
      };
    });
  });

  // 3) Error logger (no onError, no map)
  const errorLogLink = new ApolloLink((operation, forward) => {
    return new Observable((observer) => {
      const sub = forward(operation).subscribe({
        next: (result) => {
          if (result?.errors?.length) {
            for (const err of result.errors) {
              // keep logs server-side
              console.error(`[GraphQL error] op=${operation.operationName}`, err.message, err.path);
            }
          }
          observer.next(result);
        },
        error: (err) => {
          console.error(`[Network error] op=${operation.operationName}`, err);
          observer.error(err);
        },
        complete: () => observer.complete(),
      });
      return () => sub.unsubscribe();
    });
  });

  // 4) HTTP transport
  const httpLink = new HttpLink({ uri: MAGENTO_GRAPHQL_URL, fetch });

  return new ApolloClient({
    ssrMode: true,
    link: from([errorLogLink, timeoutLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: "no-cache" },
      query: { fetchPolicy: "no-cache" },
      mutate: { errorPolicy: "all" },
    },
  });
}
