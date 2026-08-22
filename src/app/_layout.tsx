import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { fontFamily } from "@/constants/theme";

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    [fontFamily.regular]: require("@/assets/fonts/Poppins-Regular.ttf"),
    [fontFamily.medium]: require("@/assets/fonts/Poppins-Medium.ttf"),
    [fontFamily.semiBold]: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    [fontFamily.bold]: require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack />;
}
