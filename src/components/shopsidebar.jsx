
import { useValueContext } from '../contexts/propscontext'



function ShopSidebar (){
     const {categories,ToUp,products,HandleCategory,HandleBrands} = useValueContext();
      const brands = products.map((product,_)=> product.brand )
   
  

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

                 <div className="mt-[16px]">
                  { brands.slice(184,191).map((brand,index)=>  <div key={index} className="flex gap-[8px] mb-[8px]">
                        <input type="radio" name="brands" id={brand} value={brand} onChange={HandleBrands} />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                )}
                </div>

               

            </div>
        </>
    )

}
export default ShopSidebar