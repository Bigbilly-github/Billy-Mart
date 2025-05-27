import React from 'react'
import Header from '../components/Header'
import FlashSales from '../components/flashsales'
import Category from '../components/category'
import BestSelling from '../components/bestselling'
import Ad from '../components/ad'
import NewArrival from '../components/newarrival'
import CustomerService from '../components/customerservices'
import Footer from '../components/footer'
import Hero from '../components/Hero';








function Homepage () {
  return (
    <>
        <Header/>
        <main>
           <Hero/>
            <FlashSales/>
            <Category/>
            <BestSelling/>
            <Ad/>
            <NewArrival/>
            <CustomerService/>


        </main>
        <Footer/>

    </>
    
  )
}

export default Homepage


