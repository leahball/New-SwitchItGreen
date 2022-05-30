import * as React from 'react'
import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider,
  ThemeProviderProps,
  extendTheme,
} from '@chakra-ui/react'

import appTheme from '../theme'

interface Props {
  themeOverride?: ThemeProviderProps
  children: React.ReactNode
}

const options = { useSystemColorMode: true }

/**
 * Use this component to apply the themes to your app
 *
 * @param themeOverride object that will override default theme
 * @param children component(s) to render
 * @constructor
 */
export default function AppThemeProvider({ themeOverride, children }: Props) {
  const theme = extendTheme({ ...appTheme, ...themeOverride })

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider options={options}>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
