import Header from "./Header";
import '../styles/globals.css'
export default function RootLayout({
    children,
}:{children:React.ReactNode;}){
    return(
        <html>
            <head/>
            
            <body><Heade{children}</body>
        </html>
    )
}