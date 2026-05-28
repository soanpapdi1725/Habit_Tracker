import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenWrapper({ children, className = "" }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={`flex-1 bg-app-bg px-6 ${className}`}
      style={{ paddingTop: insets.top + 8, paddingBottom: insets.bottom }}
    >
      {children}
    </View>
  );
}
