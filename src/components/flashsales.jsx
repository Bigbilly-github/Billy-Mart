import React, { useState,useEffect,useRef } from 'react'
import { useValueContext } from '../contexts/propscontext'
import img from "../assets/svg/flashsales/Frame 611.svg";
import img1 from "../assets/svg/flashsales/Five star.svg";





function FlashSales (){

    const {products} = useValueContext();
    console.log(products);
  

    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const container = carouselRef.current;
        const cardWidth = container.firstChild.offsetWidth + 30; // includes gap
        const scrollAmount = cardWidth * 2;

        if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center mt-10">Loading flash sales...</p>;
  }

  
 


    return(
        <>
        <section className="w-full h-auto flex justify-center mt-[140px] mb-[140px]">
            <div className='w-[90%] px-[30px] flex  flex-col  '>
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[20px] h-[50px] bg-[red] rounded-t-[5px] rounded-b-[5px]"> </div>
                            <p className="font-[poppins] text-[16px] font-semibold">
                                Today's 
                            </p>
                        </div>
            

                        <div className="flex items-center  justify-between mt-[24px] ">
                            <p className="md:text-[36px] text-[24px]  font-semibold font-[poppins] tracking-wider">
                                Flash Sales
                            </p>
                            <div className="flex items-center gap-[10px] ">
                                    <button
                                    onClick={() => scroll("left")}
                                    
                                        className="   bg-slate-300  text-[20px]   text-black px-3 py-1 rounded-full"
                                    >
                                        &larr;
                                    </button>
                                    <button
                                    onClick={() => scroll("right")}
                                    
                                        className="   bg-slate-300 text-[20px]  text-black px-3 py-1 rounded-full"
                                    >
                                        &rarr;
                                        </button>
                            </div>

                        </div>

                
               

                <div  className='w-full h-[580px] mt-[40px]  overflow-hidden'>
                    <div ref={carouselRef} className='flex gap-[30px] overflow-x-auto scroll-smooth no-scrollbar transition-all duration-300'>

                  
                        { products.slice(0,25).map((product,_) =>(
                            <div   key={product.id} className='w-[270px] h-[100%] '>
                                <div className='w-full h-[100%] bg-[#F5F5F5] flex  items-center justify-center  rounded-[4px]'>
                                    <img src={product.thumbnail} alt="item thumbnail"  className='  object-contain'/>

                                </div>
                                <div className='w-[201px] h-auto mt-[16px] '>
                                    <h1 className='font-medium text-[16px]'>
                                {product.title}
                                    </h1>
                                    <p className='text-[#DB4444] mt-[7px]'>
                                    ${product.price}
                                    </p>
                                    <div className='flex gap-[15px] items-center mt-[7px]'>
                                        <img src={img1} alt="rating icon" />
                                        <p>
                                            ({product.stock})
                                        </p>

                                    </div>
                                    

                                </div>

                            </div>
                             ))}
                   </div>



                </div>
                
            </div>

        </section>
        </>
    )


}
export default FlashSales