import { createContext,useContext,useEffect, useState } from "react";

const valueContext = createContext();




function ContextProvider ({ children }){


    const [displayterm, setDisplayTerm] = useState("category"); 
     const [displayValue, setDisplayValue] = useState("groceries"); 
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

     const [brandterm,setBrandTerm] = useState("brand");
     const [brandvalue,setBrandValue] = useState("Rolex");

    console.log(products);
    
    const scrollToTop = () => {
    window.scrollTo({
      top: 700, 
      behavior: "smooth",
    });
  };

  
     
  


   

  
 


    function HandleCategory (e){
        setDisplayTerm("category");
        setDisplayValue(e.target.value);
         if (window.innerWidth < 640 ){
        scrollToTop()
       

    }

    }

     function HandleBrands (e){
      
        setBrandValue(e.target.value);
         
       

    }
   


 

    

    function ToUp (option){
        const firstLetter = option.slice(0,1).toUpperCase();
        const restOfLetters = option.slice(1,option.length)
        const newOption= `${firstLetter}${restOfLetters}`

        return newOption;
        
    }
   
   

  

   

   
  



    useEffect(()=>{
        const getApiDetail = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/products?limit=0');
                const responseData = await response.json();
                setProducts(responseData.products);
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
         <valueContext.Provider value={{brandterm,brandvalue,products, categories, HandleBrands,ToUp,HandleCategory,displayValue,setDisplayTerm,displayterm,setDisplayValue}}>
                 {children}
        </valueContext.Provider>
        </>
    )





    
}

export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };