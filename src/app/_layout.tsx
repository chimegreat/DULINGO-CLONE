import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { PostHogProvider } from "posthog-react-native";

import { fontFamily } from "@/constants/theme";
import { useLanguageStore } from "@/store/language-store";
import { posthogApiKey, posthogHost } from "@/lib/posthog";

import "../global.css";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

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

  useEffect(() => {
    useLanguageStore.persist.rehydrate();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PostHogProvider
      apiKey={posthogApiKey}
      options={{ host: posthogHost }}
      autocapture
    >
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <Stack />
      </ClerkProvider>
    </PostHogProvider>
  );
}
