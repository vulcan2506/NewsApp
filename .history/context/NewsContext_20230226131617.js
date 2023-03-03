"use client";
import { createContext , useEffect , useState } from "react";
import {db , auth , provider } from '../firebase'
import {getDocs, setDoc, doc  } from "firebase/firestore";
import { collection } from "firebase/firestore";

const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    
   
   )
   return <NewsContext.Provider value={{post}}>{children}</NewsContext.Provider>
}
export const  useNewsContext = () => useContext(NewsContext);