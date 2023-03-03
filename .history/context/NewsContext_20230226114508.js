"use client";
import { createContext , useEffect , useState } from "react";
import {db , auth , provider } from '../firebase'
import {getDocs, setDoc, doc  } from "firebase/firestore";
import { collection } from "firebase/firestore";

const RepairContext = createContext()

const RepairProvider = ({children}) => {
    const[post,setPost] = useState([]);
}
export{RepairContext,Re}