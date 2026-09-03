import { useUser } from "@clerk/expo";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ContinueLearningCard } from "@/components/home/ContinueLearningCard";
import { DailyGoalCard } from "@/components/home/DailyGoalCard";
import { HomeHeader } from "@/components/home/HomeHeader";
import { NextUpCard } from "@/components/home/NextUpCard";
import { TodaysPlanCard } from "@/components/home/TodaysPlanCard";
import { getLanguageById } from "@/data/languages";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";

// No progress store exists yet, so daily XP, streak, and lesson completion
// below are placeholder values until that feature is built.
const DAILY_GOAL_XP = 20;
const TODAYS_EARNED_XP = 15;
const STREAK_COUNT = 12;

export default function HomeScreen() {
  const { user } = useUser();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);

  if (!selectedLanguage) return null;

  const language = getLanguageById(selectedLanguage);
  const currentUnit = getUnitsByLanguage(selectedLanguage)[0];

  if (!language || !currentUnit) return null;

  const todaysLessons = getLessonsByUnit(currentUnit.id);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <HomeHeader
          flagEmoji={language.flagEmoji}
          greeting={language.greeting}
          firstName={user?.firstName ?? "there"}
          streakCount={STREAK_COUNT}
        />

        <DailyGoalCard earnedXp={TODAYS_EARNED_XP} goalXp={DAILY_GOAL_XP} />

        <ContinueLearningCard
          languageName={language.name}
          unitLabel={`A1 • Unit ${currentUnit.order}`}
          onPress={() => router.push("/learn")}
        />

        <TodaysPlanCard
          lessons={todaysLessons}
          completedLessonIds={
            todaysLessons.length > 0 ? [todaysLessons[0].id] : []
          }
          onViewAll={() => router.push("/learn")}
        />

        <NextUpCard onPress={() => router.push("/ai-teacher")} />
      </ScrollView>
    </SafeAreaView>
  );
}
