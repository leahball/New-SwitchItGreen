import * as React from "react";
import AppThemeProvider from "../public/theme-provider";
// TODO: inspect voodoo code to see if it's working with NextJS;
// import * as NextImage from "next/image";

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

// The AppThemeProvider has the Chakra ColorModeProvider and ThemeProvider
const ThemeDecorator = (Story) => (
  <AppThemeProvider>
    <Story />
  </AppThemeProvider>
);

export const decorators = [ThemeDecorator];
