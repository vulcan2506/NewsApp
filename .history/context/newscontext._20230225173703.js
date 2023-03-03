"use client";
import { signInWithPopup } from "firebase/auth";
import { setDoc , doc} from "firebase/firestore";
import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";
import { db } from "../firebase";
import { useRouter } from "next/navigation";
import { collection } from "firebase/firestore";
import { auth } from "../firebase";
import { provider } from "../firebase";

const NewsContext = createContext();
function NewsProvider({children}){
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState();

   const addToFirebase = async user =>{
        await setDoc(doc(db,'users',user.email),{
            email:user.email,
            name: user.displayName
        })
    }


    const handlUserAuth = async () =>{
        const userData =  await signInWithPopup(auth,provider)
        const user = userData.user;
        console.log(user)
        setCurrentUser(user)
        addToFirebase(user)
    } 

    const checkAuth2 = async () => {
        if(!currentUser){
            await handlUserAuth()
            router.push('/choose/fridgechoose')
           
     }
     else{
     
        router.push('/choose/fridgechoose')
     }
    const memoed = useMemo(()=>{
        handlUserAuth,users
    },[handlUserAuth])

    return(
        <NewsContext.Provider value={{ handlUserAuth,users}}>
            {children}</NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
