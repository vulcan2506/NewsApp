import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <NewsProvider></NewsProvider><Component {...pageProps} />
}

export default MyApp
