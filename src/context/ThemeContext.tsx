import { createContext, useContext } from "react";

export type ThemeMode = "dark" | "light";

export const ThemeContext = createContext<{
  theme: any;
  mode: ThemeMode;
  toggleTheme: () => void;
}>({
  theme: null,
  mode: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
