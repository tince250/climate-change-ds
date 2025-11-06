import { createTheme } from "@mui/material/styles";
import type { CSSObject } from "@mui/material/styles";

const commonTypography = {
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "3em",
    lineHeight: 1.1,
    letterSpacing: "1px",
    marginTop: "0.8em",
  },
  h2: {
    fontFamily: "'Roboto Slab', serif",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "2em",
    lineHeight: 1.1,
    margin: "0.5em 0.5em 1em 0.5em",
  },
  h3: {
    fontFamily: "-moz-initial",
    fontWeight: 550,
    fontSize: "3em",
    lineHeight: 1.1,
    letterSpacing: "1px",
  },
  h4: {
    fontFamily: "-moz-initial",
    fontWeight: 550,
    fontSize: "2.5em",
    lineHeight: 1.2,
    marginBottom: "0.3em",
  },
  subtitle1: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1.2em",
  },
  h6: {
    fontFamily: "-moz-initial",
    fontSize: "1.8em",
  },
};

const commonComponents = {
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiInputBase-input": {
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.2rem",
        } as CSSObject,
      } as CSSObject,
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { boxShadow: "none", margin: -1, border: "none" },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }: { theme: any }) => ({
        boxShadow: "none",
        border: "none",
        margin: -1,
        backgroundColor: theme.palette.background.default,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: theme.palette.background.default,
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: "'Playfair Display', serif",
        textTransform: "none" as CSSObject["textTransform"],
        fontSize: "1.5rem",
        fontWeight: "bold",
      } as CSSObject,
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(92, 36, 36)",
    },
    secondary: {
      main: "rgb(66, 52, 52)",
    },
    background: {
      default: "#f8f2f2e7",
    },
  },
  typography: commonTypography,
  components: commonComponents,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(167, 87, 87)",
    },
    secondary: {
      main: "rgb(204, 184, 184)",
    },
    background: {
      default: "#292828",
    },
  },
  typography: commonTypography,
  components: commonComponents,
});
