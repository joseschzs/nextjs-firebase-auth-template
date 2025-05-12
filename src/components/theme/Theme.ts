"use client";

import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h_h2_semibold: React.CSSProperties;
    h_h4_regular: React.CSSProperties;
    h_h5_semibold: React.CSSProperties;
    h_h6_regular: React.CSSProperties;
    h_h6_semibold: React.CSSProperties;
    t_large_regular: React.CSSProperties;
    t_large_semibold: React.CSSProperties;
    t_large_bold: React.CSSProperties;
    t_medium_regular: React.CSSProperties;
    t_medium_semibold: React.CSSProperties;
    t_medium_bold: React.CSSProperties;
    t_small_regular: React.CSSProperties;
    t_small_semibold: React.CSSProperties;
    t_small_bold: React.CSSProperties;
    p_large_regular: React.CSSProperties;
    p_large_semibold: React.CSSProperties;
    p_large_bold: React.CSSProperties;
    p_medium_regular: React.CSSProperties;
    p_medium_semibold: React.CSSProperties;
    p_medium_bold: React.CSSProperties;
    p_small_regular: React.CSSProperties;
    p_small_semibold: React.CSSProperties;
    p_small_bold: React.CSSProperties;
    p_xsmall_regular: React.CSSProperties;
    p_xsmall_semibold: React.CSSProperties;
    p_xsmall_bold: React.CSSProperties;
    p_table_regular: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h_h2_semibold?: React.CSSProperties;
    h_h4_regular?: React.CSSProperties;
    h_h5_semibold?: React.CSSProperties;
    h_h6_regular?: React.CSSProperties;
    h_h6_semibold?: React.CSSProperties;
    t_large_regular?: React.CSSProperties;
    t_large_semibold?: React.CSSProperties;
    t_large_bold?: React.CSSProperties;
    t_medium_regular?: React.CSSProperties;
    t_medium_semibold?: React.CSSProperties;
    t_medium_bold?: React.CSSProperties;
    t_small_regular?: React.CSSProperties;
    t_small_semibold?: React.CSSProperties;
    t_small_bold?: React.CSSProperties;
    p_large_regular?: React.CSSProperties;
    p_large_semibold?: React.CSSProperties;
    p_large_bold?: React.CSSProperties;
    p_medium_regular?: React.CSSProperties;
    p_medium_semibold?: React.CSSProperties;
    p_medium_bold?: React.CSSProperties;
    p_small_regular?: React.CSSProperties;
    p_small_semibold?: React.CSSProperties;
    p_small_bold?: React.CSSProperties;
    p_xsmall_regular?: React.CSSProperties;
    p_xsmall_semibold?: React.CSSProperties;
    p_xsmall_bold?: React.CSSProperties;
    p_table_regular?: React.CSSProperties;
  }

  interface Palette {
    neutral: Palette["primary"];
    critical: Palette["primary"];
    high: Palette["primary"];
    success: Palette["primary"];
    informative: Palette["primary"];
    primaryBackground: Palette["primary"];
    alternate: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    critical?: PaletteOptions["primary"];
    high?: PaletteOptions["primary"];
    success?: PaletteOptions["primary"];
    informative?: PaletteOptions["primary"];
    primaryBackground?: PaletteOptions["primary"];
    alternate?: PaletteOptions["primary"];
  }
}

declare module "@mui/material" {
  interface TypographyPropsVariantOverrides {
    h_h2_semibold: true;
    h_h4_regular: true;
    h_h5_semibold: true;
    h_h6_regular: true;
    h_h6_semibold: true;
    t_large_regular: true;
    t_large_semibold: true;
    t_large_bold: true;
    t_medium_regular: true;
    t_medium_semibold: true;
    t_medium_bold: true;
    t_small_regular: true;
    t_small_semibold: true;
    t_small_bold: true;
    p_large_regular: true;
    p_large_semibold: true;
    p_large_bold: true;
    p_medium_regular: true;
    p_medium_semibold: true;
    p_medium_bold: true;
    p_small_regular: true;
    p_small_semibold: true;
    p_small_bold: true;
    p_xsmall_regular: true;
    p_xsmall_semibold: true;
    p_xsmall_bold: true;
    p_table_regular: true;
  }

