import { createTheme } from "@mui/material";
import { colors } from "../colors";

const violetPalette = {
  palette: {
    primary: {
      main: colors.violet["violet-150"],
    },
  },
};

const palettes = {
  violet: violetPalette,
};

export const theme = (themeColor: keyof typeof palettes) =>
  createTheme({
    palette: palettes[themeColor].palette,
    components: {
      // Name of the component
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: palettes[themeColor].palette.primary.main,
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: palettes[themeColor].palette.primary.main,

            ".MuiOutlinedInput-notchedOutline": {
              borderColor: palettes[themeColor].palette.primary.main,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: palettes[themeColor].palette.primary.main,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: palettes[themeColor].palette.primary.main,
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          },
        },
      },
    },
  });
