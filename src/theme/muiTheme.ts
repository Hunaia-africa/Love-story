"use client";

import { createTheme } from "@mui/material/styles";
import { colors, fontStacks } from "./tokens";

const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.bronze },
    secondary: { main: colors.wax },
    background: { default: colors.cream, paper: colors.paper },
    text: { primary: colors.espresso, secondary: colors.softBrownText },
  },
  typography: {
    fontFamily: fontStacks.body,
    h1: { fontFamily: fontStacks.script },
    h2: { fontFamily: fontStacks.display },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: fontStacks.display,
          letterSpacing: "0.06em",
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
  },
});

export default muiTheme;
