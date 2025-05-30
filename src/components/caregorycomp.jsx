

import { useValueContext } from '../contexts/propscontext'
import { useNavigate } from 'react-router-dom';


function CategoryComp ({categories,carouselRef,selectImage}){
     const {products,isplayValue,setDisplayValue} = useValueContext();
      const navigate = useNavigate();

     function categoryLength (category){
        const catLength = products.filter((product,_)=>  product.category === category);
        return catLength.length;

     }
      const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth",
    });
  };

        function DisplayCategory (value){
            setDisplayValue(value);
            navigate('/shop');
            scrollToTop();



      
     }

    return(
        <>
         <div ref={carouselRef} className='flex gap-[30px] overflow-x-auto scroll-smooth no-scrollbar transition-all duration-300'>
           {categories.map((category,index)=> <div  onClick={()=>DisplayCategory(category)} key={index} className="w-[306px] h-[100%]  rounded-[20px] bg-[#F8F9FA]">
            <div className='w-full h-[100%]  flex  items-center justify-center  rounded-[4px]'>
                <img src={selectImage(category)} alt="image icon" className="w-[100%] h-[216px] mb-0 rounded-b-none  rounded-[20px]  " />
            </div>
                <div className="pt-[10px] w-[306px] h-[92px] m-0 pl-[16px] ">
                    <p className="font-semibold text-[20px]">
                      {category}
                    </p>
                    <p className="text-[16px] text-[#00000060]">
                        {categoryLength(category)} products
                    </p>
                </div>
                
            </div>
)}


                          

          
        </div>
        
        </>
    )

}
export default CategoryComp