
import { useValueContext } from '../contexts/propscontext'
import rating5 from "../assets/svg/flashsales/Five star.svg";
import rating1 from "../assets/img/flashsalescomp/1rating.png";
import rating2 from "../assets/img/flashsalescomp/2rating.png";
import rating3 from "../assets/img/flashsalescomp/3rating.png";
import rating4 from "../assets/img/flashsalescomp/4rating.png";
import { useState } from 'react';



function ShopSidebar (){
     const {categories,ToUp,products,HandleBrands,HandleCategory,HandleRatings} = useValueContext();
   
      
    
      const brands = products.map((product,_)=> product.brand )

     
   
  

    return(
        <>
            <div className="lg:w-[20%] sm:w-[30%] w-[40%] pl-[22px] ">

                <h1 className="font-semibold text-[20px] ">
                    Filter by brands
                </h1>

                 <div className="mt-[16px] mb-[30px]">
                  { brands.slice(184,191).map((brand,index)=>  <div key={index} className="flex gap-[8px] mb-[8px]">
                        <input type="radio" name="brands" id={brand} value={brand} onChange={HandleBrands} />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                )}
                </div>




               

            </div>
        </>
    )

}
export default ShopSidebar