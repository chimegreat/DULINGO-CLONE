import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

type HomeHeaderProps = {
  flagEmoji: string;
  greeting: string;
  firstName: string;
  streakCount: number;
};

export function HomeHeader({ flagEmoji, greeting, firstName, streakCount }: HomeHeaderProps) {
  return (
    <View className="flex-row items-center px-6 pt-2">
      <View className="w-10 h-10 rounded-full bg-surface items-center justify-center">
        <Text className="text-lg">{flagEmoji}</Text>
      </View>

      <Text className="flex-1 ml-3 text-h4 font-poppins-semibold text-text-primary">
        {greeting}, {firstName}! 👋
      </Text>

      <View className="flex-row items-center mr-4">
        <Image source={images.streakFire} style={styles.streakIcon} resizeMode="contain" />
        <Text className="ml-1 text-h4 font-poppins-semibold text-text-primary">{streakCount}</Text>
      </View>

      <TouchableOpacity hitSlop={8}>
        <Ionicons name="notifications-outline" size={24} color={colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  streakIcon: {
    width: 24,
    height: 24,
  },
});
