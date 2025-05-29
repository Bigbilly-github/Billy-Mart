
import groceries from "../assets/img/category/groceries.jpg"
import rating2 from "../assets/img/flashsalescomp/2rating.png";
import img from "../assets/svg/flashsales/Fill Heart.svg";
import deliveryicon from "../assets/svg/productdetails/icon-delivery.svg";


function ProductDetails (){

    return(
        <>
        <section className="w-full h-[500px] flex justify-center">
            <div className="w-[90%] flex ">
                <div className="w-[15%] mr-[50px]  ">
                    <div className="flex  bg-slate-100 gap-[20px] flex-col g">
                          <img src={groceries} alt="image"  className=" object-contain h-[138px]"/>

                    </div>
                  

                </div>
                <div className="w-[40%] bg-slate-100 rounded-[4px] mr-[50px]">
                    <img src={groceries} alt="image"  className="h-[100%] rounded-[4px]"/>

                </div>
                <div className="flex-1 px-[20px] pt-[20px]">
                    <h1 className="text-[24px] font-semibold text-black">
                        TITLE
                    </h1>
                    <div className="flex gap-[10px] mt-[10px] mb-[10px] items-center">
                          <img src={rating2} alt="5-star rating image" className="h-[40px]" />
                        <p>
                            (50 Reviews)
                        </p>
                     </div>
                     <p className="text-[24px] mb-[20px] font-normal">
                        $180.00
                     </p>
                     <p className="font-normal text-[14px] pb-[20px] border-b border-slate-500">
                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                     </p>
                   
                      <div className="flex  gap-[15px] mt-[30px]">
                            <select name="quantity" id="" value="" className="px-[12px] text-[18px] rounded-[5px] bg-slate-200 ">
                                <option value="">Select quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                    <option value="5">5</option>
                            </select>
                            <button className="cursor-pointer px-[20px] hover:bg-white hover:text-[red] duration-150 py-[10px] bg-[red] font-medium rounded-[5px] text-white"> Add to Cart</button>
                            <img src={img} alt="heart icon" />
                        </div> 

                        <div className="flex flex-col mt-[50px] gap-[10px] ">
                            <div className="flex gap-[10px] items-center ">
                                <img src={deliveryicon} alt="delivery truck icon" />
                                <div className="flex flex-col">
                                    <p className="font-medium text-[16px]">
                                        FREE DELIVERY
                                    </p>
                                    <p className="font-medium text-[12px] text-slate-600 ">
                                        Get your item within 21 days of placing order.
                                    </p>

                                </div>

                            </div>
                             <div className="flex gap-[10px] items-center ">
                                <img src={deliveryicon} alt="delivery truck icon" />
                                <div className="flex flex-col">
                                    <p className="font-medium text-[16px]">
                                         7 DAYS DELIVERY 
                                    </p>
                                    <p className="font-medium text-slate-600 text-[12px]">
                                        Get your item within 7 days of placing order.
                                    </p>

                                </div>

                            </div>
                        </div>
                  
                    
                    
                </div>

            </div>

        </section>

        </>
    )

}
export default ProductDetails