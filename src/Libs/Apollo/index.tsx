import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { createLinks } from "./links";

export let client: ApolloClient<NormalizedCacheObject>;
export let cache = new InMemoryCache();
export const createApolloClient = () => {
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
