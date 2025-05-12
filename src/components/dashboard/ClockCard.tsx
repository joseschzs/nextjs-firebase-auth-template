/*
"use client";

import { clockIn, clockOut, endLunch, startLunch } from "@/actions/clock";
import { useAuth } from "@/services/firebase/auth/AuthContext";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React, { startTransition, useEffect, useMemo, useState } from "react";

export function ClockCard() {
  const { user } = useAuth();

  const [time, setTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "working" | "lunch">("idle");

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // TODO: fetch state from Firestore (working, onLunch, finished)
  const handle = (fn: () => Promise<void>, next: typeof status) =>
    startTransition(async () => {
      await fn();
      setStatus(next);
    });

  const formattedTime = useMemo<string>(() => {
    if (!mounted) return "";
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }, [time, mounted]);

  if (!user) return null;
  const { uid } = user;

  return (
    <Card sx={{ textAlign: "center" }}>
      <CardContent>
        <Typography variant="h3" mb={2}>
          {formattedTime}
        </Typography>

        {status === "idle" && (
          <Button
            variant="contained"
            onClick={() => handle(() => clockIn({ uid }), "working")}
          >
            Clock In
          </Button>
        )}

        {status === "working" && (
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button
              variant="contained"
              onClick={() => handle(() => clockOut({ uid }), "idle")}
            >
              Clock Out
            </Button>
            <Button
              variant="outlined"
              onClick={() => handle(() => startLunch({ uid }), "lunch")}
            >
              Start Lunch
            </Button>
          </Stack>
        )}

        {status === "lunch" && (
          <Button
            variant="contained"
            onClick={() => handle(() => endLunch({ uid }), "working")}
          >
            End Lunch
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
*/
