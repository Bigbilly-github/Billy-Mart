import React from 'react'
import Header from '../components/Header'

import FlashSales from '../components/flashsales'
import Category from '../components/category'
import BestSelling from '../components/bestselling'
import Hero from '../components/hero'
import Ad from '../components/ad'
import NewArrival from '../components/newarrival'
import CustomerService from '../components/customerservices'




const Homepage = () => {
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

    </>
    
  )
}

export default Homepage