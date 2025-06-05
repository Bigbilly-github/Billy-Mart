import img from "../assets/svg/flashsales/Fill Heart.svg";
import { useValueContext } from '../contexts/propscontext'



import { useNavigate } from 'react-router-dom';


function WishlistComp({ carouselRef, products }) {
   const navigate = useNavigate();
    const { GetRatings } = useValueContext();
   

 
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
             
            </div>
            <div className="w-[201px] h-auto mt-[16px] ">
              <h1 className="font-medium text-[16px]">{product.title}</h1>
              <p className="text-[#DB4444] mt-[7px]">${product.price}</p>
              <div className="flex gap-[15px] items-center mt-[3px] ">
               
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default WishlistComp;
