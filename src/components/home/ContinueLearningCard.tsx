import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

type ContinueLearningCardProps = {
  languageName: string;
  unitLabel: string;
  onPress: () => void;
};

export function ContinueLearningCard({ languageName, unitLabel, onPress }: ContinueLearningCardProps) {
  return (
    <LinearGradient
      colors={[colors.linguaPurple, colors.linguaDeepPurple]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
      className="mx-6 mt-5 rounded-3xl overflow-hidden"
    >
      <View className="flex-row items-center px-5 py-5">
        <View className="flex-1">
          <Text className="text-body-md font-poppins text-white/80">Continue learning</Text>
          <Text className="text-h1 font-poppins-bold text-white mt-1">{languageName}</Text>
          <Text className="text-body-sm font-poppins text-white/80 mt-1">{unitLabel}</Text>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            className="bg-white rounded-full px-6 py-2.5 self-start mt-4"
          >
            <Text className="text-lingua-deep-purple text-h4 font-poppins-semibold">Continue</Text>
          </TouchableOpacity>
        </View>

        <Image source={images.palace} style={styles.landmarkImage} resizeMode="contain" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 180,
    justifyContent: "center",
  },
  landmarkImage: {
    width: 130,
    height: 130,
  },
});
