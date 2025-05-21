import { createContext,useContext,useEffect, useState } from "react";

const valueContext = createContext();




function ContextProvider ({ children }){

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

   
  



    useEffect(()=>{
        const getApiDetail = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/products?limit=0');
                const responseData = await response.json();
                setProducts(responseData);
                const response1 =await fetch('https://dummyjson.com/products/category-list');
                const response1Data = await response1.json();
                setCategories(response1Data.slice(0,10));
               
         

            }
            catch(err) {
                console.log( err)
            }
           
        }
        getApiDetail();

    },[])
    return(
        <>
         <valueContext.Provider value={{products, categories}}>
                 {children}
        </valueContext.Provider>
        </>
    )





    
}

export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };