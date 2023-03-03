import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <newsProvider></newsProvider><Component {...pageProps} />
}

export default MyApp
