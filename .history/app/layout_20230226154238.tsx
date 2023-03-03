import Header from "./Header";
import '..s'
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