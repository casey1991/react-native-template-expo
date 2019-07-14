import React from "react";
import { Constants } from "./constants";
export interface ThemeType {
  theme: any;
  mapping: any;
}
export interface ThemeContextType {
  currentTheme: ThemeType;
  toggleTheme: (theme: ThemeType, mode?: string) => void;
  toggleThemeMode: (mode: string) => void;
}

const initialValue: ThemeContextType = {
  currentTheme: {
    theme: Constants.themes.LIGHT,
    mapping: Constants.mapping.NORMAL
  },
  toggleTheme: (theme: ThemeType) => {},
  toggleThemeMode: (mode: string) => {}
};

export const ThemeContext: React.Context<
  ThemeContextType
> = React.createContext(initialValue);
