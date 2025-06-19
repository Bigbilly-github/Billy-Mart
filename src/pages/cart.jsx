import CartDisplay from "../components/cartdisplay"
import FlashSales from "../components/flashsales"
import Footer from "../components/footer"
import Header from "../components/Header"



function Cart () {
    return(
        <>
        <Header/>
        <main>
            <CartDisplay/>
            <FlashSales/>
     
        </main>
        <Footer/>
        </>
    )

}
export default Cart