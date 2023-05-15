// @ts-nocheck
import { createTheme } from "@mui/material";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#FCFCFD",
          },
          text: {
            color: "#616161",
          },
          secondary: {
            main: "#fd983f",
          },
          cardBackground: {
            main: "#fd9848",
          },
          navbar: {
            main: "#FCFCFD",
          },
        }
      : {
          secondary: {
            main: "#048f34",
          },
          text: {
            color: "#FFF",
          },
          primary: {
            main: "#181A1C",
          },
        }),
  },
});
