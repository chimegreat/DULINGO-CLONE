import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";
import { images, remoteImages } from "@/constants/images";
import { getLessonById } from "@/data/lessons";
import { getLanguageById } from "@/data/languages";

// No lesson-scoring engine exists yet — these ratings are mock data that
// demonstrate the post-response feedback UI from the design.
const MOCK_FEEDBACK: { label: string; value: string; color: string }[] = [
  { label: "Speaking", value: "Excellent", color: colors.success },
  { label: "Pronunciation", value: "Great", color: colors.linguaBlue },
  { label: "Grammar", value: "Good", color: colors.linguaPurple },
];

type CallControlProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  isOff?: boolean;
  isDestructive?: boolean;
  onPress: () => void;
};

function CallControl({ icon, label, isOff, isDestructive, onPress }: CallControlProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} className="items-center">
      <View
        className={`w-14 h-14 rounded-full items-center justify-center border ${
          isDestructive ? "bg-error border-error" : isOff ? "bg-text-primary/10 border-border" : "bg-surface border-border"
        }`}
      >
        <Ionicons
          name={icon}
          size={24}
          color={isDestructive ? "#FFFFFF" : colors.textPrimary}
        />
      </View>
      <Text className="text-caption font-poppins-medium text-text-secondary mt-1.5">{label}</Text>
    </TouchableOpacity>
  );
}

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id);
  const language = lesson ? getLanguageById(lesson.languageId) : undefined;

  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setElapsedSeconds((seconds) => seconds + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEndCall = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/learn");
    }
  };

  if (!lesson || !language) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 items-center justify-center px-10">
          <Text className="text-h3 font-poppins-semibold text-text-primary text-center">
            Lesson not found
          </Text>
          <TouchableOpacity onPress={handleEndCall} className="mt-4">
            <Text className="text-body-lg font-poppins-medium text-lingua-deep-purple">
              Go back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const phrase = lesson.phrases[phraseIndex];

  const handleAdvancePhrase = () => {
    if (lesson.phrases.length === 0) return;
    setPhraseIndex((index) => (index + 1) % lesson.phrases.length);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top", "bottom"]}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center px-6 pt-2 pb-3">
        <TouchableOpacity onPress={handleEndCall} hitSlop={8}>
          <Ionicons name="chevron-back" size={26} color={colors.textPrimary} />
        </TouchableOpacity>

        <View className="flex-1 ml-3">
          <Text className="text-h3 font-poppins-semibold text-text-primary">AI Teacher</Text>
          <View className="flex-row items-center mt-0.5">
            <View className="w-2 h-2 rounded-full bg-lingua-green mr-1.5" />
            <Text className="text-body-sm font-poppins text-text-secondary">Online</Text>
          </View>
        </View>

        <View className="w-9 h-9 rounded-full border border-border items-center justify-center mr-2">
          <Ionicons name="videocam-outline" size={18} color={colors.textPrimary} />
        </View>
        <View className="w-9 h-9 rounded-full border border-border items-center justify-center mr-2">
          <Text className="text-body-sm font-poppins-semibold text-text-primary">
            {elapsedSeconds}
          </Text>
        </View>
        <View className="w-9 h-9 rounded-full border border-border items-center justify-center">
          <Ionicons name="megaphone-outline" size={18} color={colors.textPrimary} />
        </View>
      </View>

      <View className="flex-1 mx-6 rounded-3xl overflow-hidden">
        <Image
          source={images.shelve}
          className="absolute inset-0 w-full h-full"
          resizeMode="cover"
          blurRadius={2}
        />

        <View className="flex-1 items-center justify-end">
          <Image
            source={images.mascotWelcomeAiCall}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>

        <View
          className="absolute top-4 right-4 w-24 h-32 rounded-2xl overflow-hidden border-2 border-white"
          style={{ shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 3 }, elevation: 3 }}
        >
          {isCameraOn ? (
            <Image
              source={{ uri: remoteImages.aiTutorAvatar }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            <View className="w-full h-full bg-text-primary items-center justify-center">
              <Ionicons name="videocam-off-outline" size={20} color="#FFFFFF" />
            </View>
          )}
        </View>

        {phrase ? (
          <View className="absolute left-5 right-5 bottom-4">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleAdvancePhrase}
              className="bg-background rounded-3xl px-5 py-4 flex-row items-center"
              style={{ shadowColor: "#000", shadowOpacity: 0.12, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 4 }}
            >
              <View className="flex-1 mr-3">
                <Text className="text-h4 font-poppins-semibold text-text-primary">
                  {phrase.text}
                </Text>
                {showSubtitles ? (
                  <Text className="text-body-sm font-poppins text-text-secondary mt-1">
                    {phrase.translation}
                  </Text>
                ) : null}
              </View>
              <Ionicons name="volume-high" size={22} color={colors.linguaPurple} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View className="flex-row justify-around items-center px-6 pt-6">
        <CallControl
          icon={isCameraOn ? "videocam" : "videocam-off"}
          label="Camera"
          isOff={!isCameraOn}
          onPress={() => setIsCameraOn((value) => !value)}
        />
        <CallControl
          icon={isMicOn ? "mic" : "mic-off"}
          label="Mic"
          isOff={!isMicOn}
          onPress={() => setIsMicOn((value) => !value)}
        />
        <CallControl
          icon="language"
          label="Subtitles"
          isOff={!showSubtitles}
          onPress={() => setShowSubtitles((value) => !value)}
        />
        <CallControl icon="call" label="End Call" isDestructive onPress={handleEndCall} />
      </View>

      <View
        className="mx-6 mt-3 mb-2 rounded-3xl bg-background px-4 py-4 flex-row"
        style={{ shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 3 }}
      >
        {MOCK_FEEDBACK.map((item) => (
          <View key={item.label} className="flex-1 items-center">
            <Text className="text-body-sm font-poppins-medium text-text-primary">
              {item.label}
            </Text>
            <Text className="text-h4 font-poppins-semibold mt-1" style={{ color: item.color }}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
