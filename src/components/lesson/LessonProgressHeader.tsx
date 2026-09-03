import { View, Text, TouchableOpacity, Image, type ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";

type LessonProgressHeaderProps = {
  unitTitle: string;
  unitOrder: number;
  completedInUnit: number;
  totalInUnit: number;
  heroImage: ImageSourcePropType;
  onBack: () => void;
};

export function LessonProgressHeader({
  unitTitle,
  unitOrder,
  completedInUnit,
  totalInUnit,
  heroImage,
  onBack,
}: LessonProgressHeaderProps) {
  return (
    <View>
      <View className="flex-row items-center px-6 pt-2">
        <TouchableOpacity onPress={onBack} hitSlop={8}>
          <Ionicons name="chevron-back" size={26} color={colors.textPrimary} />
        </TouchableOpacity>

        <View className="flex-1 ml-3">
          <Text className="text-h3 font-poppins-semibold text-text-primary">{unitTitle}</Text>
          <Text className="text-body-sm font-poppins text-text-secondary mt-0.5">
            Unit {unitOrder} • {completedInUnit} / {totalInUnit} lessons
          </Text>
        </View>

        <TouchableOpacity hitSlop={8}>
          <Ionicons name="bookmark-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <View className="mx-6 mt-4">
        <Image source={heroImage} className="w-full h-48 rounded-3xl" resizeMode="cover" />
      </View>
    </View>
  );
}