  interface ButtonPropsColorOverrides {
    neutral: true;
    primary: true;
    critical: true;
    high: true;
    success: true;
    informative: true;
    alternate: true;
  }

  interface SvgIconPropsColorOverrides {
    neutral: true;
    primary: true;
    critical: true;
    high: true;
    success: true;
    informative: true;
    alternate: true;
  }
}

export const theme = createTheme({
  palette: {
    neutral: {
      main: "#424242",
      contrastText: "#FFFFFF",
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },

    primary: {
      main: "#01579B",
      contrastText: "#FFFFFF",
      50: "#E1F5FE",
      100: "#B3E5FC",
      200: "#81D4FA",
      300: "#4FC3F7",
      400: "#29B6F6",
      500: "#03A9F4",
      600: "#039BE5",
      700: "#0288D1",
      800: "#0277BD",
      900: "#01579B",
    },

    critical: {
      main: "#E53935",
      contrastText: "#FFFFFF",
      50: "#FFEBEE",
      100: "#FFCDD2",
      200: "#EF9A9A",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C",
    },

    high: {
      main: "#FB8C00",
      contrastText: "#FFFFFF",
      50: "#FFF3E0",
      100: "#FFE0B2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#FB8C00",
      700: "#F57C00",
      800: "#EF6C00",
      900: "#E65100",
    },

    success: {
      main: "#43A047",
      contrastText: "#FFFFFF",
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20",
    },

    informative: {
      main: "#2873F6",
      contrastText: "#FFFFFF",
      50: "#E8F0FE",
      100: "#C4D9FD",
      200: "#9DBFFB",
      300: "#76A6F9",
      400: "#4F8DF8",
      500: "#2873F6",
      600: "#0A5CEB",
      700: "#084DC4",
      800: "#073E9D",
      900: "#052E76",
    },

    alternate: {
      main: "#F7F9FC",
      contrastText: "#424242",
      50: "#F7F9FC",
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans)",
    h1: {
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "-2%",
    },
    h_h2_semibold: {
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "-2%",
      fontWeight: "600",
    },
    h3: {
      fontSize: "25px",
      lineHeight: "36px",
      letterSpacing: "-2%",
    },
    h4: {
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "0",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0",
    },
    h6: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0",
    },
    h_h4_regular: {
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    h_h5_semibold: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    h_h6_regular: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    h_h6_semibold: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    t_large_regular: {
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    t_large_semibold: {
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    t_large_bold: {
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "0",
      fontWeight: "700",
    },
    t_medium_regular: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    t_medium_semibold: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    t_medium_bold: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0",
      fontWeight: "700",
    },
    t_small_regular: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    t_small_semibold: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    t_small_bold: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "700",
    },
    p_large_regular: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    p_large_semibold: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    p_large_bold: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: "700",
    },
    p_medium_regular: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    p_medium_semibold: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    p_medium_bold: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0",
      fontWeight: "700",
    },
    p_small_regular: {
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    p_small_semibold: {
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    p_small_bold: {
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0",
      fontWeight: "700",
    },
    p_xsmall_regular: {
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: "0",
      fontWeight: "400",
    },
    p_xsmall_semibold: {
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: "0",
      fontWeight: "600",
    },
    p_xsmall_bold: {
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: "0",
      fontWeight: "700",
    },
    p_table_regular: {
      fontSize: "13px",
      lineHeight: "18px",
      letterSpacing: "0",
      fontWeight: "400",
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#424242",
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F5F5F5",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#EEEEEE",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px",
          color: "#424242",
        },
        body: {
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "19px",
          color: "#424242",
        },
      },
    },
  },
});
