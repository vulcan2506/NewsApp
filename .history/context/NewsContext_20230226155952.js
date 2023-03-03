
import { createContext , useEffect , useState } from "react";
import {db , auth , provider } from '../firebase'
import {getDocs, setDoc, doc  } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { Router } from "next/router";
import { useRouter } from "next/router";

const NewsContext
 = createContext()

const NewsProvider = ({children}) => {
    const router = useRouter();
    const[users,setUsers] = useState([]);
    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        const getUsers = async()=>{
            const querySnapshot = await getDocs(collection(db,'users'))
            setUsers(querySnapshot.docs.map(doc=> {
                return{
                id: doc.id,
                data:{
                   ...doc.data()
                } } }
                ))
          }  
          getUsers();
        
    })

    useEffect(() => {
        const getPosts = async() => {
            const querySnapshot = await getDocs(collection(db,'Posts'))
            setPosts(querySnapshot.docs.map(doc => {
    
                return{
                    id: doc.id,
                    data:{
                        address:doc.data().address,
                        issue:doc.data().issue,
                        image:doc.data().image,
                        pincode: doc.data().pincode,
                        phoneno:doc.data().phoneno,
                        name:doc.data().name
                    } } 
             }))
            }
            getPosts() 
       },[])

       const handlUserAuth = async () => {
        const userData = await signInWithPopup(auth,provider);
        const user = userData.user;
        console.log(user)
        setCurrentUser(user)
        addToFirebase(user)
     }
    
     const checkAuth = async () => {
        if(!currentUser){
            await handlUserAuth()
            router.push('/choose/fridgechoose')
           
     }
     else{
     
        router.push('/choose/fridgechoose')
     }
    
    }
    return(
        <NewsContext.Provider value={{posts,checkAuth}}>{children}</NewsContext.Provider>
        
    )
}

export{NewsContext,NewsProvider}