import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";
import { provider } from "../firebase";

const NewsContext = createContext()
function NewsProvider({children}){

    const handlUserAuth = async () =>{
        sign
    }
    
    const memoed = useMemo(()=>{

    },[])

    return(
        <NewsContext.Provider value={memoed}>{children}</NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
