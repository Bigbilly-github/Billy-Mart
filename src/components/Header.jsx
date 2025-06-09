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
      <header className="h-[150px] z-30 bg-slate-100 fixed right-0 left-0 top-0 flex justify-center items-center">
        <div className="w-[90%] h-[88px]  bg-white rounded-[40px] shadow-lg flex justify-between items-center  px-[30px]">
           <Link to="/"><p className="font-[poppins] text-[24px] font-bold">Billy-Mart</p></Link>

          <nav className="xl:w-[367px] w-[280px] h-[38px] hidden items-center  font-[Poppins] lg:flex justify-between ">
            <Link
              to="/"
              className="text-[16px] hover:underline hover:text-slate-500 "
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-[16px] hover:underline hover:text-slate-500"
            >
              Shop
            </Link>
            <a
              href=""
              className="text-[16px]  hover:underline hover:text-slate-500 "
            >
              About
            </a>
            <a
              href=""
              className="text-[16px] hover:underline hover:text-slate-500 "
            >
              Contact Us
            </a>
          </nav>

          <div className=" xl:w-[496px] md:w-[396px]  h-[38px]  justify-between flex  items-center">
            <div className="md:flex  hidden flex-1 h-[40px] mr-[20px] px-[10px] py-[10px] pl-[20px] bg-[#00000020] items-center rounded-[20px]">
              <input
                type="text"
                className="flex-1 outline-0"
                placeholder="Search products"
              />
              <img
                src={search}
                alt="search icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex justify-between w-[130px] ">
             <div className="relative ">
               <Link to="/wishlist">  <img
                  src={heart}
                  alt="heart icon"
                  className="w-[24px] h-[24px]"
                /></Link>
                <p className="absolute -top-[19px] -right-[5px] font-[poppins] font-medium">
                  {wishlist.length}
                </p>
              </div>
              <div className="relative">
                  <Link to="/cart"><img src={carticon} alt="cart icon" className="w-[24px] h-[24px]" />
                    <p className="absolute -top-[15px] -right-[5px] font-[poppins] font-medium">
                        {cart.length}
                     </p>
                     </Link>  

              </div>
              <div>
                <img src={user} alt="user icon"   className="w-[24px] h-[24px]"/>
              </div>


            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
