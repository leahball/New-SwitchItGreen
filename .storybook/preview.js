import * as React from "react"
import AppThemeProvider from '../components/theme-provider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  viewMode: 'docs',
}

// The AppThemeProvider has the Chakra ColorModeProvider and ThemeProvider
const ThemeDecorator = (Story) => (
  <AppThemeProvider>
    <Story />
  </AppThemeProvider>
);

export const decorators = [ThemeDecorator];
