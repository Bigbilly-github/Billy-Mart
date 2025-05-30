
import beauty from "../assets/img/category/beauty.jpeg"

function CartDisplay (){

    return(
        <>
        <section className="w-full h-[1000px] py-[50px]  flex justify-center">
            <div className="w-[90%]  flex flex-col gap-[40px] ">
                <div className="flex   items-center h-[72px] shadow-md  rounded-[4px]   ">
                    <p className=" w-[25%] text-center font-medium text-[16px]">
                        Product
                    </p>
                     <p className="w-[25%] text-center  font-medium text-[16px]">
                        Price
                    </p>
                     <p className=" w-[25%] text-center font-medium text-[16px]">
                       Quantity
                    </p>
                     <p className=" w-[25%] text-center font-medium text-[16px]">
                       Sub-total
                    </p>

                </div>

                <div className="flex  items-center h-[82px] shadow-md  rounded-[4px] justify-around ">
                   <div className="flex w-[25%] text-center justify-center   gap-[20px] items-center ">
                        <img src={beauty} alt="" className="w-[50px] h-[50px] " />
                        <p className=" text-[14px]"> Product </p>
                    </div> 
                    <div className="w-[25%] text-center">
                        <p className=" text-[14px] ">
                        Price
                        </p>
                    </div> 
                    <div className="w-[25%] text-center">
                            <select name="quantity" id="quantity" defaultValue="" className="px-[12px] outline-0 text-[18px] rounded-[5px] bg-slate-200 ">
                                
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                    <option value="5">5</option>
                            </select>
                    </div>
                    <div className="w-[25%] text-center">
                         <p className=" text-[14px]">
                            $380
                        </p>

                    </div>
                    
                    

                </div>

            </div>

        </section>
        </>
    )

}
export default CartDisplay