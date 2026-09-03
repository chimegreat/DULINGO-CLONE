import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";
import { images } from "@/constants/images";

export type LessonCardStatus = "completed" | "in-progress" | "locked";

type LessonCardProps = {
  index: number;
  title: string;
  status: LessonCardStatus;
  onPress: () => void;
};

export function LessonCard({ index, title, status, onPress }: LessonCardProps) {
  const isInProgress = status === "in-progress";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row items-center rounded-2xl border px-4 py-4 mb-3 ${
        isInProgress ? "border-2 border-lingua-purple bg-lingua-purple/5" : "border-border bg-background"
      }`}
    >
      <View className="flex-1">
        <Text
          className={`text-body-sm font-poppins ${
            isInProgress ? "text-lingua-deep-purple" : "text-text-secondary"
          }`}
        >
          Lesson {index + 1}
        </Text>
        <Text
          className={`text-h4 font-poppins-semibold mt-0.5 ${
            isInProgress ? "text-lingua-deep-purple" : "text-text-primary"
          }`}
        >
          {title}
        </Text>
        {isInProgress ? (
          <Text className="text-body-sm font-poppins-medium text-lingua-purple mt-0.5">
            In progress
          </Text>
        ) : null}
      </View>

      {status === "completed" && (
        <View className="w-8 h-8 rounded-full bg-lingua-green items-center justify-center">
          <Ionicons name="checkmark" size={18} color="#FFFFFF" />
        </View>
      )}

      {status === "in-progress" && (
        <Image source={images.palace} className="w-11 h-11" resizeMode="contain" />
      )}

      {status === "locked" && (
        <Ionicons name="lock-closed" size={20} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );
}
