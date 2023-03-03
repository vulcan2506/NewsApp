import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";
import db

const NewsContext = createContext()
function NewsProvider({children}){

    
    
    const memoed = useMemo(()=>{

    },[])

    return(
        <NewsContext.Provider value={memoed}>{children}</NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
