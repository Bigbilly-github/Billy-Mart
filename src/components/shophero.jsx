
import { useValueContext } from "../contexts/propscontext";

function ShopHero (){
          const { products, displayValue,displayterm} = useValueContext();
   

    return(

             
        <>
        <section className="w-full flex justify-center">
             <div className="w-[100%] h-[60px] rounded-[4px]  text-black text-[20px] font-semibold bg-slate-100 flex items-center justify-center ">
          {displayValue}

             </div>

        </section>

        </>
    )

}
export default ShopHero