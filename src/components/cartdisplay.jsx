
import { useState } from "react";
import beauty from "../assets/img/category/beauty.jpeg"
import { useValueContext } from '../contexts/propscontext'
import deleteicon from "../assets/svg/cart/icon-cancel.svg"

function CartDisplay() {
  const { cart, products,HandleQuantity ,setCart} = useValueContext();
  const [newquantity,setNewQuantity] = useState(0);


  const cartProducts = cart.map(item => {
    const product = products.find(product => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      delivery: item.delivery,
      price: item.price,
    };
  });

  function HandleQuantity2(id,e) {
        const newQuantity = Number(e.target.value);
        const updatedCart = cart.map(item => {
            if (item.id === id) {
            return { ...item, quantity: newQuantity };
            }
            return item;
        });

    setCart(updatedCart);
   localStorage.setItem('cart', JSON.stringify(updatedCart));
}

function DeleteCartItem (id) {
  const newcart = cart.filter(item=> item.id !== id);
     setCart(newcart);
   localStorage.setItem('cart', JSON.stringify(newcart));

}


  return (
    <section className="w-full min-h-[600px] py-[50px] flex justify-center">
      <div className="w-[90%] flex flex-col gap-[40px]">
       
        <div className="flex w-[90%] sm:w-[95%] items-center h-[72px] shadow-md rounded-[4px] bg-gray-100">
          <p className="w-[25%] text-center font-medium text-[14px] sm:text-[16px]">Product</p>
          <p className="w-[25%] text-center font-medium text-[14px] sm:text-[16px]">Price</p>
          <p className="w-[25%] text-center font-medium text-[14px] sm:text-[16px]">Quantity</p>
          <p className="w-[25%] text-center font-medium text-[14px] sm:text-[16px]">Sub-total</p>
        </div>

       
        {cartProducts.map((item, index) => (
        <div className="flex gap-[10px] sm:gap-[20px]">
            <div key={index} className="flex w-[90%] sm:w-[95%] items-center h-[82px] sm:pl-0 pl-[10px]  shadow-md rounded-[4px] justify-around">
                  <div className="flex w-[25%] justify-center items-center sm:gap-[20px] gap-[10px] text-center">
                    <img src={item.thumbnail} alt={item.title} className="w-[50px] h-[50px] hidden sm:block " />
                    <p className="md:text-[14px] text-[12px]">{item.title}</p>
                  </div>

                  <div className="w-[25%] text-center">
                    <p className="md:text-[14px] text-[12px]">${item.price}</p>
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
                ${(Number(item.price) * Number(item.quantity)).toFixed(2)}

                    </p>
                  </div>

            </div>

            <button onClick={()=>DeleteCartItem(item.id)}><img src={deleteicon} alt="delete icon" /></button>

        </div>))}
    </div>
    </section>
  );
}

export default CartDisplay;
