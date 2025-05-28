
import { useValueContext } from '../contexts/propscontext'
import rating5 from "../assets/svg/flashsales/Five star.svg";
import rating1 from "../assets/img/flashsalescomp/1rating.png";
import rating2 from "../assets/img/flashsalescomp/2rating.png";
import rating3 from "../assets/img/flashsalescomp/3rating.png";
import rating4 from "../assets/img/flashsalescomp/4rating.png";



function ShopSidebar (){
     const {categories,ToUp,products,HandleCategory,HandleBrands,HandleRatings} = useValueContext();
      const brands = products.map((product,_)=> product.brand )

      const ratings = [
        {
            image:rating1,
            value:"1",
            text:"rating1"
        },
         {
            image:rating2,
            value:"2",
              text:"rating2"
        },
         {
            image:rating3,
            value:"3",
              text:"rating3"
        },
         {
            image:rating4,
            value:"4",
              text:"rating4"
        },
         {
            image:rating5,
            value:"5",
              text:"rating5"
        },
       ]
   
  

    return(
        <>
            <div className="w-[20%]  pl-[22px] ">
                <h1 className="font-semibold text-[20px]">
                    Filter by categories
                </h1>

                <div className="mt-[16px] mb-[26px]">
                  { categories.map((Category,index)=>  <div key={index} className="flex gap-[8px] mb-[8px]">
                        <input type="radio" name="category" id={Category} value={Category} onChange={HandleCategory} />
                        <label htmlFor={Category}>{ToUp(Category)}</label>
                    </div>
                )}
                </div>

                <h1 className="font-semibold text-[20px] ">
                    Filter by brands
                </h1>

                 <div className="mt-[16px] mb-[30px]">
                  { brands.slice(184,191).map((brand,index)=>  <div key={index} className="flex gap-[8px] mb-[8px]">
                        <input type="radio" name="brands" id={brand} value={brand} onChange={HandleBrands} />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                )}
                </div>

                 <h1 className="font-semibold text-[20px]  ">
                    Filter by ratings
                </h1>

                 <div className="mt-[16px]">
                  { ratings.map((rating,index)=>  <div key={index} className="flex gap-[8px] mb-[8px]">
                        <input type="radio" name="ratings" id={rating.text} value={rating.value}  />
                       <label htmlFor={rating.text}><img src={rating.image} alt="" className='w-[100px] object-contain' /></label> 
                       
                    </div>
                )}
                </div>


               

            </div>
        </>
    )

}
export default ShopSidebar