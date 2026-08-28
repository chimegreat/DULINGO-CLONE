import { useRef, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/theme";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
};

export function VerificationModal({ visible, email, onClose }: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleChangeCode = (value: string) => {
    const digitsOnly = value.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digitsOnly);

    if (digitsOnly.length === CODE_LENGTH) {
      router.replace("/");
    }
  };

  const handleClose = () => {
    setCode("");
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Pressable className="absolute inset-0 bg-black/40" onPress={handleClose} />

        <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10">
          <View className="items-center">
            <View className="w-10 h-1 rounded-full bg-border" />
          </View>

          <TouchableOpacity onPress={handleClose} className="absolute right-5 top-5" hitSlop={8}>
            <Ionicons name="close" size={24} color={colors.textSecondary} />
          </TouchableOpacity>

          <Text className="text-h3 font-poppins-bold text-text-primary mt-4">Check your email</Text>
          <Text className="text-body-md text-text-secondary mt-2">
            We sent a 6-digit code to{"\n"}
            <Text className="font-poppins-medium text-text-primary">{email}</Text>
          </Text>

          <Pressable className="flex-row justify-between mt-6" onPress={() => inputRef.current?.focus()}>
            {Array.from({ length: CODE_LENGTH }).map((_, index) => {
              const digit = code[index];
              const isActive = index === code.length;

              return (
                <View
                  key={index}
                  className={`w-12 h-14 rounded-2xl border items-center justify-center ${
                    isActive ? "border-lingua-deep-purple" : "border-border"
                  }`}
                >
                  <Text className="text-h2 font-poppins-semibold text-text-primary">{digit ?? ""}</Text>
                </View>
              );
            })}
          </Pressable>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChangeCode}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            autoFocus
            style={styles.hiddenInput}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
    justifyContent: "flex-end",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
  },
});
