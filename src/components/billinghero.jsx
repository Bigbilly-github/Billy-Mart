import BillingForm from "./billingform"
import { useValueContext } from '../contexts/propscontext'



function BillingHero (){
      const { cart,products,setCart,cartProducts,SubTotal,SubDelivery,Total,billingdetails, setBillingDetails} = useValueContext();
      
    return(
        <>
        <section className="w-full flex   h-auto mb-[150px] mt-[50px] justify-center">
            <div className="w-[88%] ">
                     <h1 className="font-medium text-[36px] mb-[40px] ">
                        Billing Details
                    </h1>
            
            <div className="  flex  items-start justify-between  ">
                <BillingForm/>
                <div className=" h-auto w-[60%] ">
                   {cartProducts.map(item => <div className="flex  justify-between mb-[20px] ">
                        <div className="flex gap-[10px] items-center"> 
                            <img src={item.thumbnail} alt="item image" className="w-[40px] h-[40px]" />
                            <p>
                               {item.title}
                            </p>


                        </div>
                        <p>
                               ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                        </p>

                    </div>
                    )}
                      <div className="flex justify-between border-b mt-[30px] pb-[10px]">
                            <p className="font-normal text-[14px]  sm:text-[16px]">
                                Subtotal:
                            </p>
                            <p className="font-normal text-[14px] sm:text-[16px]">
                            ${SubTotal().toFixed(2)}
                            </p>

                        </div>
                        <div className="flex justify-between border-b mt-[20px]  pb-[10px]">
                            <p className="font-normal text-[14px] sm:text-[16px]">
                                Shipping:
                            </p>
                            <p className="font-normal text-[14px] sm:text-[16px]">
                            ${SubDelivery().toFixed(2)}
                            </p>

                        </div>

                        <div className="flex justify-between mt-[20px] pb-[10px]">
                            <p className="font-normal text-[14px] sm:text-[16px]">
                                Total:
                            </p>
                            <p className="font-normal text-[14px] sm:text-[16px]">
                            ${Total(SubDelivery,SubTotal)}
                            </p>

                        </div>


                </div>

            </div>

            </div>


        </section>
        </>
    )

}
export default  BillingHero