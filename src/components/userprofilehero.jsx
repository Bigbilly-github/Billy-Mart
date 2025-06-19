
import { useState } from "react";
import groceries from "../assets/img/category/groceries.jpg";
import { useValueContext } from "../contexts/propscontext";
import { Link } from "react-router-dom";
import { auth } from "../js/firebase";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';



function UserProfileHero() {
  
       const navigate = useNavigate();
  const { placedorders, products } = useValueContext();
  const [openIndexes, setOpenIndexes] = useState({});

  const GetTitle = (id) => {
    const match = products.find((product) => product.id === id);
    return match?.title || "Unknown Product";
  };

  const GetImage = (id) => {
     const match = products.find((product) => product.id === id);
    return match?.thumbnail; 
  };
    const [user] = useAuthState(auth);
  
        const logout = () => {
            if (user) {
                signOut(auth)
                    .then(() => {
                    setAction("login");
                    navigate("/");
                    toast.success("logged out successfully")
                    })
                    .catch((error) => {
                    console.error("Logout error:", error);
                });
    }
          };
  
           const {  action,  setAction } = useValueContext();

  

  const toggleOrderVisibility = (orderIndex) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [orderIndex]: !prev[orderIndex],
    }));
  };

  

  return (
    <>
              <div className="w-[100%] h-[60px] rounded-[4px] mb-[30px] font-bold  text-slate-500 text-[20px]  bg-slate-100 flex items-center justify-center ">
                        {user.displayName.slice(0,1).toUpperCase()}{user.displayName.slice(1,user.displayName.length)}'s Profile

             </div>
    <section className="w-full flex flex-col gap-[30px] h-auto items-center">
         
      <div className="w-[95%] flex">
      
        <div className="sm:w-[25%] flex  flex-col justify-between w-[30%] border-r border-slate-200">
          <h1 className="lg:text-[24px] sm:text-[18px] text-[14px]  ">
            My Orders
          </h1>
        <button type="btn" onClick={logout} className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black self-start   duration-150 sm:w-[80%]  w-[80%] rounded-[5px] text-[12px] sm:text-[14px] md:text-[16px] text-white font-medium  h-[40px] sm:h-[56px] mb-[20px]">Logout</button>
        </div>

      
  {placedorders.length > 0 ?     ( 
    <div className="w-[80%] flex flex-col">
          {placedorders.map((orders, orderGroupIndex) => (
            <div
              key={`order-group-${orderGroupIndex}`}
              className="mb-[30px] shadow-md cursor-pointer"
            >
             <h1
                onClick={() => toggleOrderVisibility(orderGroupIndex)}
                className="md:text-[36px] sm:text-[24px] text-[16px] text-slate-700 pl-[40px] font-semibold mb-[30px] flex items-center gap-2 cursor-pointer"
                >
               <span className="font-normal">{openIndexes[orderGroupIndex] ? "-" : "+"} </span>  Order {orderGroupIndex + 1}
            </h1>


              {orders.map((order, orderIndex) => (
                <div
                  key={`order-${orderIndex}`}
                  className={`border-b border-slate-100 px-[30px] ${
                    openIndexes[orderGroupIndex] ? "block" : "hidden"
                  } mb-[30px] pb-[30px]`}
                >
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={GetImage(order.id)}
                      alt="product"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="font-medium sm:text-[18px] text-[14px]">
                      {GetTitle(order.id)}
                    </p>
                  </div>

                  <div className="flex pl-[50px] lg:flex-row flex-col gap-[10px] lg:justify-between lg:items-center mt-[20px]">
                    <p className="text-slate-600 sm:text-[18px] text-[14px]">
                      Quantity: {order.quantity}
                    </p>
                    <p className="text-slate-600 sm:text-[18px] text-[14px]">
                      Price: ${order.price}
                    </p>
                    <p className="text-slate-600 sm:text-[18px] text-[14px]">
                      Delivery: ${order.delivery}
                    </p>
                    <p className="text-slate-600 font-semibold sm:text-[18px] text-[14px]">
                      Total: $
                      {(
                        Number(order.price) * Number(order.quantity)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>) :<div className="h-[400px] w-[100%] gap-[30px] flex flex-col items-center justify-center"> 
            <p className="  lg:text-[46px] sm:text-[30px] text-[14px] font-semibold ">No Order(s) to be displayed</p> 
             <button className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black    duration-150   w-[60%] rounded-[5px] text-[12px] sm:text-[16px] text-white font-medium self-center h-[40px] sm:h-[56px] mb-[20px]"><Link to="/shop">Continue Shopping</Link></button>
            </div>}
      </div>
    </section>
    </>
  );
}

export default UserProfileHero;
