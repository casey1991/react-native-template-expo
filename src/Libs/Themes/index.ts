import { dark, light } from "@eva-design/eva";
import { find, keys, difference, isEmpty, values } from "lodash";
import { ThemeType } from "./themeContext";
import { Constants } from "./constants";
import { normalThemeMapping } from "./normal";
import { maidThemeMapping } from "./maid";
// array[0] is theme
export const themes = [
  {
    [Constants.themes.LIGHT]: light,
    [Constants.mapping.NORMAL]: normalThemeMapping
  },
  {
    [Constants.themes.DARK]: dark,
    [Constants.mapping.NORMAL]: normalThemeMapping
  },
  {
    [Constants.themes.LIGHT]: light,
    [Constants.mapping.MAID]: maidThemeMapping
  },
  {
    [Constants.themes.DARK]: dark,
    [Constants.mapping.MAID]: maidThemeMapping
  }
];
export * from "./themeContext";
export * from "./constants";

export function findCurrentTheme(theme: string, mapping: string): ThemeType {
  const exited = find(themes, item => {
    const itemKeys = keys(item);
    const result = difference(itemKeys, [theme, mapping]);
    return isEmpty(result);
  });
  if (!exited)
    return {
      theme: light,
      mapping: normalThemeMapping
    };
  else {
    const exitedValues = values(exited);
    return {
      theme: exitedValues[0],
      mapping: exitedValues[1]
    };
  }
}
