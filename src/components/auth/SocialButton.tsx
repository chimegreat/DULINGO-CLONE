import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SocialButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  label: string;
  onPress?: () => void;
};

export function SocialButton({ icon, iconColor, label, onPress }: SocialButtonProps) {
  return (
    <TouchableOpacity
      className="border border-border rounded-2xl py-4 flex-row items-center justify-center gap-3"
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Ionicons name={icon} size={20} color={iconColor} />
      <Text className="text-body-lg text-text-primary font-poppins-medium">{label}</Text>
    </TouchableOpacity>
  );
}
