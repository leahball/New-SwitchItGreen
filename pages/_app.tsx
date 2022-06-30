import type { AppProps } from "next/app"
import Fonts from "../components/theme/Fonts"
import AppThemeProvider from "../components/theme-provider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Fonts />
      <Component style={{backgroundColor: 'SIDark.medium'}} {...pageProps} />
    </AppThemeProvider>
  )
}

export default MyApp
