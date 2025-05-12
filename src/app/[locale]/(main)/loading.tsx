import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 112px)"
    >
      <CircularProgress
        sx={{
          color: "primary.800",
        }}
      />
    </Box>
  );
}
