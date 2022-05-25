import * as React from "react"
import AppThemeProvider from '../public/theme-provider'

// The AppThemeProvider has the Chakra ColorModeProvider and ThemeProvider
const ThemeDecorator = (Story) => (
  <AppThemeProvider>
    <Story />
  </AppThemeProvider>
)

export const decorators = [ThemeDecorator];
