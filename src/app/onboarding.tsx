import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { images } from "@/constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 px-6">
        <View className="flex-row items-center justify-center gap-2 mt-2">
          <Image source={images.mascotLogo} style={styles.logoImage} resizeMode="contain" />
          <Text className="text-h2 font-poppins-bold text-text-primary">lingua</Text>
        </View>

        <View className="mt-10">
          <Text className="text-h1 font-poppins-bold text-text-primary">
            Your AI language{"\n"}
            <Text className="text-lingua-deep-purple">teacher.</Text>
          </Text>
          <Text className="mt-3 text-body-lg text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="items-center mt-16">
          <Image source={images.mascotWelcome} style={styles.mascotImage} resizeMode="contain" />
        </View>

        <View className="flex-1" />

        <TouchableOpacity
          className="bg-lingua-deep-purple rounded-full py-4 px-6 mb-4 flex-row items-center justify-center"
          activeOpacity={0.85}
          onPress={() => {}}
        >
          <Text className="text-white text-h4 font-poppins-semibold">Get Started</Text>
          <Text className="text-white text-h4 font-poppins-semibold ml-2">›</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logoImage: {
    width: 36,
    height: 36,
  },
  mascotImage: {
    width: 280,
    height: 280,
   },
});
