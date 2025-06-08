import BestSelling from "../components/bestselling"
import FlashSales from "../components/flashsales"
import Footer from "../components/footer"
import Header from "../components/Header"
import WishlistHero from "../components/wishlisthero"




function Wishlist (){

    return(
        <>
        <Header/>
        <main>
            <WishlistHero/>
            <BestSelling/>
            <FlashSales/>

        </main>
        <Footer/>
        </>
    )

}
export default Wishlist