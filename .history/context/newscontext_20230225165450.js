import { signInWithPopup } from "firebase/auth";
import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";
import { provider } from "../firebase";

const NewsContext = createContext()
function NewsProvider({children}){
    const [currentUser, setCurrentUser] = useState();

    const addToFirebase = async => {}


    const handlUserAuth = async () =>{
        const userData =  await signInWithPopup(auth,provider)
        const user = userData.user;
        console.log(user)
        setCurrentUser(user)
        addToFirebase(user)
    }
    
    const memoed = useMemo(()=>{
        handlUserAuth
    },[handlUserAuth])

    return(
        <NewsContext.Provider value={memoed}>{children}</NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
