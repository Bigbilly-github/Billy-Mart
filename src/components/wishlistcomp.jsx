
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
        <div   key={product.id} className="w-[270px] h-[100%] hover:border hover:border-slate-400 ">
           
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
            <div onClick={()=> DisplayCategory(product.title)} className="w-[201px] px-[10px] pb-[15px] h-auto mt-[16px] ">
              <h1 className="font-medium text-[16px]">{product.title}</h1>
              <p className="text-[#DB4444] mt-[7px]">${product.price}</p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default WishlistComp;
