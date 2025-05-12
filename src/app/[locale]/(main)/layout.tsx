import { Navigation } from "@/components/navigation/Navigation";
import { Box, Container } from "@mui/material";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: ``,
  description: ``,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box display="flex" height="100%">
      <Navigation />
      <Container
        maxWidth={false}
        component="main"
        sx={{
          paddingTop: 11,
          paddingBottom: 3,
          flexGrow: 1,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
