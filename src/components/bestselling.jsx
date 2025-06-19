import BodyDetail from "./bodydetail"
import React, { useState,useEffect,useRef } from 'react'
import { useValueContext } from '../contexts/propscontext'
import FlashSalesComp from "./flashsalescomp";




function BestSelling (){

     const { categories, products } = useValueContext();
         const carouselRef = useRef(null);

         const bestselling = products.slice(25,50);
        

    const scroll = (direction) => {
        const container = carouselRef.current;
        const cardWidth = container.firstChild.offsetWidth + 30; 
        const scrollAmount = cardWidth * 1;

        if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return <p className="text-center mt-10">Loading best selling products...</p>;
  } 




    return(
        <>
         <section className="w-full h-auto flex justify-center mt-[80px] mb-[100px] ">
                    <div className='w-[95%] px-[30px] flex  flex-col '>
                    <BodyDetail text="This Month" maintext="Best Selling" scroll={scroll}/> 
        
                        
                       
        
                        <div  className='w-full h-auto pb-[50px]  mt-[40px]  overflow-hidden '>
                        <FlashSalesComp products={bestselling}   carouselRef={carouselRef} />
                           
                      
        
        
        
                        </div>
                        
                    </div>
        
                </section>


        </>
    )

}
export default BestSelling