import BestSelling from "../components/bestselling"
import Category from "../components/category"
import FlashSales from "../components/flashsales"
import Footer from "../components/footer"
import Header from "../components/Header"
import NewArrival from "../components/newarrival"
import ProductDetails from "../components/productdetails"
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
            <Category/>
            <BestSelling/>
            <ShopDisplay/>
            <FlashSales/>
            <NewArrival/>
            <ProductDetails/>
          
       
        </main>
        <Footer/>
        </>
    )

}
export default Shop