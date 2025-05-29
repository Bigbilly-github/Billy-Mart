import Category from "../components/category"
import Header from "../components/Header"
import ProductDisplay from "../components/productdisplay"
import ShopDisplay from "../components/shopdisplay"
import ShopHero from "../components/shophero"



function Shop (){

    return(
        <>
        <Header/>
        <main>
            <ShopHero/>
            <ProductDisplay/>
          
       
        </main>
        </>
    )

}
export default Shop