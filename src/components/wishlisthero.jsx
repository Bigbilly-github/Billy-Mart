import React, { useState, useEffect, useRef } from "react";
import { useValueContext } from "../contexts/propscontext";
import BodyDetail from "./bodydetail";
import WishlistComp from "./wishlistcomp";
import EmptyCart from "./emptycart";

function WishlistHero() {
  const { products,wishlist } = useValueContext();


  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const cardWidth = container.firstChild.offsetWidth + 30;
    const scrollAmount = cardWidth * 1;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center mt-10">Loading flash sales...</p>;
  }

  return (
    <>
              <div className="w-[100%] h-[60px] rounded-[4px] mb-[30px]  text-black text-[20px] font-semibold bg-slate-100 flex items-center justify-center ">
       Wishlist

             </div>
    {wishlist.length > 0 ?  <section className="w-full h-auto flex justify-center mt-[80px] mb-[80px] ">
        <div className="w-[90%] px-[30px] flex  flex-col ">
          <BodyDetail text="Wishlist" maintext="Saved for later" scroll={scroll} />

          <div className="w-full h-auto pb-[50px] mt-[40px]  overflow-hidden ">
            <WishlistComp
              products={wishlist}
              
              carouselRef={carouselRef}
            />
          </div>
        </div>
      </section>: <EmptyCart/>}
    </>
  );
}
export default WishlistHero;