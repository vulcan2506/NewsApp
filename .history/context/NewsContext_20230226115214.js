"use client";
import { createContext , useEffect , useState } from "react";
import {db , auth , provider } from '../firebase'
import {getDocs, setDoc, doc  } from "firebase/firestore";
import { collection } from "firebase/firestore";

const RepairContext = createContext()

const RepairProvider = ({children}) => {
    const[post,setPost] = useState([]);
    
    const getPost = async () =>{
         const querySnapshot = await getDocs(collection(db,'Posts'))
         querySnapshot.docs.map(doc =>{
             return{
                id: doc.id,
                data:{
                    title:doc.data().title,
                    image:doc.data().image,
                    description: doc.data().description,
                    body:doc.data().body,
                   
        
                }}
         })
    }
    return(
        <div><Rpa></></div>
    )
}
export{RepairContext,RepairProvider};