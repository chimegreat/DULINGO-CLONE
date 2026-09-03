import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";
import type { Lesson, LessonType } from "@/types/learning";

type TodaysPlanCardProps = {
  lessons: Lesson[];
  completedLessonIds: string[];
  onViewAll?: () => void;
};

const lessonTypeMeta: Record<LessonType, { icon: keyof typeof Ionicons.glyphMap; iconBg: string }> = {
  vocabulary: { icon: "chatbubble-ellipses", iconBg: colors.error },
  audio: { icon: "headset", iconBg: colors.linguaPurple },
  video: { icon: "videocam", iconBg: colors.linguaBlue },
  chat: { icon: "chatbubbles", iconBg: colors.linguaPurple },
};

export function TodaysPlanCard({ lessons, completedLessonIds, onViewAll }: TodaysPlanCardProps) {
  return (
    <View className="px-6 mt-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-h3 font-poppins-semibold text-text-primary">Today&apos;s plan</Text>
        <TouchableOpacity onPress={onViewAll} hitSlop={8}>
          <Text className="text-body-md font-poppins-medium text-lingua-deep-purple">View all</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-3">
        {lessons.map((lesson) => {
          const meta = lessonTypeMeta[lesson.type];
          const completed = completedLessonIds.includes(lesson.id);

          return (
            <View key={lesson.id} className="flex-row items-center py-3">
              <View
                className="w-11 h-11 rounded-2xl items-center justify-center"
                style={{ backgroundColor: meta.iconBg }}
              >
                <Ionicons name={meta.icon} size={20} color="#FFFFFF" />
              </View>

              <View className="flex-1 ml-3">
                <Text className="text-h4 font-poppins-medium text-text-primary">{lesson.title}</Text>
                <Text className="text-body-sm font-poppins text-text-secondary mt-0.5">{lesson.goal}</Text>
              </View>

              {completed ? (
                <View className="w-7 h-7 rounded-full bg-lingua-deep-purple items-center justify-center">
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                </View>
              ) : (
                <View className="w-7 h-7 rounded-full border-2 border-border" />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
