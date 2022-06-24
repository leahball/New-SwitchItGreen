export const enum ColorOptions {
  Dusty = "dusty",
  Bright = "bright",
  Darkest = "darkest",
  Dark = "dark",
  Base = "base",
  Medium = "medium",
  Light = "light",
  Highlight = "highlight",
  Highlighthalf = "highlighthalf",
  Essence = "essence",
}

export type DefaultColors = {
  [key: string]: {
    [key in ColorOptions]+?: string;
  };
};

const defaultColors: DefaultColors = {
  blue: {
    bright: "#0075FE",
    dusty: "#015CC9",
    darkest: "#1B5174",
    dark: "#377CA8",
    base: "#5296BA",
    medium: "#90BBD2",
    light: "#C6DCE8",
    highlight: "#E2EDF2",
  },
  red: {
    bright: "#EC0006",
    darkest: "#BC0208",
    dark: "#D7393F",
    base: "#FF6E73",
    medium: "#FEA1A5",
    light: "#F9DDDE",
    highlight: "#FDE6E7",
  },
  yellow: {
    darkest: "#DC8800",
    dark: "#EFA122",
    base: "#FFC464",
    medium: "#FED99B",
    light: "#FEEBCC",
    highlight: "#FDF4E5",
  },
  green: {
    darkest: "#048659",
    dark: "#37A17C",
    base: "#77BEA5",
    medium: "#A7D5C5",
    light: "#D2E9E1",
    highlight: "#E8F3EF",
  },
  orange: {
    darkest: "#CE5200",
    dark: "#E97122",
    base: "#F89859",
    medium: "#FABC94",
    light: "#FBDDC9",
    highlight: "#FCEDE3",
  },
  violet: {
    darkest: "#5A0C88",
    dark: "#70428B",
    base: "#A67FBD",
    medium: "#C5ACD4",
    light: "#E1D5E9",
    highlight: "#EFE9F3",
  },
  brown: {
    darkest: "#685044",
    dark: "#867164",
    base: "#A49284",
    medium: "#C1B2A5",
    light: "#D6CFCA",
    highlight: "#F3F1F0",
  },
  gray: {
    darkest: "#4E4D4D",
    dark: "#777676",
    dusty: "#999",
    base: "#ABAAAA",
    medium: "#CAC9C9",
    light: "#DFDEDE",
    highlight: "#EAEAEA",
    highlighthalf: "#F1F1F1",
    essence: "#FAFAFA",
  },
  silver: {
    darkest: "#767676",
    dark: "#707070",
    dusty: "#b3b3b3",
    base: "#CCC",
    medium: "#D9D9D9",
    light: "#E5E5E5",
    highlighthalf: "#EEE",
    highlight: "#f2f2f2",
    essence: "#f7f7f7",
  },
  SIGreen: {
    darkest: "#243a10",
    dark: "#58842d",
    base: "#72aa3c",
    medium: "#a4d17a",
    light: "#d6ecc2",
    highlight: "#eefae3",
  },
  SIDark: {
    darkest: "#001315",
    dark: "#12353a",
    base: "#469fac",
    medium: "#7fc8d2",
    light: "#c5e8ed",
    highlight: "#e5f9fc",
  },
  SIPink: {
    darkest: "#49012a",
    dark: "#770544",
    base: "#ed2c95",
    medium: "#f25aac",
    light: "#fdb7dd",
    highlight: "#ffe4f6",
  },
  black: {
    darkest: "#222",
    dark: "#302F2F",
    base: "#333",
  },
  white: {
    dark: "#FFF",
    base: "#FDFDFD",
  },
};

export default defaultColors;
