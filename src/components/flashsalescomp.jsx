import img from "../assets/svg/flashsales/Fill Heart.svg";
import image from "../assets/svg/flashsales/Five star.svg";
import rating1 from "../assets/img/flashsalescomp/1rating.png";
import rating2 from "../assets/img/flashsalescomp/2rating.png";
import rating3 from "../assets/img/flashsalescomp/3rating.png";
import rating4 from "../assets/img/flashsalescomp/4rating.png";


import { useNavigate } from 'react-router-dom';


function FlashSalesComp({ carouselRef, products }) {
   const navigate = useNavigate();
   

  function GetRatings(rating) {
    const productRating = Math.floor(rating);
    switch (productRating) {
      case 1:
        return rating1;
      case 2:
        return rating2;
      case 3:
        return rating3;
      case 4:
        return rating4;
      default:
        image;
    }
  }
    const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth",
    });
  };
    function DisplayCategory (value){
            
            navigate(`/shop/${value}`);
            scrollToTop();



      
     }
     

  return (
    <>
      <div
        ref={carouselRef}
        className="flex gap-[30px] overflow-x-auto scroll-smooth no-scrollbar transition-all duration-300"
      >
        {products.map((product, _) => (
        <div onClick={()=> DisplayCategory(product.title)}  key={product.id} className="w-[270px] h-[100%] ">
           
            <div className="w-full relative h-[100%] bg-[#F5F5F5] flex  items-center justify-center  rounded-[4px]">
              <img
                src={product.thumbnail}
                alt="item thumbnail"
                className="  object-contain"
              />
              <div>
                <img
                  src={img}
                  alt="heart icon"
                  className="absolute bottom-[10px] right-[10px]"
                />
              </div>
            </div>
            <div className="w-[201px] h-auto mt-[16px] ">
              <h1 className="font-medium text-[16px]">{product.title}</h1>
              <p className="text-[#DB4444] mt-[7px]">${product.price}</p>
              <div className="flex gap-[15px] items-center mt-[3px] ">
                <img
                  src={GetRatings(product.rating)}
                  alt="rating icon"
                  className="w-[100px] bg-transparent "
                />
                <p>({product.stock})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default FlashSalesComp;
