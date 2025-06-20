import React from "react";
import search from "../assets/svg/header/search.svg";
import heart from "../assets/svg/header/heart1.svg";
import carticon from "../assets/svg/header/cart.svg";
import user from "../assets/svg/header/user.svg";
import { Link } from "react-router-dom";
import { useValueContext } from "../contexts/propscontext";
import { NavLink } from "react-router-dom";


const Header = () => {
   const { cart,wishlist} = useValueContext();
  return (
    <>
      <header className="sm:h-[150px]  h-[120px] z-30  bg-slate-100 fixed right-0 left-0 top-0 flex justify-center items-center">
        <div className="w-[95%] bg-white sm:h-[88px] h-[60px]   rounded-[40px] shadow-lg flex justify-between items-center  px-[30px]">
           <Link to="/homepage"><p className="font-[poppins] lg:text-[24px]  sm:text-[18px] font-bold">Billy-Mart</p></Link>

          <nav className="lg:w-[450px] md:w-[300px]   w-[280px] h-[38px] hidden items-center  font-[Poppins] md:flex justify-between ">
            <NavLink
                to="/homepage"
                className={({ isActive }) =>
                  `md:text-[14px] font-medium lg:text-[16px]  hover:text-slate-500 ${
                    isActive ? "underline text-slate-700" : ""
                  }`
                }
              >
                Home
              </NavLink>

           <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `md:text-[14px] font-medium lg:text-[16px] hover:underline hover:text-slate-500 ${
                      isActive ? "underline text-slate-700" : ""
                    }`
                  }
                >
                  Shop
          </NavLink>

            <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `md:text-[14px] font-medium lg:text-[16px] hover:underline hover:text-slate-500 ${
                      isActive ? "underline text-slate-700" : ""
                    }`
                  }
                >
                  About Us
          </NavLink>
          <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `md:text-[14px] font-medium lg:text-[16px] hover:underline hover:text-slate-500 ${
                      isActive ? "underline text-slate-700" : ""
                    }`
                  }
                >
                 Contact Us
          </NavLink>
          </nav>

          <div className="   h-[38px]  justify-end flex  items-center">
           
            <div className="flex justify-between items-center sm:w-[130px] w-[100px] ">
             <div className="relative group ">
               <Link to="/wishlist">  <img
                  src={heart}
                  alt="heart icon"
                  className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"
                /></Link>
                <p className="absolute -top-[19px]  sm:text-[16px] lg:text-[18px] text-[14px] -right-[5px] font-[poppins] font-medium">
                  {wishlist.length}
                </p>
               <p className="absolute hidden group-hover:block -bottom-[25px] sm:-bottom-[35px] rounded-[4px] -left-[12px] sm:-left-[25px] sm:text-[16px] lg:text-[18px] sm:py-[3px] py-[2px] px-[4px] text-slate-700 border border-slate-200 bg-slate-200 text-[10px]  font-[poppins] font-semibold">
                  wishlist
                </p>
              </div>
              <div className="relative group">
                  <Link to="/cart"><img src={carticon} alt="cart icon" className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" />
                    <p className="absolute -top-[15px] sm:text-[16px] lg:text-[18px] text-[14px] -right-[5px] font-[poppins] font-medium">
                        {cart.length}
                     </p>
                     </Link>  
                      <p className="absolute hidden group-hover:block -bottom-[25px] sm:-bottom-[35px] rounded-[4px] center sm:-left-[10px] sm:text-[16px] lg:text-[18px] sm:py-[3px] py-[2px] px-[4px] text-slate-700 border border-slate-200 bg-slate-200 text-[10px]  font-[poppins] font-semibold">
                       cart
                      </p>

              </div>
              <div className="group relative">
             <Link to ="/profile"> <img src={user} alt="user icon"   className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]"/></Link> 
              <p className="absolute hidden group-hover:block -bottom-[25px] sm:-bottom-[35px] rounded-[4px] -left-[12px] sm:-left-[20px] sm:text-[16px] lg:text-[18px] sm:py-[3px] py-[2px] px-[4px] text-slate-700 border border-slate-200 bg-slate-200 text-[10px]  font-[poppins] font-semibold">
                  account
                </p>
              </div>


            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
