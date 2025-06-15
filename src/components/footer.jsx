
import { Link } from "react-router-dom";
import {  signOut } from "firebase/auth";
import { auth } from "../js/firebase";
import { useValueContext } from "../contexts/propscontext";
import { useAuthState } from "react-firebase-hooks/auth";



function Footer (){
    const [user] = useAuthState(auth);

      const logout = () => {
            signOut(auth);
            setAction("login");
        };

         const {  action,  setAction } = useValueContext();

    return(
        <>
        <footer className="w-full md:h-[440px] h-[300px] mt-[50px] flex justify-center relative bottom-0 right-0 left-0 items-center bg-black ">
            <div className="w-[90%] flex  justify-between md:h-[280px] h-[150px]" >
                <div className="lg:w-[206px] w-[40%]  ">
                    <p className="sm:text-[24px] text-[18px] font-bold text-[#FAFAFA]">
                        Billy-Mart
                    </p>
                    <p className=" text-[12px] font-medium sm:mt-[24px] mt-[10px] text-[#FAFAFA]">
                        &copy; Copyright Billy-Mart 2025. 
                    </p>

                </div>
                <div className="w-[275px]  h-[180px]  hidden lg:block ">
                    <p className=" text-[20px] font-medium text-[#FAFAFA]">
                        Support
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                    111 Bijoy sarani, Dhaka, New York.
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                   yusufabiola555@gmail.com
                    </p>
                   

                </div>

                <div className="w-[175px] h-[180px] hidden md:block ">
                    <p className=" text-[20px] font-medium text-[#FAFAFA]">
                       Account
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                  My Account
                    </p>
                {user ? (
                <p onClick={logout} className="text-[16px] font-medium mt-[24px] text-[#FAFAFA] cursor-pointer">
                    Logout
                </p>
                ) : (
                <Link to="/login" className="text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                   <p className="text-[16px] font-medium mt-[34px] text-[#FAFAFA]">Login / Register</p> 
                </Link>
                )}

                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                   <Link to="/cart"> Cart</Link>
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                  <Link to="/wishlist"> Wishlist</Link>
                    </p>

                   

                </div>

                <div className="lg:w-[175px] w-[30%]   text-center h-[180px] ">
                    <p className=" text-[20px] hidden sm:block font-medium text-[#FAFAFA]">
                    Quick Link
                    </p>
                    <p className=" text-[16px] font-medium sm:mt-[24px] text-[#FAFAFA]">
                        <Link to="/aboutus">  About Us</Link>
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                        <Link to="/contactus">Contact Us</Link> 
                    </p>
                   <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                        <Link to="/shop">Shop</Link> 
                    </p>
                   
                   

                </div>


            </div>

        </footer>
        </>
    )

}
export default Footer