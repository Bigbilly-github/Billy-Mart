
import groceries from "../assets/img/category/groceries.jpg"
import rating2 from "../assets/img/flashsalescomp/2rating.png";
import img from "../assets/svg/flashsales/Fill Heart.svg";
import deliveryicon from "../assets/svg/productdetails/icon-delivery.svg";
import React, { useState, useEffect, useRef } from "react";
import { useValueContext } from "../contexts/propscontext";
import RelatedItems from "./relateditems";


function ProductDetails ({title}){
     const { products,GetRatings,HandleDelivery,HandleQuantity,addToCart,cart,cartitemdeliverychoice,cartitemquantity} = useValueContext();

    const selectedProduct = products.filter(product => product.title === title);
   

    function RelatedCategories (category) {
        const CategoryArray= products.filter(product=>  product.category === category)
        return CategoryArray
    }

    return(
        <>
        <section className="w-full h-auto flex mt-[50px]  justify-center mb-[140px] ">
           { selectedProduct.map((product,_)=> <div key={product.id} className="flex flex-col  items-center w-[100%]"> <div key={product.id} className="w-[90%]  flex xl:flex-row flex-col  gap-[50px] ">
                <div className="xl:w-[60%] w-[100%] flex  ">
                    <div className="lg:w-[20%] w-[30%] xl:mr-[50px] mr-[20px]  ">
                        
                        <div className="flex  bg-white gap-[20px] flex-col g">
                            { product.images.map((images,index) => <div key={index} className="h-[138px] bg-slate-100 flex justify-center items-center "> <img src={images} alt="image"  className="  w-[50%] object-contain "/></div>)}

                        </div>
                    

                    </div>
                    <div className="flex-1 bg-slate-100 rounded-[4px] flex justify-center items-center xl:mr-[50px]">
                        <img src={product.thumbnail} alt="image"  className="h-[60%] rounded-[4px]"/>

                    </div>

                </div>

                <div className="flex-1 px-[20px] pt-[20px] border-b pb-[50px] border-slate-500">
                    <h1 className="text-[24px] font-semibold text-black">
                        {product.title}
                    </h1>
                    <div className="flex gap-[10px] mt-[10px] mb-[10px] items-center">
                          <img src={GetRatings(product.rating)} alt="5-star rating image" className="h-[40px]" />
                        <p>
                            ({product.reviews.length} Review{product.reviews.length > 1 ? "s":null})
                        </p>
                     </div>
                     <p className="text-[24px] mb-[20px] font-normal">
                        ${product.price}
                     </p>
                     <p className="font-normal text-[14px] pb-[20px] border-b border-slate-500">
                        {product.description}
                     </p>
                   
                      <div className="flex  gap-[15px] mt-[30px]">
                            <select name="quantity" id="quantity" defaultValue="" onChange={HandleQuantity} className="px-[12px] outline-0 text-[18px] rounded-[5px] bg-slate-200 ">
                                <option disabled  hidden  value="">Select quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                    <option value="5">5</option>
                            </select>
                            <button onClick={()=>addToCart(cart,product.id,product.price,cartitemdeliverychoice,cartitemquantity)} className="cursor-pointer px-[20px] hover:bg-white hover:text-[red] duration-150 py-[10px] bg-[red] font-medium rounded-[5px] text-white"> Add to Cart</button>
                            <img src={img} alt="heart icon" />
                        </div> 

                        <div className="flex flex-col mt-[50px] gap-[10px] ">
                            <div className="flex gap-[10px] items-center ">
                                  <input type="radio"  id="free" value="0" checked={cartitemdeliverychoice === "0"} name="delivery" onChange={HandleDelivery} className="mr-[10px]"/>
                                <div className="flex flex-col">
                                    <div>
                                      
                                        <label  htmlFor="free" className="font-medium text-[16px]">
                                            FREE DELIVERY
                                        </label>

                                    </div>

                                    <p className="font-medium text-[12px] text-slate-600 ">
                                        Get your item within 21 days of placing order.
                                    </p>

                                </div>

                            </div>
                             <div className="flex gap-[10px] items-center ">
                                <input type="radio"  id="sevendays" value="25" name="delivery" checked={cartitemdeliverychoice === "25"}  onChange={HandleDelivery} className="mr-[10px]"/>
                                <div className="flex flex-col">
                                    <div>
                                      
                                        <label  htmlFor="sevendays" className="font-medium text-[16px]">
                                           7 DAYS DELIVERY FOR $25
                                        </label>

                                    </div>
                                    <p className="font-medium text-slate-600 text-[12px]">
                                        Get your item within 7 days of placing order.
                                    </p>

                                </div>

                            </div>
                        </div>
                  
                    
                    
                </div>

              

            </div>
               <RelatedItems  products={RelatedCategories(product.category)}/>
               </div> 
           
            )}

        </section>

        </>
    )

}
export default ProductDetails