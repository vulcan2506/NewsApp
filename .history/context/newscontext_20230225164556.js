import { useContext , useState } from "react";
import { createContext } from "react";
import { useMemo } from "react";

const NewsContext = createContext()
function NewsProvider({children}){

    const memoed

    return(
        <NewsContext.Provider value={children}></NewsContext.Provider>
    )

}
export {NewsContext,NewsProvider}
