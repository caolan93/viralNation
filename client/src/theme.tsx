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
          primary: {
            main: "#D93F09",
          },
          primary: {
            main: "#181A1C",
          },
        }),
  },
});
