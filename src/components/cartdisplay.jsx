
import { useState } from "react";
import beauty from "../assets/img/category/beauty.jpeg"
import { useValueContext } from '../contexts/propscontext'
import deleteicon from "../assets/svg/cart/icon-cancel.svg"
import { Link } from "react-router-dom";
import EmptyCart from "./emptycart";
import { toast } from 'react-toastify';
import { auth } from "../js/firebase";

function CartDisplay() {
  const { cart, products,HandleQuantity,cartProducts,setCart,SubTotal,SubDelivery,Total} = useValueContext();
  


  

  function HandleQuantity2(id,e) {
        const newQuantity = Number(e.target.value);
        const updatedCart = cart.map(item => {
            if (item.id === id) {
            return { ...item, quantity: newQuantity };
            }
            return item;
        });

    setCart(updatedCart);
   
      const user = auth.currentUser;
      if (user) {
        localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updatedCart));
      } else {
        toast.warning("User not logged in. Quantity change won't persist.");
      }
}

  function DeleteCartItem (id) {
    const newcart = cart.filter(item=> item.id !== id);
      setCart(newcart);
    const user = auth.currentUser;
    if (user) {
      localStorage.setItem(`cart_${user.uid}`, JSON.stringify(newcart));
    } else {
      toast.warning("User not logged in. Cart changes will not persist.");
    }
    toast.success("Item removed from Cart,Cart updated");

  }




  return (
    <>
              <div className="w-[100%] h-[60px] rounded-[4px]    text-black text-[20px] font-semibold bg-slate-100 flex items-center justify-center ">
       Cart

             </div>
    {cart.length > 0 ? 
       (<section className="w-full min-h-[600px] py-[50px] flex flex-col items-center justify-center">

      <div className="w-[95%] flex flex-col gap-[40px]">

       
        <div className="flex w-[100%]  sm:w-[95%] items-center h-[72px] shadow-md rounded-[4px] bg-gray-100">
          <p className="w-[25%] text-center font-medium text-[12px] sm:text-[16px]">Product</p>
          <p className="w-[25%] text-center font-medium text-[12px] sm:text-[16px]">Price</p>
          <p className="w-[25%] text-center font-medium text-[12px] sm:text-[16px]">Quantity</p>
          <p className="w-[25%] text-center font-medium text-[12px] sm:text-[16px]">Sub-total</p>
        </div>

       
        {cartProducts.map((item, index) => (
        <div key={index} className="flex gap-[10px] justify-center sm:gap-[20px]">
            <div  className="flex w-[95%] sm:w-[95%] items-center h-[82px] sm:pl-0 pl-[10px]  shadow-md rounded-[4px] justify-around">
                  <div className="flex w-[25%] justify-center items-center sm:gap-[20px] gap-[10px] text-center">
                    <img src={item.thumbnail} alt={item.title} className="w-[50px] h-[50px] hidden sm:block " />
                    <p className="md:text-[14px] text-[12px]">{item.title}</p>
                  </div>

                  <div className="w-[25%] text-center">
                    <p className="md:text-[14px] text-[12px]">{item.price}</p>
                  </div>

                  <div className="w-[25%] text-center">
                    <select
                      name={item.id}
                      value={item.quantity}
                      onChange={(e)=>HandleQuantity2(item.id,e)}
                      
                      className="px-[12px] outline-0 md:text-[18px] sm:text-[16px] py-[6px] text-[12px] rounded-[5px] bg-slate-200"
                    >
                      {[1, 2, 3, 4, 5].map(q => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-[25%] text-center">
                    <p className="md:text-[14px] text-[12px]">
                {(Number(item.price) * Number(item.quantity)).toFixed(2)}

                    </p>
                  </div>

            </div>

            <button onClick={()=>DeleteCartItem(item.id)}><img src={deleteicon} alt="delete icon" className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px] "/></button>

        </div>))}

        <div className="flex pt-[32px] gap-[24px] px-[24px] flex-col sm:self-end self-center mt-[50px] w-[80%]  lg:mr-[60px] sm:mr-[50px] sm:w-[470px]  border border-slate-400">
          <h1 className="font-medium text-[16px] sm:text-[20px]">
            Cart Total
          </h1>
          <div className="flex justify-between border-b pb-[10px]">
             <p className="font-normal text-[14px]  sm:text-[16px]">
                 Subtotal:
            </p>
             <p className="font-normal text-[14px] sm:text-[16px]">
             ${SubTotal().toFixed(2)}
            </p>

          </div>
          <div className="flex justify-between border-b pb-[10px]">
             <p className="font-normal text-[14px] sm:text-[16px]">
                 Shipping:
            </p>
             <p className="font-normal text-[14px] sm:text-[16px]">
              ${SubDelivery().toFixed(2)}
            </p>

          </div>

          <div className="flex justify-between pb-[10px]">
             <p className="font-normal text-[14px] sm:text-[16px]">
                 Total:
            </p>
             <p className="font-normal text-[14px] sm:text-[16px]">
              ${Total(SubDelivery,SubTotal)}
            </p>

          </div>

          <button className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black    duration-150   w-[60%] rounded-[5px] text-[14px] sm:text-[16px] text-white font-medium self-center h-[40px] sm:h-[56px] mb-[20px]">
           <Link to="/checkout"> Checkout</Link> 
          </button>
         

        </div>
    </div>
    </section>) : ( <EmptyCart/>)}

  </>
    );
}

export default CartDisplay;
