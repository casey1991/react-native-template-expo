import { AsyncStorage } from "react-native";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
const authLink = setContext((_, { headers }) => {
  // get the authentication token from async storage if it exists
  const token = AsyncStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});
const httpLink = createHttpLink({
  uri: "http://localhost:4444/graphql"
});
export const createLinks = () => {
  return authLink.concat(httpLink);
};
