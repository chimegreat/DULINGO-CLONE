import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, type Href } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSignIn } from "@clerk/expo";
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

export default function SignIn() {
  const { signIn, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  const handleSignIn = async () => {
    setFormError(null);

    const { error } = await signIn.emailCode.sendCode({ emailAddress: email });
    if (error) {
      setFormError(error.longMessage ?? error.message ?? "Something went wrong.");
      return;
    }

    setIsVerificationVisible(true);
  };

  const handleVerify = async (code: string): Promise<string | void> => {
    const { error } = await signIn.emailCode.verifyCode({ code });
    if (error) {
      return error.longMessage ?? "Invalid code, please try again.";
    }

    if (signIn.status === "complete") {
      await signIn.finalize({ navigate: navigateAfterAuth });
    }
  };

  const handleSocialSignIn = async (strategy: "oauth_google" | "oauth_facebook" | "oauth_apple") => {
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

        <Text className="text-h1 font-poppins-bold text-text-primary mt-6">Welcome back</Text>
        <Text className="text-body-lg text-text-secondary mt-2">Continue your language journey ✨</Text>

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
        </View>

        {formError && <Text className="text-body-sm text-error mt-3">{formError}</Text>}

        <TouchableOpacity
          activeOpacity={0.85}
          className="rounded-full mt-6 overflow-hidden"
          onPress={handleSignIn}
          disabled={fetchStatus === "fetching"}
        >
          <LinearGradient
            colors={[colors.linguaPurple, colors.linguaDeepPurple]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text className="text-white text-h4 font-poppins-semibold">Sign In</Text>
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
            onPress={() => handleSocialSignIn("oauth_google")}
          />
          <SocialButton
            icon="logo-facebook"
            iconColor="#1877F2"
            label="Continue with Facebook"
            onPress={() => handleSocialSignIn("oauth_facebook")}
          />
          <SocialButton
            icon="logo-apple"
            iconColor={colors.textPrimary}
            label="Continue with Apple"
            onPress={() => handleSocialSignIn("oauth_apple")}
          />
        </View>

        <View className="flex-1" />

        <View className="flex-row justify-center mb-4">
          <Text className="text-body-md text-text-secondary">Don&apos;t have an account? </Text>
          <Link href="/sign-up" asChild>
            <TouchableOpacity>
              <Text className="text-body-md font-poppins-semibold text-lingua-deep-purple">Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <VerificationModal
        visible={isVerificationVisible}
        email={email || "your email"}
        onClose={() => setIsVerificationVisible(false)}
        onVerify={handleVerify}
        onResend={() => signIn.emailCode.sendCode()}
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
