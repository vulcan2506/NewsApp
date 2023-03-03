"use client";
import { createContext , useEffect , useState } from "react";
import {db , auth , provider } from '../firebase'
import {getDocs, setDoc, doc  } from "firebase/firestore";
import { collection } from "firebase/firestore";

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const[post,setPost] = useState([]);
    useEffect(()=>{})
    
    return(
        <div><NewsContext.Provider value={getPost}>{children}</NewsContext.Provider></div>
    )
}
export{NewsContext,NewsProvider};