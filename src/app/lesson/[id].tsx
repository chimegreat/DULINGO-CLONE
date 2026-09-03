import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";
import { getLessonById } from "@/data/lessons";

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/learn");
    }
  };

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 items-center justify-center px-10">
          <Text className="text-h3 font-poppins-semibold text-text-primary text-center">
            Lesson not found
          </Text>
          <TouchableOpacity onPress={handleBack} className="mt-4">
            <Text className="text-body-lg font-poppins-medium text-lingua-deep-purple">
              Go back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center px-6 pt-2">
        <TouchableOpacity onPress={handleBack} hitSlop={8}>
          <Ionicons name="chevron-back" size={26} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text className="flex-1 ml-3 text-h3 font-poppins-semibold text-text-primary">
          {lesson.title}
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-body-lg font-poppins text-text-secondary">{lesson.goal}</Text>

        <Text className="text-h4 font-poppins-semibold text-text-primary mt-6 mb-3">
          Vocabulary
        </Text>
        {lesson.vocabulary.map((item) => (
          <View key={item.id} className="rounded-2xl border border-border px-4 py-3 mb-2">
            <Text className="text-h4 font-poppins-semibold text-text-primary">{item.word}</Text>
            <Text className="text-body-sm font-poppins text-text-secondary mt-0.5">
              {item.translation} • {item.pronunciation}
            </Text>
          </View>
        ))}

        <Text className="text-h4 font-poppins-semibold text-text-primary mt-6 mb-3">Phrases</Text>
        {lesson.phrases.map((phrase) => (
          <View key={phrase.id} className="rounded-2xl border border-border px-4 py-3 mb-2">
            <Text className="text-h4 font-poppins-semibold text-text-primary">{phrase.text}</Text>
            <Text className="text-body-sm font-poppins text-text-secondary mt-0.5">
              {phrase.translation}
            </Text>
          </View>
        ))}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            if (lesson.type === "audio") {
              router.push({ pathname: "/lesson/audio/[id]", params: { id: lesson.id } });
            }
          }}
          className="bg-lingua-deep-purple rounded-full py-4 items-center justify-center mt-6"
        >
          <Text className="text-white text-h4 font-poppins-semibold">Start Lesson</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
