"use client";

import { Locale } from "@/components/i18n.config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

export function LocaleSelector() {
  const t = useTranslations("Locales");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (event: SelectChangeEvent) => {
    const locale = event.target.value;
    router.replace({ pathname }, { locale: locale as Locale });
  };

  return (
    <Select
      size="small"
      variant="outlined"
      defaultValue={locale}
      onChange={handleLocaleChange}
      sx={{ ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" } }}
    >
      {routing.locales.map((locale) => (
        <MenuItem key={locale} value={locale}>
          <Typography color="neutral.900" variant="p_medium_regular">
            {t(locale)}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
}
