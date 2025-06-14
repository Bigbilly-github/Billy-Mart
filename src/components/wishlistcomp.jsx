
import { useValueContext } from '../contexts/propscontext'
import deleteicon from "../assets/svg/wishlist/delete.svg"



import { useNavigate } from 'react-router-dom';


function WishlistComp({ carouselRef, products }) {
   const navigate = useNavigate();
    const { GetRatings,wishlist,setWishList } = useValueContext();
   

 
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

     function DeleteWishlistItem (id) {
  const newWishlistItem = wishlist.filter(item=> item.id !== id);
     setWishList(newWishlistItem);
   localStorage.setItem('wishlist', JSON.stringify(newWishlistItem));

}
     
     

  return (
    <>
      <div
        ref={carouselRef}
        className="flex gap-[30px] overflow-x-auto scroll-smooth no-scrollbar transition-all duration-300"
      >
        {products.map((product, _) => (
        <div   key={product.id} className="w-[270px] h-[100%] hover:shadow-lg ">
           
            <div className="w-full relative h-[100%] bg-[#F5F5F5] flex  items-center justify-center  rounded-[4px]">
              <img
                src={product.thumbnail}
                alt="item thumbnail"
                className="  object-contain"
              />
              <div  className='absolute top-[10px] right-[10px]' >
                <img onClick={()=> DeleteWishlistItem(product.id)} src={deleteicon} alt="deleteicon" className='' />
              </div>
             
            </div>
            <div  className="w-[251px] px-[10px] pb-[15px] h-auto mt-[16px] ">
              <h1 className="font-medium text-[16px]">{product.title}</h1>
              <p className="text-[#DB4444] mt-[7px]">${product.price}</p>
              <button  onClick={()=> DisplayCategory(product.title)}  className="bg-[#ba3131] mt-[15px] hover:outline-2 hover:outline-offset-2 hover:outline-black    duration-150   w-[100%] rounded-[5px] text-[14px] sm:text-[16px] text-white font-medium self-center h-[40px] sm:h-[50px] mb-[20px]">View Item</button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
}
export default WishlistComp;
