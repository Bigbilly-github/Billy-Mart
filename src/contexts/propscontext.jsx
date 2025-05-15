import { createContext,useContext,useEffect, useState } from "react";

const valueContext = createContext();




function ContextProvider ({ children }){
    return(
        <>
         <valueContext.Provider value={{}}>
                 {children}
        </valueContext.Provider>
        </>
    )





    
}

export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };