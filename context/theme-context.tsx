import { globalDark, globalLight } from "@/styles/global-styles";
import { createContext, useContext } from "react";
import { StyleSheet } from "react-native";

type ThemeContextType = {
  lightMode: boolean;
  toggleLightMode: () => void;
  styles: ReturnType<typeof StyleSheet.flatten> | any;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error("useTheme must be used within ThemeProvider")
    return ctx;
}

type ProviderProps = {
    children: React.ReactNode;
    lightMode: boolean;
    setLightMode: (value:boolean) => void;
}

export const ThemeProvider = ({ children, lightMode, setLightMode }: ProviderProps) => {
const styles = lightMode ? globalLight : globalDark;
  const toggleLightMode = () => setLightMode(!lightMode);

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode, styles }}>
      {children}
    </ThemeContext.Provider>
  );
}