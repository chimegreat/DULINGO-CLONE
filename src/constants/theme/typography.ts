// Design tokens — Typography
// Source: prompt_material/01-design-system.png
// Keys below are the exact names passed to `useFonts` in src/app/_layout.tsx —
// keep both in sync.

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typeScale = {
  h1: { fontSize: 32, lineHeight: 1.2, fontFamily: fontFamily.bold },
  h2: { fontSize: 24, lineHeight: 1.3, fontFamily: fontFamily.semiBold },
  h3: { fontSize: 20, lineHeight: 1.3, fontFamily: fontFamily.semiBold },
  h4: { fontSize: 16, lineHeight: 1.4, fontFamily: fontFamily.medium },
  bodyLarge: { fontSize: 16, lineHeight: 1.6, fontFamily: fontFamily.regular },
  bodyMedium: { fontSize: 14, lineHeight: 1.6, fontFamily: fontFamily.regular },
  bodySmall: { fontSize: 13, lineHeight: 1.6, fontFamily: fontFamily.regular },
  caption: { fontSize: 11, lineHeight: 1.4, fontFamily: fontFamily.regular },
} as const;
