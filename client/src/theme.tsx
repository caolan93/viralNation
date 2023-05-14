// @ts-nocheck
import { createTheme } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          palette: {
            primary: {
              main: "#54f353",
            },
            secondary: {
              main: "#fd983f",
            },
            cardBackground: {
              main: "#EEEEEE",
            },
          },
        }
      : {
          palette: {
            secondary: {
              main: "#048f34",
            },
            primary: {
              main: "#D93F09",
            },
            cardBackground: {
              main: "#181A1C",
            },
          },
        }),
  },
});
