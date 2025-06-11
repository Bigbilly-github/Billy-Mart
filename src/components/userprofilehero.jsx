
import groceries from "../assets/img/category/groceries.jpg"
import { useValueContext } from '../contexts/propscontext'

function UserProfileHero (){
     const {  placedorders,setPlacedOrders,products} = useValueContext();

     function GetTitle (id){
        const match = products.find(product=> product.id===id);
        return match.title;

     }

    return(
        <>
        <section className="w-full flex  mt-[50px] h-auto justify-center">
            <div className="w-[90%] flex ">
                <div className="w-[20%] border-r border-slate-200">
                    <h1 className="text-[24px] cursor-pointer hover:underline transition-all duration-150">
                        My Orders
                    </h1>

                   

                </div>
                <div className="w-[80%] flex flex-col  ">
                  {placedorders.map((orders,index)=> (
                     <div key={index + 1} className="mb-[30px]">
                        <h1 className="text-[36px] text-slate-700 pl-[40px] font-semibold mb-[30px]">
                            Order {index + 1}
                        </h1>
                      {orders.map((order,index) =>(
                         <div key={index} className="shadow-md px-[30px] mb-[30px] pb-[30px]">
                                <div className="flex items-center gap-[15px] ">
                                    <img src={groceries} alt=""  className="w-[40px] h-[40px] rounded-[50%]"/>
                                    <p className="font-medium text-[18px]">
                                       {GetTitle(order.id)}
                                    </p>
                                </div>
                            
                                    <div className="flex pl-[50px] justify-between items-center mt-[20px]">
                                        <p className="text-slate-600">
                                            Quantity: {order.quantity}
                                        </p>
                                       <p className="text-slate-600">
                                            Price: ${order.price}
                                        </p>
                                        <p className="text-slate-600">
                                            Delivery: ${order.delivery}
                                        </p>
                                      <p className="text-slate-600">
                                            Total: ${(Number(order.price) * Number(order.quantity)).toFixed(2)}
                                        </p>
                                    </div>
                      

                        </div>
                  ))}

                    </div>
                ))}



                </div>

            </div>

        </section>
        </>
    )

}
export default UserProfileHero