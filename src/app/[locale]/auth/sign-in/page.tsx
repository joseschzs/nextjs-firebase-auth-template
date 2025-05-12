import SignInGoogleButton from "@/app/[locale]/auth/sign-in/SignInGoogleButton";
import { SignInGoogleRedirect } from "@/app/[locale]/auth/sign-in/SignInGoogleRedirect";
import { LocaleSelector } from "@/components/authentication/LocaleSelector";
import { Box, Grid, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  return {
    title: ``,
    description: ``,
  };
}

export default async function SignInPage() {
  const t = await getTranslations("AuthPage");

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        component="main"
        height="100vh"
        sx={{
          backgroundImage: 'url("/auth_bg.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "alternate.50",
        }}
      >
        <Box width={{ xs: "100%", sm: "auto" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems={{
              xs: "unset",
              md: "center",
            }}
            bgcolor="white"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={2}
            p={6}
            borderRadius={8}
            mb={1}
          >
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography color="neutral.900" variant="h_h4_regular">
                {t("thesis_manager")}
              </Typography>

              <Typography color="neutral.600" variant="p_small_regular">
                {t("manage_supervise_thesis_processes_easily")}
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              px={{
                xs: 0,
                md: 7,
              }}
            >
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  color="neutral.900"
                  variant="h_h6_regular"
                  component="p"
                >
                  {t("login")}
                </Typography>

                <Typography color="neutral.600" variant="p_small_regular">
                  {t("manage_supervise_thesis_processes_easily")}
                </Typography>
              </Box>

              <SignInGoogleButton />
              <SignInGoogleRedirect />
            </Box>
          </Box>

          <LocaleSelector />
        </Box>
      </Grid>
    </>
  );
}
