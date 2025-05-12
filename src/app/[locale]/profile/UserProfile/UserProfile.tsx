"use client";

import { logout } from "@/firebase/api";
import { useAuth } from "@/firebase/auth/AuthContext";
import { getFirebaseAuth } from "@/firebase/auth/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useLoadingCallback } from "react-loading-hook";
import { Button } from "../../../../ui/Button";
import { ButtonGroup } from "../../../../ui/ButtonGroup";
import { Card } from "../../../../ui/Card";
import styles from "./UserProfile.module.css";

interface UserProfileProps {
  count: number;
  incrementCounter: () => void;
}

export function UserProfile({ count, incrementCounter }: UserProfileProps) {
  const router = useRouter();
  const { user } = useAuth();
  const [hasLoggedOut, setHasLoggedOut] = React.useState(false);
  const [handleLogout, isLogoutLoading] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
    await logout();

    router.refresh();

    setHasLoggedOut(true);
  });

  const [isIncrementCounterActionPending, startTransition] =
    React.useTransition();

  if (!user) {
    return null;
  }

  const isIncrementLoading = isIncrementCounterActionPending;

  return (
    <div className={styles.container}>
      <Card className={styles.section}>
        <h3 className={styles.title}>You are logged in as</h3>
        <div className={styles.content}>
          <div className={styles.avatar}>
            {/*{user.photoURL && <img src={user.photoURL} />}*/}
          </div>
          <span>{user.email}</span>
        </div>

        <ButtonGroup>
          <Button
            loading={isLogoutLoading || hasLoggedOut}
            disabled={isLogoutLoading || hasLoggedOut}
            onClick={handleLogout}
          >
            Log out
          </Button>
        </ButtonGroup>
      </Card>

      <Card className={styles.section}>
        <h3 className={styles.title}>
          {/* defaultCount is updated by server */}
          Counter: {count}
        </h3>
        <ButtonGroup>
          <Button
            loading={isIncrementCounterActionPending}
            disabled={isIncrementLoading}
            onClick={() => startTransition(() => incrementCounter())}
          >
            Update counter w/ server action
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}
