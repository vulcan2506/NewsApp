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
                    title:doc.data().address,
                    issue:doc.data().issue,
                    image:doc.data().image,
                    pincode: doc.data().pincode,
                    phoneno:doc.data().phoneno,
                    name:doc.data().name
                }}
         })
    }
    return(
        <div></div>
    )
}
export{RepairContext,RepairProvider};