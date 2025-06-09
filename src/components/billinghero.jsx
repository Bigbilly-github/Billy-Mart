import BillingForm from "./billingform"
import { useValueContext } from '../contexts/propscontext'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



function BillingHero (){
      const { cart,products,setCart,cartProducts,SubTotal,SubDelivery,Total,billingdetails, setBillingDetails} = useValueContext();
      const [iscash,setIsCash] =  useState("");
            const navigate = useNavigate();

      function HandlePaymentOption (e){
        setIsCash(e.target.value);
      }

  function PlaceOrder (){
    if(iscash==="true"){
        alert("Your order is being processed, check your order section in your profile for more details");
       setTimeout(() => {
         navigate('/');
       }, 550);
          
    }
  }
    return(
        <>
        <section className="w-full flex   h-auto mb-[150px] mt-[50px] justify-center">
            <div className="w-[90%] ">
                     <h1 className="font-medium text-center sm:text-left sm:text-[24px] text-[18px] md:text-[36px] mb-[40px] ">
                        Billing Details
                    </h1>
            
                    <div className="  flex flex-col items-center gap-[50px] sm:gap-0  sm:flex-row sm:items-start sm:justify-between  ">
                        <BillingForm/>
                        <div className=" h-auto sm:w-[60%] w-[90%]  ">
                        {cartProducts.map((item,index) => <div key={index} className="flex  justify-between mb-[20px] ">
                                <div className="flex gap-[10px] items-center"> 
                                    <img src={item.thumbnail} alt="item image" className="w-[40px] h-[40px]" />
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                                    {item.title}
                                    </p>


                                </div>
                                <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                                    {(Number(item.price) * Number(item.quantity)).toFixed(2)}
                                </p>

                            </div>
                            )}
                            <div className="flex justify-between border-b mt-[30px] pb-[10px]">
                                    <p className="font-normal text-[12px]  sm:text-[14px] md:text-[16px]">
                                        Subtotal:
                                    </p>
                                    <p className="font-normal text-[12px]  sm:text-[14px] md:text-[16px]">
                                    ${SubTotal().toFixed(2)}
                                    </p>

                                </div>
                                <div className="flex justify-between border-b mt-[20px]  pb-[10px]">
                                    <p className="font-normal text-[12px]  sm:text-[14px] md:text-[16px]">
                                        Shipping:
                                    </p>
                                    <p className="font-normal text-[12px]  sm:text-[14px] md:text-[16px]">
                                    ${SubDelivery().toFixed(2)}
                                    </p>

                                </div>

                                <div className="flex justify-between mt-[20px] pb-[10px]">
                                    <p className="font-normal text-[12px]  sm:text-[14px] md:text-[16px]">
                                        Total:
                                    </p>
                                    <p className="font-normal text-[12px]  sm:text-[14px] md:text-[16px]">
                                    ${Total(SubDelivery,SubTotal)}
                                    </p>

                                </div>

                                <div className="flex gap-[15px] mt-[30px]">
                                        <input type="radio" id="cash" value="true"  onChange={HandlePaymentOption}/>
                                        <label htmlFor="cash" className="font-normal text-[12px]  sm:text-[14px] md:text-[16px]" >Cash on Delivery </label>

                                </div>
                                    <button
                                
                                    onClick={()=>PlaceOrder()}
                                    className="bg-[red] text-white py-2 px-[40px] hover:outline-2 hover:outline-offset-2 hover:outline-black duration-150  mt-4 rounded  text-sm"
                                    > Place order</button>

                            


                        </div>
                    

                    </div>

            </div> 


        </section>
        </>
    )

}
export default  BillingHero