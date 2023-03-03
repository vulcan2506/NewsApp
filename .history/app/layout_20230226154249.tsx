import Header from "./Header";
import '../styles/globl'
export default function RootLayout({
    children,
}:{children:React.ReactNode;}){
    return(
        <html>
            <head/>
            
            <body><Header/> {children}</body>
        </html>
    )
}