import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { AuthInput } from "@/components/auth/AuthInput";
import { SocialButton } from "@/components/auth/SocialButton";
import { VerificationModal } from "@/components/auth/VerificationModal";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 px-6">
        <TouchableOpacity onPress={() => router.back()} hitSlop={8} className="mt-2 self-start">
          <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
        </TouchableOpacity>

        <Text className="text-h1 font-poppins-bold text-text-primary mt-6">Create your account</Text>
        <Text className="text-body-lg text-text-secondary mt-2">Start your language journey today ✨</Text>

        <View className="items-center my-6">
          <Image source={images.mascotAuth} style={styles.mascotImage} resizeMode="contain" />
        </View>

        <View className="gap-4">
          <AuthInput
            label="Email"
            placeholder="alex@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <AuthInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            isPassword
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          className="rounded-full mt-6 overflow-hidden"
          onPress={() => setIsVerificationVisible(true)}
        >
          <LinearGradient
            colors={[colors.linguaPurple, colors.linguaDeepPurple]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text className="text-white text-h4 font-poppins-semibold">Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-border" />
          <Text className="text-body-sm text-text-secondary mx-3">or continue with</Text>
          <View className="flex-1 h-px bg-border" />
        </View>

        <View className="gap-3">
          <SocialButton icon="logo-google" iconColor="#EA4335" label="Continue with Google" />
          <SocialButton icon="logo-facebook" iconColor="#1877F2" label="Continue with Facebook" />
          <SocialButton icon="logo-apple" iconColor={colors.textPrimary} label="Continue with Apple" />
        </View>

        <View className="flex-1" />

        <View className="flex-row justify-center mb-4">
          <Text className="text-body-md text-text-secondary">Already have an account? </Text>
          <Link href="/sign-in" asChild>
            <TouchableOpacity>
              <Text className="text-body-md font-poppins-semibold text-lingua-deep-purple">Log in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <VerificationModal
        visible={isVerificationVisible}
        email={email || "your email"}
        onClose={() => setIsVerificationVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mascotImage: {
    width: 200,
    height: 160,
  },
  gradientButton: {
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
