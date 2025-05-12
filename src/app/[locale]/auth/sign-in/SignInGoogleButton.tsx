"use client";

import {
  getGoogleProvider,
  loginWithProvider,
} from "@/app/[locale]/auth/sign-in/firebase";
import { GoogleIcon } from "@/components/flags/GoogleIcon";
import { loginWithCredential } from "@/firebase/api";
import { getFirebaseAuth } from "@/firebase/auth/firebase";
import { useRedirectAfterLogin } from "@/firebase/shared/useRedirectAfterLogin";
import { useRedirectParam } from "@/firebase/shared/useRedirectParam";
import { Button, CircularProgress, Typography } from "@mui/material";
import { UserCredential } from "firebase/auth";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useLoadingCallback } from "react-loading-hook";

export default function SignInGoogleButton() {
  const t = useTranslations("AuthPage");

  const [hasLogged, setHasLogged] = useState(false);
  const redirect = useRedirectParam();
  const redirectAfterLogin = useRedirectAfterLogin();

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  const [handleLoginWithGoogle, isGoogleLoading, googleError] =
    useLoadingCallback(async () => {
      setHasLogged(false);

      const auth = getFirebaseAuth();
      await handleLogin(await loginWithProvider(auth, getGoogleProvider(auth)));

      setHasLogged(true);
    });

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        size="large"
        startIcon={<GoogleIcon />}
        endIcon={isGoogleLoading && <CircularProgress size={18} />}
        sx={{ width: "100%", maxWidth: 320 }}
        disabled={isGoogleLoading}
        onClick={handleLoginWithGoogle}
      >
        <Typography
          variant="p_medium_semibold"
          aria-disabled={isGoogleLoading}
          color={isGoogleLoading ? "neutral.400" : "neutral.600"}
        >
          {isGoogleLoading ? t("logging_in") : t("continue_with_google")}
        </Typography>
      </Button>

      {googleError && (
        <Typography color="critical.700" variant="p_small_regular">
          {t(googleError.code)}
        </Typography>
      )}

      {hasLogged && (
        <div>
          <span>
            Redirecting to <strong>{redirect || "/"}</strong>
          </span>
        </div>
      )}
    </>
  );
}
