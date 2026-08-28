import { View, ActivityIndicator, StyleSheet } from "react-native";

import { colors } from "@/constants/theme";

export default function SSOCallback() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.linguaDeepPurple} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
