import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, type Href } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSignUp } from "@clerk/expo";
import { useSSO } from "@clerk/expo/experimental";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { getSSOErrorMessage } from "@/lib/clerk-errors";
import { AuthInput } from "@/components/auth/AuthInput";
import { SocialButton } from "@/components/auth/SocialButton";
import { VerificationModal } from "@/components/auth/VerificationModal";

const navigateAfterAuth = ({
  session,
  decorateUrl,
}: {
  session: { currentTask?: unknown } | null | undefined;
  decorateUrl: (url: string) => string;
}) => {
  if (session?.currentTask) return;
  router.replace(decorateUrl("/") as Href);
};

export default function SignUp() {
  const { signUp, fetchStatus } = useSignUp();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  const handleSignUp = async () => {
    setFormError(null);

    const { error } = await signUp.password({ emailAddress: email, password });
    if (error) {
      setFormError(error.longMessage ?? error.message ?? "Something went wrong.");
      return;
    }

    const { error: sendError } = await signUp.verifications.sendEmailCode();
    if (sendError) {
      setFormError(sendError.longMessage ?? "Couldn't send the verification code.");
      return;
    }

    setIsVerificationVisible(true);
  };

  const handleVerify = async (code: string): Promise<string | void> => {
    const { error } = await signUp.verifications.verifyEmailCode({ code });
    if (error) {
      return error.longMessage ?? "Invalid code, please try again.";
    }

    if (signUp.status === "complete") {
      await signUp.finalize({ navigate: navigateAfterAuth });
    }
  };

  const handleSocialSignUp = async (strategy: "oauth_google" | "oauth_facebook" | "oauth_apple") => {
    try {
      const { createdSessionId } = await startSSOFlow({ strategy });
      if (createdSessionId) {
        router.replace("/");
      }
    } catch (err) {
      setFormError(getSSOErrorMessage(err));
    }
  };

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

        {formError && <Text className="text-body-sm text-error mt-3">{formError}</Text>}

        <TouchableOpacity
          activeOpacity={0.85}
          className="rounded-full mt-6 overflow-hidden"
          onPress={handleSignUp}
          disabled={fetchStatus === "fetching"}
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
          <SocialButton
            icon="logo-google"
            iconColor="#EA4335"
            label="Continue with Google"
            onPress={() => handleSocialSignUp("oauth_google")}
          />
          <SocialButton
            icon="logo-facebook"
            iconColor="#1877F2"
            label="Continue with Facebook"
            onPress={() => handleSocialSignUp("oauth_facebook")}
          />
          <SocialButton
            icon="logo-apple"
            iconColor={colors.textPrimary}
            label="Continue with Apple"
            onPress={() => handleSocialSignUp("oauth_apple")}
          />
        </View>

        {/* Required for sign-up flows on Expo web; Clerk skips the browser CAPTCHA on iOS and Android */}
        <View nativeID="clerk-captcha" />

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
        onVerify={handleVerify}
        onResend={() => signUp.verifications.sendEmailCode()}
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
