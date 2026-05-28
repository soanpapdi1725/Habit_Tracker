/**
 * Habit Tracker Theme
 * Dark-mode-first design with curated color palette.
 */

import { Platform } from "react-native";

export const Colors = {
  // Core backgrounds
  background: "#0F0F14",
  surface: "#1A1A24",
  surfaceLight: "#242435",
  cardBorder: "rgba(255, 255, 255, 0.06)",

  // Text
  textPrimary: "#F0F0F5",
  textSecondary: "#8E8EA0",
  textMuted: "#5A5A6E",

  // Accent — done / success
  done: "#34D399",
  doneSoft: "rgba(52, 211, 153, 0.12)",
  doneBorder: "rgba(52, 211, 153, 0.25)",

  // Accent — streak / fire
  streak: "#F59E0B",
  streakSoft: "rgba(245, 158, 11, 0.12)",
  streakBorder: "rgba(245, 158, 11, 0.25)",

  // Accent — missed / not done
  missed: "#6B7280",
  missedSoft: "rgba(107, 114, 128, 0.12)",

  // Accent — primary action
  primary: "#818CF8",
  primarySoft: "rgba(129, 140, 248, 0.12)",
  primaryBorder: "rgba(129, 140, 248, 0.3)",

  // Danger
  danger: "#EF4444",
  dangerSoft: "rgba(239, 68, 68, 0.12)",

  // Misc
  divider: "rgba(255, 255, 255, 0.06)",
  overlay: "rgba(0, 0, 0, 0.5)",
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
