
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

    return()
}