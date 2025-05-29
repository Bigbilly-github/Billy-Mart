import ShopSidebar from "./shopsidebar"
import heart from "../assets/svg/header/heart1.svg";
import  { useState,useEffect,useRef } from 'react'
import { useValueContext } from '../contexts/propscontext'





function ShopDisplay (){
     const {brandterm,brandvalue,categories,ToUp,products,HandleCategory,displayValue,setDisplayTerm,displayterm,setDisplayValue} = useValueContext();
  
  
       const displayDataRef =useRef([]);
   
    const display = products.filter(product => product[brandterm] === brandvalue )
      displayDataRef.current = display;
    
    return(
        <>
        <section className="w-full h-auto pb-[50px] hidden sm:flex justify-center mt-[50px]">
            <ShopSidebar/>
            
            <div className="lg:w-[70%] sm:w-[60%] w-[50%]  h-auto  gap-[20px] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-[40px]  pt-[30px] px-[20px]">
               { displayDataRef.current.map((data,index)=> <div key={index} className="h-[398px]   ">
                    <img src={data.thumbnail} alt="item's image"  className="w-[100%] h-[70%] object-contain bg-[#F5F5F5] "/>
                    <div className="flex justify-between h-[92px] mt-[10px] items-center px-[12px]">
                        <div className="flex flex-col w-[200px]  gap-[6px] ">
                            <p className="md:text-[16px] text-[12px] font-semibold">
                               {data.title}
                            </p>
                            <p className="font-normal md:text-[16px] text-[12px] ">
                                ${data.price}
                            </p>

                        </div>
                        <img src={heart} alt="heart icon"  className="w-[24px] h-[24px]"/>

                    </div>

                </div>
            )}
               

            </div>

        </section>
        </>
    )

}
export default ShopDisplay