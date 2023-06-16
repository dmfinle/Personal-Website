//React
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const isBrowserDark = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const getTheme = () => {
    const localTheme = window.localStorage.getItem("theme");
    const browserDefault = isBrowserDark() ? "dark" : "light";

    return localTheme || browserDefault;
  };
  const defaultTheme = getTheme();
  const [theme, setTheme] = useState(defaultTheme ? defaultTheme : "light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
