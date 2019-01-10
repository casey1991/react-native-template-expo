import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./Screens/Home";
const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});
export const AppNavigator = createAppContainer(AppStack);
