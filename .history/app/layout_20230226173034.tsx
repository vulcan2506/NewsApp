import Header from "./Header";
import page from "./page";
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