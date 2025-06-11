

import image from "../assets/svg/aboutushero/twofemales.svg"


function AboutUsHero(){
    return(
        <>
        <section className="w-full flex justify-center  mt-[50px] lg:mb-[140px] mb-[80px]">
            <div className="flex lg:w-[85%] w-[80%] lg:flex-row flex-col items-center gap-[40px]  lg:gap-0 md:items-center lg:justify-between ">
                <div className="lg:w-[40%] lg:order-0 order-1 ">
                    <h1 className="xl:text-[54px] lg:text-[44px] sm:text-[36px] mb-[30px] font-semibold">
                        Our Story
                    </h1>
                    <p className="sm:text-[16px] text-[14px]  mb-[24px]">
                        Launched in 2025, BillyMart is a fast-growing online shopping platform built with the goal of simplifying everyday purchases across Nigeria and beyond. We aim to make quality products easily accessible to everyone, wherever they are.
                    </p>
                    <p className="sm:text-[16px] text-[14px]  mb-[24px]">
                        From fashion, electronics, and groceries to home essentials and personal care, BillyMart offers a wide variety of carefully curated products, with more being added every day.
                    </p>
                    <p className="sm:text-[16px] text-[14px] ">
                       We’re more than just a marketplace, we’re building a digital shopping culture that’s local, seamless, and community-driven.
                    </p>

                </div>
                <img src={image} alt="image of two females with shopping bags" className="rounded-[4px] lg:w-[50%]" />
            </div>

        </section>
        </>
    )

}
export default AboutUsHero