import * as React from "react";

// TODO: add ThemeProvider here (wrap around Story child component)
const ThemeDecorator = (Story) => {
  return <Story />;
};

export const decorators = [ThemeDecorator];

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
