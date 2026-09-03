import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { getLanguageById } from "@/data/languages";
import { getLessonsByLanguage, getLessonsByUnit } from "@/data/lessons";
import { getUnitById } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";
import { images } from "@/constants/images";
import { LessonProgressHeader } from "@/components/lesson/LessonProgressHeader";
import { LessonTabs, type LessonTab } from "@/components/lesson/LessonTabs";
import { LessonCard, type LessonCardStatus } from "@/components/lesson/LessonCard";

// No lesson-completion store exists yet, so progress below is mock data —
// it demonstrates the completed / in-progress / locked states from the design.
const MOCK_COMPLETED_COUNT = 2;

export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState<LessonTab>("lessons");
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);

  if (!selectedLanguage) return null;

  const language = getLanguageById(selectedLanguage);
  const allLessons = getLessonsByLanguage(selectedLanguage);

  if (!language || allLessons.length === 0) return null;

  const currentIndex = Math.min(MOCK_COMPLETED_COUNT, allLessons.length - 1);
  const currentUnit = getUnitById(allLessons[currentIndex].unitId);

  if (!currentUnit) return null;

  const unitLessons = getLessonsByUnit(currentUnit.id);
  const completedInUnit = unitLessons.filter(
    (lesson) => allLessons.findIndex((item) => item.id === lesson.id) < MOCK_COMPLETED_COUNT
  ).length;

  const getStatus = (index: number): LessonCardStatus => {
    if (index < MOCK_COMPLETED_COUNT) return "completed";
    if (index === MOCK_COMPLETED_COUNT) return "in-progress";
    return "locked";
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <LessonProgressHeader
        unitTitle={currentUnit.title}
        unitOrder={currentUnit.order}
        completedInUnit={completedInUnit}
        totalInUnit={unitLessons.length}
        heroImage={images.atTheCafe}
        onBack={handleBack}
      />

      <LessonTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "lessons" ? (
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          {allLessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              index={index}
              title={lesson.title}
              status={getStatus(index)}
              onPress={() =>
                lesson.type === "audio"
                  ? router.push({ pathname: "/lesson/audio/[id]", params: { id: lesson.id } })
                  : router.push({ pathname: "/lesson/[id]", params: { id: lesson.id } })
              }
            />
          ))}
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center px-10">
          <Image source={images.treasure} style={{ width: 140, height: 140 }} resizeMode="contain" />
          <Text className="text-h3 font-poppins-semibold text-text-primary mt-4 text-center">
            Practice mode is on its way
          </Text>
          <Text className="text-body-md font-poppins text-text-secondary mt-2 text-center">
            Come back soon to review vocabulary and sharpen what you&apos;ve learned.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
