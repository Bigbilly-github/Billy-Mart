


import React, { useState, useEffect, useRef } from "react";
import { useValueContext } from "../contexts/propscontext";

import FlashSalesComp from "./flashsalescomp";
import BodyDetail from "./bodydetail";

function ProductDisplay (){

      const { products, displayValue,displayterm} = useValueContext();

     const carouselRef = useRef(null);
    
      const scroll = (direction) => {
        const container = carouselRef.current;
        const cardWidth = container.firstChild.offsetWidth + 30;
        const scrollAmount = cardWidth * 1;
    
        if (direction === "left") {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      };
    
      if (!Array.isArray(products) || products.length === 0) {
        return <p className="text-center mt-10">Loading flash sales...</p>;
      }

      const display = products.filter(product => product[displayterm] === displayValue )

     

    return(
        <>

         <section className="w-full h-auto flex justify-center mt-[70px] mb-[50px] ">
            <div className="w-[90%] px-[30px] flex  flex-col ">
                <BodyDetail text={displayterm} maintext={displayValue} scroll={scroll} />

                <div className="w-full h-auto pb-[50px] mt-[40px]  overflow-hidden ">
                    <FlashSalesComp
                    products={display}
                    
                    carouselRef={carouselRef}
                    />
                </div>
            </div>
      </section>
        </>
    )

}
export default ProductDisplay