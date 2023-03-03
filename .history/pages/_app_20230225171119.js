import NewsProvider from '../context/newscontext.'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <NewsProvider><Component {...pageProps} /></NewsProvider>
}

export default MyApp
