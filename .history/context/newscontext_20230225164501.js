import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";

const NewsContext = createContext()
function NewsProvider({children}){

    return(
        <NewsContext.Provider></NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
