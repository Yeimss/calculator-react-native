import React, { useState } from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { ThemeProvider, useTheme } from "@/context/theme-context";
import SwitchComponent from "@/components/utils/switck";
import { globalDark, globalLight } from "@/styles/global-styles";
import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';
isAndroid ?? NavigationBar.setBackgroundColorAsync('black');

const RootLayout = () => {
  const [lightMode, setLightMode] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("./../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const styles = lightMode ? globalLight : globalDark;
  if (!loaded) return null;

  return (
    <ThemeProvider lightMode={lightMode} setLightMode={setLightMode}>
      <SafeAreaView style={ styles.background }>
        <SwitchComponent lightMode={lightMode} setLightMode={setLightMode} />
        <Slot />
        <StatusBar style={lightMode ? "dark" : "light"} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default RootLayout;
