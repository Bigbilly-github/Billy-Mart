import img from "../assets/svg/flashsales/Vector.svg";
import { useValueContext } from '../contexts/propscontext'



import { useNavigate } from 'react-router-dom';
import Wishlist from "../pages/wishlist";


function FlashSalesComp({ carouselRef, products }) {
   const navigate = useNavigate();
    const { GetRatings,AddToWishlist } = useValueContext();
   

 
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
        className="flex gap-[30px] overflow-x-auto scroll-smooth  no-scrollbar transition-all duration-300"
      >
        {products.map((product, _) => (
        <div   key={product.id} className="w-[270px] hover:shadow-2xl  h-[100%]  ">
           
            <div className="w-full relative h-[100%] bg-[#F5F5F5] flex  items-center justify-center  rounded-[4px]">
              <img
                src={product.thumbnail}
                alt="item thumbnail"
                className="  object-contain"
              />
              <div onClick={()=>AddToWishlist(product.id)} className="h-[24px] absolute bottom-[10px] flex items-center justify-center     right-[10px] w-[24px] active:bg-[red]     rounded-[50%]">
                <img
                  src={img}
                  alt="heart icon"
                  className="w-[16px] h-[16px]"
                />
              </div>
            </div>
            <div onClick={()=> DisplayCategory(product.title)} className="w-[201px]  px-[10px] pb-[10px] h-auto mt-[16px] ">
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
