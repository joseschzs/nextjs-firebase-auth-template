"use client";

import {
  getGoogleProvider,
  loginWithProviderUsingRedirect,
} from "@/app/[locale]/auth/sign-in/firebase";
import { loginWithCredential } from "@/firebase/api";
import { getFirebaseAuth } from "@/firebase/auth/firebase";
import { useRedirectAfterLogin } from "@/firebase/shared/useRedirectAfterLogin";
import { useRedirectParam } from "@/firebase/shared/useRedirectParam";
import { Button } from "@/ui/Button";
import { ButtonGroup } from "@/ui/ButtonGroup";
import { FormError } from "@/ui/FormError";
import { LoadingIcon } from "@/ui/icons";
import { getRedirectResult, UserCredential } from "firebase/auth";
import * as React from "react";
import { useLoadingCallback } from "react-loading-hook";

const auth = getFirebaseAuth();

export function SignInGoogleRedirect() {
  const [hasLogged, setHasLogged] = React.useState(false);

  const redirect = useRedirectParam();
  const redirectAfterLogin = useRedirectAfterLogin();

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  const [
    handleLoginWithGoogleUsingRedirect,
    isGoogleUsingRedirectLoading,
    googleUsingRedirectError,
  ] = useLoadingCallback(async () => {
    setHasLogged(false);

    const auth = getFirebaseAuth();
    await loginWithProviderUsingRedirect(auth, getGoogleProvider(auth));

    setHasLogged(true);
  });

  async function handleLoginWithRedirect() {
    const credential = await getRedirectResult(auth);

    if (credential?.user) {
      await handleLogin(credential);

      setHasLogged(true);
    }
  }

  React.useEffect(() => {
    handleLoginWithRedirect();
  }, []);

  return (
    <div>
      {hasLogged && (
        <div>
          <span>
            Redirecting to <strong>{redirect || "/"}</strong>
          </span>
          <LoadingIcon />
        </div>
      )}
      {!hasLogged && (
        <>
          {googleUsingRedirectError && (
            <FormError>{googleUsingRedirectError.message}</FormError>
          )}
          <ButtonGroup>
            <Button
              loading={isGoogleUsingRedirectLoading}
              disabled={isGoogleUsingRedirectLoading}
              onClick={handleLoginWithGoogleUsingRedirect}
            >
              Log in with Google (Redirect)
            </Button>
          </ButtonGroup>
        </>
      )}
    </div>
  );
}
