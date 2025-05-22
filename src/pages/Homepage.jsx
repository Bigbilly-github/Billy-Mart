import React from 'react'
import Header from '../components/Header'

import FlashSales from '../components/flashsales'
import Category from '../components/category'
import BestSelling from '../components/bestselling'
import Hero from '../components/hero'




const Homepage = () => {
  return (
    <>
        <Header/>
        <main>
        <Hero/>
           <FlashSales/>
            <Category/>
            <BestSelling/>


        </main>

    </>
    
  )
}

export default Homepage