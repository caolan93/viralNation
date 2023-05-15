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
            main: "#3DACFF",
          },
          cardTitle: {
            main: "#212121",
          },
          cardSubtitle: {
            main: "#2B2B2B",
          },
          text: {
            color: "#616161",
          },
          btnOutlined: {
            main: "#3DACFF",
          },
        }
      : {
          primary: {
            main: "#181A18",
          },
          secondary: {
            main: "#3DACFF",
          },
          cardTitle: {
            main: "#FFF",
          },
          cardSubtitle: {
            main: "#FFFFFF80",
          },
          text: {
            color: "#FFF",
          },
          btnOutlined: {
            main: "#FFFFFF10",
          },
        }),
  },
});
