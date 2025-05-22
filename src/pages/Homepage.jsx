import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FlashSales from '../components/flashsales'
import Category from '../components/category'




const Homepage = () => {
  return (
    <>
        <Header/>
        <main>
           <Hero/>
           <FlashSales/>
            <Category/>


        </main>

    </>
    
  )
}

export default Homepage