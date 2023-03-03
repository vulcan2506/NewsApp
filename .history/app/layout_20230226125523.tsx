import '../styles/globals.css'
import Header from './Header'
import {NewsProvider} from '../context/NewsContext'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <div>
          <Header/></div><News{children}</body>
    </html>
  )
}
