
import {  signOut } from "firebase/auth";
import { auth } from "../js/firebase";
import { useValueContext } from "../contexts/propscontext";
import { useAuthState } from "react-firebase-hooks/auth";



function Footer2 (){
    const [user] = useAuthState(auth);

      const logout = () => {
            signOut(auth);
            setAction("login");
        };

         const {  action,  setAction } = useValueContext();

    return(
        <>
        <footer className="md:h-[300px] h-[230px] flex justify-center  w-full items-center bg-black ">
       
                <div className="  ">
                    <p className="sm:text-[24px] text-center text-[16px] font-bold text-[#FAFAFA]">
                        Billy-Mart
                    </p>
                    <p className=" text-[12px] font-medium sm:mt-[24px] mt-[10px] text-[#FAFAFA]">
                        &copy; Copyright Billy-Mart 2025. 
                    </p>

                </div>


          

        </footer>
        </>
    )

}
export default Footer2