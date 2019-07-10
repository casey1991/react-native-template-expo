import React from "react";
import { ThemeType } from "react-native-ui-kitten";
export interface ThemeContextType {
  currentTheme: ThemeType;
  toggleTheme: (theme: ThemeType) => void;
}

const initialValue: ThemeContextType = {
  currentTheme: "Normal Light",
  toggleTheme: (theme: ThemeType) => {}
};

export const ThemeContext: React.Context<
  ThemeContextType
> = React.createContext(initialValue);
