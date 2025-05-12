"use client";

import { useAuth } from "@/firebase/auth/AuthContext";
import { getGreetingKey } from "@/utils/get-greeting-key";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export function GreetingSalute() {
  const t = useTranslations("Dashboard");

  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <>
      <Typography variant="t_large_semibold" component="p">
        {t(getGreetingKey())}, {user.displayName || user.email}!
      </Typography>
    </>
  );
}
