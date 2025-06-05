import React, { useState, useEffect, useRef } from "react";
import { useValueContext } from "../contexts/propscontext";
import BodyDetail from "./bodydetail";
import WishlistComp from "./wishlistcomp";

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
      <section className="w-full h-auto flex justify-center mt-[80px] mb-[80px] ">
        <div className="w-[90%] px-[30px] flex  flex-col ">
          <BodyDetail text="Wishlist" maintext="Saved for later" scroll={scroll} />

          <div className="w-full h-[380px] mt-[40px]  overflow-hidden ">
            <WishlistComp
              products={wishlist}
              
              carouselRef={carouselRef}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default WishlistHero;