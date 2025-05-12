import NotFoundImage from "@/public/error_not_found.svg";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <Box
      width="100%"
      textAlign="center"
      height="calc(100vh - 115px)"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
    >
      <Image src={NotFoundImage} alt="Page not found" height={264} />
      <Box mt={2} gap={1} display="flex" flexDirection="column">
        <Typography variant="p_large_semibold" component="p">
          {t("page_not_found")}
        </Typography>

        <Typography variant="p_medium_regular" component="p">
          {t("go_back_home")}
        </Typography>
      </Box>
    </Box>
  );
}
