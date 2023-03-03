import Header from "./Header";
import Page
import '../styles/globals.css'
export default function RootLayout({
    children,
}:{children:React.ReactNode;}){
    return(
        <html>
            <head/>
            
            <body><Header/><Page></body>
        </html>
    )
}