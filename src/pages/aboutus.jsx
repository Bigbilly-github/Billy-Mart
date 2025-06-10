import AboutUsHero from "../components/aboutushero"
import CustomerService from "../components/customerservices"
import Footer from "../components/footer"
import Header from "../components/Header"

function AboutUs (){

    return(
        <>
        <Header/>
        <main>
            <AboutUsHero/>
            <CustomerService/>

        </main>
        <Footer/>
        </>
    )

}
export default AboutUs