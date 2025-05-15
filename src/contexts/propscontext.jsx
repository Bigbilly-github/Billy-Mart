import { createContext,useContext,useEffect, useState } from "react";

const valueContext = createContext();




function ContextProvider ({ children }){



    useEffect(()=>{
        const getApiDetail = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/products?limit=0');
                const responseData = await response.json();
                console.log(responseData);

            }
            catch(err) {
                console.log( err)
            }
           
        }
        getApiDetail();

    },[])
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