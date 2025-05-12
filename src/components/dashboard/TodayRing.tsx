/*
"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";

export function TodayRing() {
  const [minutes, setMinutes] = useState(0);

  const pct = Math.min(100, (minutes / 480) * 100);

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={pct} size={140} />
      <Box
        top="50%"
        left="50%"
        position="absolute"
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        <Typography variant="h5" align="center">{`${(minutes / 60).toFixed(
          1,
        )}/8h`}</Typography>
      </Box>
    </Box>
  );
}
*/
