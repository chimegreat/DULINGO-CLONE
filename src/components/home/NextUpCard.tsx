import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { remoteImages } from "@/constants/images";

type NextUpCardProps = {
  onPress: () => void;
};

export function NextUpCard({ onPress }: NextUpCardProps) {
  return (
    <View className="flex-row items-center bg-surface-mint rounded-3xl px-5 py-4 mx-6 mt-6 mb-4">
      <View className="flex-1">
        <Text className="text-body-md font-poppins text-text-secondary">Next up</Text>
        <Text className="text-h4 font-poppins-semibold text-text-primary mt-1">AI Video Call</Text>
        <Text className="text-body-sm font-poppins text-text-secondary mt-0.5">Practice speaking</Text>
      </View>

      <View className="rounded-full overflow-hidden mr-3" style={styles.avatarFrame}>
        <Image
          source={{ uri: remoteImages.aiTutorAvatar }}
          style={styles.avatarImage}
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onPress}
        className="w-11 h-11 rounded-full bg-success items-center justify-center"
      >
        <Ionicons name="videocam" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarFrame: {
    width: 56,
    height: 56,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});
