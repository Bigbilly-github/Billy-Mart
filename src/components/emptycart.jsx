
import { Link } from "react-router-dom";
import Category from "./category";

function EmptyCart (){

    return(
        <>
        <section className="w-full sm:h-[400px] h-[200px] md:mt-0 mt-[50px] md:mb-0 mb-[50px] flex items-center justify-center">
            <div className="flex flex-col gap-[30px] ">
                <h1 className="lg:text-[46px] sm:text-[30px] text-[18px]">
                    No item(s) to be displayed
                </h1>
                <div  className="flex gap-[10px]">
                    <button className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black    duration-150   w-[60%] rounded-[5px] text-[14px] sm:text-[16px] text-white font-medium self-center h-[40px] sm:h-[56px] mb-[20px]"><Link to="/">Home</Link></button>
                    <button className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black    duration-150   w-[60%] rounded-[5px] text-[14px] sm:text-[16px] text-white font-medium self-center h-[40px] sm:h-[56px] mb-[20px]"><Link to="/shop">Shop</Link></button>
                </div>
            </div>

        </section>
        <Category/>
        </>
    )

}
export default EmptyCart