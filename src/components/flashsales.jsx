import React, { useState, useEffect, useRef } from "react";
import { useValueContext } from "../contexts/propscontext";
import img from "../assets/svg/flashsales/Frame 611.svg";
import img1 from "../assets/svg/flashsales/Five star.svg";
import FlashSalesComp from "./flashsalescomp";
import BodyDetail from "./bodydetail";

function FlashSales() {
  const { products } = useValueContext();
  console.log(products);

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const cardWidth = container.firstChild.offsetWidth + 30;
    const scrollAmount = cardWidth * 2;

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
      <section className="w-full h-auto flex justify-center mt-[140px] mb-[140px] ">
        <div className="w-[90%] px-[30px] flex  flex-col ">
          <BodyDetail text="Today's" maintext="Flash sales" scroll={scroll} />

          <div className="w-full h-[380px] mt-[40px]  overflow-hidden ">
            <FlashSalesComp
              products={products}
              
              carouselRef={carouselRef}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default FlashSales;
