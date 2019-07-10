import { dark, light } from "@eva-design/eva";
import { ThemeType } from "react-native-ui-kitten";
interface ThemeRegistry {
  ["Normal Light"]: ThemeType;
  ["Normal Dark"]: ThemeType;
}
export const themes: ThemeRegistry = {
  "Normal Light": light,
  "Normal Dark": dark
};
export type ThemeKey = keyof ThemeRegistry;
export * from "./themeContext";
