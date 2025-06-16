
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
        <footer className="md:h-[340px] h-[250px] flex justify-center  w-full items-center bg-black ">
       
                <div className="lg:w-[206px] w-[50%]  ">
                    <p className="sm:text-[24px] text-[16px] font-bold text-[#FAFAFA]">
                        Billy-Mart
                    </p>
                    <p className="w-[100%] text-[12px] font-medium sm:mt-[24px] mt-[10px] text-[#FAFAFA]">
                        &copy; Copyright Billy-Mart 2025. 
                    </p>

                </div>


          

        </footer>
        </>
    )

}
export default Footer2