import BestSelling from "../components/bestselling"
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

        </main>
        <Footer/>
        </>
    )

}
export default Wishlist