
import { signInWithPopup } from "firebase/auth";
import { setDoc , doc} from "firebase/firestore";
import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { auth } from "../firebase";
import { provider } from "../firebase";

const NewsContext = createContext();
function NewsProvider({children}){
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
    
    const memoed = useMemo(()=>{
        handlUserAuth,users
    },[handlUserAuth])

    return(
        <NewsContext.Provider value={memoed}>
            {children}</NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
