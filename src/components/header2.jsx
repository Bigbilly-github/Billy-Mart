

import { useValueContext } from "../contexts/propscontext";


function Header2 (){
const { cart,wishlist} = useValueContext();
  return (
    <>
      <header className="sm:h-[150px]  h-[120px] z-30  bg-slate-100 fixed right-0 left-0 top-0 flex justify-center items-center">
        <div className="w-[90%] bg-white sm:h-[88px] h-[60px]   rounded-[40px] shadow-lg flex justify-center items-center  px-[30px]">
           <p className="font-[poppins] lg:text-[24px]  sm:text-[18px] font-bold">Billy-Mart</p>

       
        </div>
      </header>
    </>
  );
};



export default Header2