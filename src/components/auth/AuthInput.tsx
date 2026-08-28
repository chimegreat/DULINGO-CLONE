import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";

type AuthInputProps = TextInputProps & {
  label: string;
  isPassword?: boolean;
};

export function AuthInput({ label, isPassword, ...props }: AuthInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className="border border-border rounded-2xl px-4 py-2">
      <Text className="text-body-sm text-text-secondary font-poppins">{label}</Text>
      <View className="flex-row items-center">
        <TextInput
          className="flex-1 text-body-lg text-text-primary font-poppins py-1"
          placeholderTextColor={colors.textSecondary}
          secureTextEntry={isPassword && !isPasswordVisible}
          autoCapitalize="none"
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsPasswordVisible((prev) => !prev)} hitSlop={8}>
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
