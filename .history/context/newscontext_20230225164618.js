import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";

const NewsContext = createContext()
function NewsProvider({children}){

    const memoed = useMemo(()=>{},[])

    return(
        <NewsContext.Provider value={}></NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
