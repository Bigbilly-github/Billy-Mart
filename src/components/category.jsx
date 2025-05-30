import BodyDetail from "./bodydetail"
import React, { useState,useEffect,useRef } from 'react'
import { useValueContext } from '../contexts/propscontext'
import CategoryComp from "./caregorycomp";
import beauty from "../assets/img/category/beauty.jpeg"
import fragrances from "../assets/img/category/fragrances.jpeg"
import furniture from "../assets/img/category/furniture.jpg"
import groceries from "../assets/img/category/groceries.jpg"
import homedecor from "../assets/img/category/home-decor.jpg"
import kitchen from "../assets/img/category/kitchen.jpg"
import laptops from "../assets/img/category/laptops.jpeg"
import mensshirt from "../assets/img/category/mens-shirt.jpeg"
import mensshoe from "../assets/img/category/mens-shoes.jpg"
import menswatch from "../assets/img/category/mens-watch.jpg"



function Category (){

    const { categories } = useValueContext();
     const carouselRef = useRef(null);

     function selectImage (category) {
        switch (category) {
            case "beauty":
               return beauty
                
         
            case "fragrances":
                return fragrances
                
          
            case "furniture":
                return  furniture
                  
           
              case "kitchen-accessories":
                return kitchen
                  
             
              case "groceries":
                return groceries
                  
           
              case "home-decoration":
                return homedecor
                  
            
              case "laptops":
                return laptops
                  
           
              case "mens-shirts":
                return mensshirt
                  
          
              case "mens-shoes":
                return mensshoe
                  
            
              case "mens-watches":
             return menswatch
                  
         
        
            default:
                break;
        }


     }

     function DisplayCategory (){
      
     }
    
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

      if (!Array.isArray(categories) || categories.length === 0) {
        return <p className="text-center mt-10">Loading categories...</p>;
      } 
    


    return(
        <>
     
         <section className="w-full h-auto flex justify-center  mb-[80px] ">
                    <div className='w-[90%] px-[30px] flex  flex-col '>
                    <BodyDetail text="categories" maintext="Browse By Category" scroll={scroll}/> 
        
                        
                       
        
                        <div  className='w-full h-[308px] mt-[40px]  overflow-hidden '>
                            <CategoryComp categories={categories.slice(0,10)} carouselRef={carouselRef} selectImage={selectImage}/>
                      
        
        
        
                        </div>
                        
                    </div>
        
                </section>

        </>
    )

}
export default Category