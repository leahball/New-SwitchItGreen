import "../styles/globals.css"
import type { AppProps } from "next/app"
import Fonts from "../components/theme/Fonts"
import Hero from "../components/Hero"
import AppThemeProvider from "../components/theme-provider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Fonts />
      <Hero/>
      <Component style={{backgroundColor: 'darkgrey'}} {...pageProps} />
    </AppThemeProvider>
  )
}

export default MyApp
