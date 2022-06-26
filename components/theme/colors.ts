export const enum ColorOptions {
  Dusty = "dusty",
  Bright = "bright",
  Darkest = "darkest",
  Dark = "dark",
  Base = "base",
  Medium = "medium",
  Light = "light",
  Highlight = "highlight",
  Essence = "essence",
}

export type DefaultColors = {
  [key: string]: {
    [key in ColorOptions]+?: string;
  };
};

const defaultColors: DefaultColors = {
  Primary: {
    darkest: "#49012a",
    dark: "#770544",
    base: "#ed2c95",
    medium: "#f25aac",
    light: "#fdb7dd",
    highlight: "#ffe4f6",
  },
  Secondary: {
    darkest: "#001315",
    dark: "#12353a",
    base: "#469fac",
    medium: "#7fc8d2",
    light: "#c5e8ed",
    highlight: "#e5f9fc",
  },
  Accent: {
    darkest: "#243a10",
    dark: "#58842d",
    base: "#72aa3c",
    medium: "#a4d17a",
    light: "#d6ecc2",
    highlight: "#eefae3",
  },
  Natural: {
    darkest: "#e4cea0",
    dark: "#eee2c6",
    base: "#faf5ea",
    light: "#F9F8EF",
  },
  Result: {
    dark: "#74090b",
    base: "#E93535",
    light: "#fcb8b8",
  },
  black: {
    darkest: "#222",
    dark: "#302F2F",
    base: "#333",
  },
  gray: {
    darkest: "#4E4D4D",
    dark: "#777676",
    dusty: "#999",
    base: "#ABAAAA",
    medium: "#CAC9C9",
    light: "#DFDEDE",
    highlight: "#EAEAEA",
    essence: "#FAFAFA",
  },
  white: {
    dark: "#FFF",
    base: "#FDFDFD",
  },
};

export default defaultColors;
