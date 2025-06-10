import BestSelling from "../components/bestselling"
import FlashSales from "../components/flashsales"
import Footer from "../components/footer"
import Header from "../components/Header"
import WishlistHero from "../components/wishlisthero"
import { useValueContext } from '../contexts/propscontext'




function Wishlist (){
     const { wishlist } = useValueContext();

    return(
        <>
        <Header/>
         <WishlistHero/>
       {wishlist.length  > 0 ? <main>
           
            <BestSelling/>
            <FlashSales/>

        </main> : null}
        <Footer/>
        </>
    )

}
export default Wishlist