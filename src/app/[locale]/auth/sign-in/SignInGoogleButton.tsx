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
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { AuthError, UserCredential } from "firebase/auth";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export default function SignInGoogleButton() {
  const t = useTranslations("AuthPage");
  const redirect = useRedirectParam();
  const redirectAfterLogin = useRedirectAfterLogin();

  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [googleError, setGoogleError] = useState<AuthError | null>(null);
  const [hasLogged, setHasLogged] = useState(false);

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  async function handleLoginWithGoogle() {
    setGoogleError(null);
    setIsGoogleLoading(true);
    setHasLogged(false);

    try {
      const auth = getFirebaseAuth();

      const credential = await loginWithProvider(auth, getGoogleProvider(auth));
      await handleLogin(credential);

      setHasLogged(true);
    } catch (error) {
      setGoogleError(error as AuthError);
    } finally {
      setIsGoogleLoading(false);
    }
  }

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        size="large"
        startIcon={<GoogleIcon sx={{ opacity: isGoogleLoading ? 0.4 : 1 }} />}
        endIcon={isGoogleLoading && <CircularProgress size={18} />}
        sx={{ width: "100%" }}
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
        <Box width="100%">
          <Typography color="critical.700" variant="p_small_regular">
            {t(googleError.code)}
          </Typography>
        </Box>
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
