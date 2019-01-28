import { AsyncStorage } from "react-native";
export const validateToken = callback => {
  AsyncStorage.getItem("token", callback);
};
