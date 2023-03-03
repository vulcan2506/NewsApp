
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
    const[posts,setPost] = useState([]);

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

    
    return{
        
        
    }
}