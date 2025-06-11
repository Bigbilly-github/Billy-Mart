

import image1 from "../assets/svg/analytics/Services.svg"
import image2 from "../assets/svg/analytics/Services2.svg"
import image3 from "../assets/svg/analytics/Services3.svg"
import image4 from "../assets/svg/analytics/Services4.svg"

function Analytics (){
    const AnalyticsArray = [
        {
            image:image1,
            maintext:"10.5k",
            text:"sellers active on our site"
        },
        {
            image:image2,
            maintext:"33k",
            text:"Monthly Produduct Sale"
        },
        {
            image:image3,
            maintext:"45.5k",
            text:"Customer active in our site"
        },
         {
            image:image4,
            maintext:"25k",
            text:"Anual gross sale in our site"
        },
        

    ]

    return(
        <>
        <section className="w-full flex justify-center lg:mb-[140px] mb-[100px]">
            <div className="xl:flex xl:gap-[30px] gap-[50px]  w-[80%] grid grid-cols-2">
              {AnalyticsArray.map((item,index)=>  <div key={index} className=" hover:bg-red-500 group xl:w-[270px] xl:h-[230px] xl:py-0 py-[30px] border border-slate-300 flex flex-col gap-[20px]  items-center justify-center ">
                    <img src={item.image} alt="marketplace icon" className="w-[40px] h-[40px] md:w-[80px] md:h-[60px] sm:w-[60px] sm:h-[60px]" />
                    <p className="sm:text-[32px] text-[24px] group-hover:text-white text-center  font-bold">
                        {item.maintext}
                    </p>
                    <p className="sm:text-[16px] text-[12px] group-hover:text-white text-center">
                       {item.text}
                    </p>


                </div>
                )}

            </div>

        </section>
        </>
    )

}
export default Analytics