import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  ...theme.colors,
  gray: {
    "900": "#16171B",
    "800": "#1F2125",
    "700": "#353646",
    "600": "#4B4D63",
    "500": "#616480",
    "400": "#797D9A",
    "300": "#9699B0",
    "200": "#B3B5C6",
    "100": "#D1D2DC",
    "50": "#EEEEF2",
  },
};

// [light, dark]
export const themedColors = {
  ...colors,
  box: [colors.white, colors.gray[800]],
  "gray.900": [colors.gray[50], colors.gray[900]],
  "gray.800": [colors.gray[100], colors.gray[800]],
  "gray.700": [colors.gray[200], colors.gray[700]],
  "gray.600": [colors.gray[300], colors.gray[600]],
  "gray.500": [colors.gray[400], colors.gray[500]],
  "gray.400": [colors.gray[500], colors.gray[400]],
  "gray.300": [colors.gray[600], colors.gray[300]],
  "gray.200": [colors.gray[700], colors.gray[200]],
  "gray.100": [colors.gray[800], colors.gray[100]],
  "gray.50": [colors.gray[900], colors.gray[50]],
};

export default extendTheme({
  colors,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "light" ? "#F2F7FA" : "gray.900",
        color: props.colorMode === "light" ? "gray.900" : "gray.50",
      },
    }),
  },
});
