import React from "react";
import search from "../assets/svg/header/search.svg";
import heart from "../assets/svg/header/heart1.svg";
import carticon from "../assets/svg/header/cart.svg";
import user from "../assets/svg/header/user.svg";
import { Link } from "react-router-dom";
import { useValueContext } from "../contexts/propscontext";

const Header = () => {
   const { cart,wishlist} = useValueContext();
  return (
    <>
      <header className="sm:h-[150px]  h-[120px] z-30  bg-slate-100 fixed right-0 left-0 top-0 flex justify-center items-center">
        <div className="w-[90%] bg-white sm:h-[88px] h-[60px]   rounded-[40px] shadow-lg flex justify-between items-center  px-[30px]">
           <Link to="/homepage"><p className="font-[poppins] lg:text-[24px]  sm:text-[18px] font-bold">Billy-Mart</p></Link>

          <nav className="lg:w-[450px] md:w-[300px]  w-[280px] h-[38px] hidden items-center  font-[Poppins] md:flex justify-between ">
            <Link
              to="/homepage"
              className="md:text-[14px] font-medium   lg:text-[16px] hover:underline hover:text-slate-500 "
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="md:text-[14px] font-medium  lg:text-[16px]hover:underline hover:text-slate-500"
            >
              Shop
            </Link>
            <Link
              to="/aboutus"
              className="md:text-[14px] lg:text-[16px] font-medium  hover:underline hover:text-slate-500 "
            >
              About
            </Link>
            <Link
              to="/contactus"
              className="md:text-[14px] font-medium   lg:text-[16px] hover:underline hover:text-slate-500 "
            >
              Contact Us
            </Link>
          </nav>

          <div className="   h-[38px]  justify-end flex  items-center">
           
            <div className="flex justify-between items-center sm:w-[130px] w-[100px] ">
             <div className="relative ">
               <Link to="/wishlist">  <img
                  src={heart}
                  alt="heart icon"
                  className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"
                /></Link>
                <p className="absolute -top-[19px] sm:text-[16px] lg:text-[18px] text-[14px] -right-[5px] font-[poppins] font-medium">
                  {wishlist.length}
                </p>
              </div>
              <div className="relative">
                  <Link to="/cart"><img src={carticon} alt="cart icon" className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" />
                    <p className="absolute -top-[15px] sm:text-[16px] lg:text-[18px] text-[14px] -right-[5px] font-[poppins] font-medium">
                        {cart.length}
                     </p>
                     </Link>  

              </div>
              <div>
             <Link to ="/profile"> <img src={user} alt="user icon"   className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]"/></Link> 
              </div>


            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
