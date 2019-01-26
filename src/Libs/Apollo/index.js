import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createLinks } from "./links";
window.__APOLLO_CLIENT__;
export let client = null;
export let cache = new InMemoryCache();
export const createApolloClient = () => {
  window.__APOLLO_CLIENT__ = true;
  if (client) {
    return client;
  }
  client = new ApolloClient({
    link: createLinks(),
    cache,
    connectToDevTools: true
  });
  return client;
};
