import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    glass: {
      light: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
    glass?: {
      light: string;
      dark: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    sectionTitle: React.CSSProperties;
    sectionAccent: React.CSSProperties;
    sectionDescription: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties;
    sectionAccent?: React.CSSProperties;
    sectionDescription?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
    sectionAccent: true;
    sectionDescription: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    accent: {
      main: "#95BF1F",
    },
    background: {
      default: "#ffffff",
      paper: "#F8F9FA",
    },
    text: {
      primary: "#000",
      secondary: "rgba(0,0,0,0.6)",
    },
    glass: {
      light:
        "linear-gradient(180deg, rgba(0,0,0,0.34), rgba(255,255,255,0.34))",
      dark: "rgba(255,255,255,0.05)",
    },
  },

  shape: {
    borderRadius: 20,
  },

  typography: {
    fontFamily: `"Stem-Regular", sans-serif`,

    sectionTitle: {
      fontFamily: `"Stem-Medium"`,
      fontSize: "70px",
      lineHeight: "74px",
      fontWeight: 600,
    },

    sectionAccent: {
      fontFamily: `"Stem-LightItalic"`,
      fontSize: "70px",
      lineHeight: "74px",
      fontStyle: "italic",
      color: "#95BF1F",
    },

    sectionDescription: {
      fontFamily: `"Stem-Regular"`,
      fontSize: "25px",
      lineHeight: "100%",
      color: "rgba(0,0,0,0.6)",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 65,
          paddingLeft: 36,
          paddingRight: 36,
          borderRadius: 20,
          fontSize: 20,
          fontFamily: `"Stem-Medium"`,
          textTransform: "none",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            height: 67,
            borderRadius: 20,
            backgroundColor: "#F8F9FA",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export default theme;
