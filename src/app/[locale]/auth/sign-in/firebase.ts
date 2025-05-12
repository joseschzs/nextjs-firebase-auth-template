import type {Auth, AuthProvider, UserCredential} from 'firebase/auth';
import {
  browserPopupRedirectResolver,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  useDeviceLanguage as setDeviceLanguage
} from 'firebase/auth';

export const getGoogleProvider = (auth: Auth) => {
  const provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  setDeviceLanguage(auth);
  provider.setCustomParameters({
    display: 'popup'
  });

  return provider;
};

export const loginWithProvider = async (
  auth: Auth,
  provider: AuthProvider
): Promise<UserCredential> => {
  return await signInWithPopup(
    auth,
    provider,
    browserPopupRedirectResolver
  );
};

export const loginWithProviderUsingRedirect = async (
  auth: Auth,
  provider: AuthProvider
): Promise<void> => {
  await signInWithRedirect(auth, provider);
};
