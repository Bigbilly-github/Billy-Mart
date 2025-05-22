
import img from "../assets/svg/flashsales/Fill Heart.svg";
import image from "../assets/svg/flashsales/Five star.svg"

function FlashSalesComp ({carouselRef,products}){


    return(
        <>
         <div ref={carouselRef} className='flex gap-[30px] overflow-x-auto scroll-smooth no-scrollbar transition-all duration-300'>
        
                          
                                { products.slice(0,25).map((product,_) =>(
                                    <div   key={product.id} className='w-[270px] h-[100%] '>
                                        <div className='w-full relative h-[100%] bg-[#F5F5F5] flex  items-center justify-center  rounded-[4px]'>
                                            <img src={product.thumbnail} alt="item thumbnail"  className='  object-contain'/>
                                            <div >
                                                <img src={img} alt="heart icon" className="absolute bottom-[10px] right-[10px]" />
                                            </div>

        
                                        </div>
                                        <div className='w-[201px] h-auto mt-[16px] '>
                                            <h1 className='font-medium text-[16px]'>
                                        {product.title}
                                            </h1>
                                            <p className='text-[#DB4444] mt-[7px]'>
                                            ${product.price}
                                            </p>
                                            <div className='flex gap-[15px] items-center mt-[7px]'>
                                                <img src={image} alt="rating icon" />
                                                <p>
                                                    ({product.stock})
                                                </p>
        
                                            </div>
                                            
        
                                        </div>
        
                                    </div>
                                     ))}
                           </div>
        </>
    )

}
export default FlashSalesComp