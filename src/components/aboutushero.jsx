

import image from "../assets/svg/aboutushero/twofemales.svg";

function AboutUsHero() {
  return (
    <>
              <div className="w-[100%] h-[60px] rounded-[4px] mb-[30px]  text-black text-[20px] font-semibold bg-slate-100 flex items-center justify-center ">
       About Us

             </div>
    <section className="w-full flex justify-center mt-[50px] mb-[80px] lg:mb-[140px]">
      <div className="flex w-[90%] lg:w-[90%] flex-col lg:flex-row items-center lg:justify-between gap-[40px] lg:gap-0">
        
        
        <article className="order-1 lg:order-0 lg:w-[40%]">
          <h1 className="font-semibold text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[54px] mb-[30px]">
            Our Story
          </h1>
          <p className="text-[14px] sm:text-[16px] mb-[24px]">
            Launched in 2025, <strong>BillyMart</strong> is a fast-growing online shopping platform built with the goal of simplifying everyday purchases across Nigeria and beyond. We aim to make quality products easily accessible to everyone, wherever they are.
          </p>
          <p className="text-[14px] sm:text-[16px] mb-[24px]">
            From fashion, electronics, and groceries to home essentials and personal care, BillyMart offers a wide variety of carefully curated products, with more being added every day.
          </p>
          <p className="text-[14px] sm:text-[16px]">
            We’re more than just a marketplace, we are building a digital shopping culture that’s local, seamless, and community-driven.
          </p>
        </article>

       
        <img
          src={image}
          alt="Two women holding shopping bags, representing the BillyMart community"
          className="lg:w-[50%] rounded-[4px]"
        />
      </div>
    </section>
    </>
  );
}

export default AboutUsHero;
