import AboutUsHero from "../components/aboutushero"
import Analytics from "../components/analytics"
import CustomerService from "../components/customerservices"
import Footer from "../components/footer"
import Header from "../components/Header"

function AboutUs (){

    return(
        <>
        <Header/>
        <main>
            <AboutUsHero/>
            <Analytics/>
            <CustomerService/>

            

        </main>
        <Footer/>
        </>
    )

}
export default AboutUs