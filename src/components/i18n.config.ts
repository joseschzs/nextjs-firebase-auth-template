export const i18n = {
  defaultLocale: "es-ES",
  locales: ["en-US", "es-ES"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
