"use client";
import { createContext , useEffect , useState } from "react";
import {db , auth , provider } from '../firebase'
import {getDocs, setDoc, doc  } from "firebase/firestore";
import { collection } from "firebase/firestore";

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const[post,setPost] = useState([]);
    
    useEffect(()=>{
        const getPost = async () =>{
        const querySnapshot = await getDocs(collection(db,'Posts'))
        setPost(
            querySnapshot.docs.map(doc =>{
            return{
               id: doc.id,
               data:{
                   title:doc.data().title,
                   image:doc.data().image,
                   description: doc.data().description,
                   body:doc.data().body,
                  
       
               }}
               
        }))
        getPost();
   }}
   
   )
   return <NewsContext.Provider value={{post}}>{children}</NewsContext.Provider>
}
export const  useNewsContext = () =>useContext