import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, type LayoutChangeEvent } from "react-native";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { colors } from "@/constants/theme";

const BAR_HEIGHT = 64;
const ICON_TOP = 10;
const ICON_SIZE = 22;
const CIRCLE_SIZE = 40;

export function CustomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const [barWidth, setBarWidth] = useState(0);
  const translateX = useSharedValue(0);

  const tabWidth = barWidth / state.routes.length;

  useEffect(() => {
    if (barWidth === 0) return;
    translateX.value = withTiming(tabWidth * state.index, {
      duration: 250,
      easing: Easing.linear,
    });
  }, [state.index, barWidth, tabWidth, translateX]);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleLayout = (event: LayoutChangeEvent) => {
    setBarWidth(event.nativeEvent.layout.width);
  };

  return (
    <View
      className="flex-row bg-background border-t border-border"
      style={[styles.bar, { height: BAR_HEIGHT + insets.bottom, paddingBottom: insets.bottom }]}
      onLayout={handleLayout}
    >
      {barWidth > 0 && (
        <Animated.View
          pointerEvents="none"
          className="absolute bg-lingua-purple rounded-full"
          style={[styles.circle, { left: (tabWidth - CIRCLE_SIZE) / 2 }, circleStyle]}
        />
      )}

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label = options.title ?? route.name;
        const iconColor = isFocused ? "#FFFFFF" : colors.textSecondary;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.tab}
          >
            <View style={styles.iconSlot}>
              {options.tabBarIcon?.({ focused: isFocused, color: iconColor, size: ICON_SIZE })}
            </View>
            <Text
              className="text-caption font-poppins-medium text-text-secondary mt-1"
              style={isFocused ? styles.hiddenLabel : undefined}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: "relative",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingTop: ICON_TOP,
  },
  iconSlot: {
    height: ICON_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    top: ICON_TOP - (CIRCLE_SIZE - ICON_SIZE) / 2,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
  },
  hiddenLabel: {
    opacity: 0,
  },
});
