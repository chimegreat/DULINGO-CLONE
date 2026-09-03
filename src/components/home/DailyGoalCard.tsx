import { View, Text, Image, StyleSheet } from "react-native";

import { images } from "@/constants/images";

type DailyGoalCardProps = {
  earnedXp: number;
  goalXp: number;
};

export function DailyGoalCard({ earnedXp, goalXp }: DailyGoalCardProps) {
  const progress = Math.min(earnedXp / goalXp, 1);

  return (
    <View className="flex-row items-center bg-surface-warm rounded-3xl px-5 py-4 mx-6 mt-5">
      <View className="flex-1">
        <Text className="text-body-md font-poppins text-text-primary">Daily goal</Text>
        <Text className="text-h1 font-poppins-bold text-text-primary mt-1">
          {earnedXp} <Text className="text-h4 font-poppins-medium text-text-secondary">/ {goalXp} XP</Text>
        </Text>

        <View className="h-2 rounded-full bg-surface-warm-track mt-3 overflow-hidden">
          <View className="h-2 rounded-full bg-streak" style={{ width: `${progress * 100}%` }} />
        </View>
      </View>

      <Image source={images.treasure} style={styles.treasureImage} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  treasureImage: {
    width: 80,
    height: 80,
    marginLeft: 12,
  },
});
