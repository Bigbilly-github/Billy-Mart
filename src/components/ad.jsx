
import image from "../assets/svg/ad/Frame 694.svg"

function Ad (){

    return(
        <>
                 <section className="w-full h-auto lg:flex justify-center  hidden mt-[140px] mb-[140px] ">
                    <div className="w-[95%] bg-black h-[500px] flex  pl-[56px] pr-[44px] rounded-[5px] items-center justify-between">
                        <div className="w-[40%] ">
                             <p className="text-[18px] font-semibold text-[#00FF66]">
                                categories
                            </p>
                            <h1 className="text-[48px] mt-[30px] w-[443px] font-semibold text-white ">
                            Enhance Your Music Experience
                            </h1>
                            <button className="w-[171px] h-[56px] cursor-pointer bg-[#00FF66] mt-[30px] text-[16px] font-medium text-[#876868] rounded-[4px]">
                                Buy Now
                            </button>

                        </div>
                        <div className=" w-[50%]   bg-[#040303]"> 
                                <img src={image} alt="" className="object-contain" />

                        </div>
                       

                    </div>
                 </section>
        </>
    )

}
export default Ad