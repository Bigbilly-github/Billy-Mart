
import groceries from "../assets/img/category/groceries.jpg"

function UserProfileHero (){

    return(
        <>
        <section className="w-full flex  mt-[50px] h-[600px] justify-center">
            <div className="w-[90%] flex ">
                <div className="w-[20%] border-r border-slate-200">
                    <h1 className="text-[24px] cursor-pointer hover:underline transition-all duration-150">
                        My Orders
                    </h1>

                    <h1 className="text-[24px] mt-[20px] cursor-pointer hover:underline transition-all duration-150">
                        My Wishlist
                    </h1>

                </div>
                <div className="w-[80%] flex flex-col ">
                    <div>
                        <h1 className="text-[36px] pl-[40px] mb-[30px]">
                            Order 1
                        </h1>
                        <div className="shadow-md px-[30px] pb-[30px]">
                                <div className="flex items-center gap-[10px] ">
                                    <img src={groceries} alt=""  className="w-[40px] h-[40px] rounded-[50%]"/>
                                    <p>
                                        Title
                                    </p>
                                </div>
                            
                                    <div className="flex pl-[50px] justify-between items-center mt-[20px]">
                                        <p>
                                            Quantity: $450
                                        </p>
                                        <p>
                                            Price: $450
                                        </p>
                                        <p>
                                            Delivery: $450
                                        </p>
                                        <p>
                                            Total: $450
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
export default UserProfileHero