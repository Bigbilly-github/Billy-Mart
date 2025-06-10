

import image from "../assets/svg/aboutushero/twofemales.svg"


function AboutUsHero(){
    return(
        <>
        <section className="w-full flex justify-center  mt-[50px] mb-[80px]">
            <div className="flex md:w-[90%] w-[80%] md:flex-row flex-col items-center gap-[40px]  md:gap-0 md:items-center md:justify-between ">
                <div className="md:w-[40%] md:order-0 order-1 ">
                    <h1 className="xl:text-[54px] lg:text-[44px] sm:text-[36px] mb-[30px] font-semibold">
                        Our Story
                    </h1>
                    <p className="sm:text-[16px] text-[14px]  mb-[24px]">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                    </p>
                     <p className="sm:text-[16px] text-[14px] ">
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>

                </div>
                <img src={image} alt="image of two females with shopping bags" className="rounded-[4px] md:w-[50%]" />
            </div>

        </section>
        </>
    )

}
export default AboutUsHero