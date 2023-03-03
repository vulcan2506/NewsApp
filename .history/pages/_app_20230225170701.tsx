import '../styles/globals.css'
import NewsP
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <NewsProvider><Component {...pageProps} /></NewsProvider>
}

export default MyApp
