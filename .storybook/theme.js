// .storybook/YourTheme.js

import { create } from "@storybook/theming";
import logo from "./assets/img/logo.png"
export default create({
  base: "light",

  colorPrimary: "#32502E",
  colorSecondary: "rgb(64, 99, 67)",

  // UI
  appBg: "rgb(166, 207, 152)",
  appContentBg: "rgb(243, 239, 204)",
  appBorderColor: "rgb(243, 239, 204)",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colorsrgb(64, 99, 67)
  textColor: "rgb(64, 99, 67)",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "rgb(236, 231, 180)",
  barSelectedColor: "rgb(236, 231, 180)",
  barBg: "rgb(50, 80, 46)",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: logo,
});
