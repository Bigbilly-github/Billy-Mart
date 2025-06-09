
import { Link } from "react-router-dom";

function Footer (){

    return(
        <>
        <footer className="w-full md:h-[440px] h-[300px] flex justify-center items-center bg-black mt-[50px]">
            <div className="w-[90%] flex  justify-between md:h-[280px] h-[150px]" >
                <div className="lg:w-[206px] w-[40%]  ">
                    <p className="text-[24px] font-bold text-[#FAFAFA]">
                        Billy-Mart
                    </p>
                    <p className=" text-[12px] font-medium mt-[24px] text-[#FAFAFA]">
                        &copy; Copyright Billy-Mart 2025. All right reserved
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
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                    Login / Register
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                  Cart
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                    Wishlist
                    </p>

                   

                </div>

                <div className="lg:w-[175px] w-[30%]  text-center h-[180px] ">
                    <p className=" text-[20px] font-medium text-[#FAFAFA]">
                    Quick Link
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                About Us
                    </p>
                    <p className=" text-[16px] font-medium mt-[24px] text-[#FAFAFA]">
                   Contact Us
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