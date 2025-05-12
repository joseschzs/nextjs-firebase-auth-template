"use client";

import { AuthContext, User } from "@/firebase/auth/AuthContext";
import React, { FunctionComponent } from "react";

export interface AuthProviderProps {
  user: User | null;
  children: React.ReactNode;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  user,
  children,
}) => {
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
