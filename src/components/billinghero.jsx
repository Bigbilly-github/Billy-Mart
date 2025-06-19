import BillingForm from "./billingform"
import { useValueContext } from '../contexts/propscontext'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../js/firebase";
import { toast } from 'react-toastify';



function BillingHero (){
      const { cart,products,setCart, placedorders,setPlacedOrders,cartProducts,SubTotal,SubDelivery,Total,billingdetails, setBillingDetails} = useValueContext();
      const [iscash,setIsCash] =  useState("");
            const navigate = useNavigate();

      function HandlePaymentOption (e){
        setIsCash(e.target.value);
      }

  function PlaceOrder() {
                const user = auth.currentUser;

            if (!user) {
                toast.error("You must be logged in to place an order.");
                return;
            }

            const userId = user.uid;

           
            const billingKey = `billingdetails_${userId}`;
            const storedBilling = localStorage.getItem(billingKey);

            if (!storedBilling) {
                toast.error("Please fill in your billing details before placing an order.");
                return;
            }

            const billing = JSON.parse(storedBilling);

           
            const requiredFields = ["firstname", "address", "town", "phonenumber", "email"];
            const isBillingComplete = requiredFields.every(field => billing[field] && billing[field].trim() !== "");

            if (!isBillingComplete) {
                toast.error("Please complete all billing details before placing an order.");
                return;
            }

           
            if (iscash === "true") {
                const storedOrders = localStorage.getItem(`placedorders_${userId}`);
                const userOrders = storedOrders ? JSON.parse(storedOrders) : [];


            const newOrders = [...userOrders, cart];
            setPlacedOrders(newOrders); 

            localStorage.setItem(`placedorders_${userId}`, JSON.stringify(newOrders));

        
            setCart([]);
            localStorage.setItem(`cart_${userId}`, JSON.stringify([]));

            toast.success("Your order is being processed. Check your profile's order section for more details.");

            setTimeout(() => {
            navigate('/homepage');
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