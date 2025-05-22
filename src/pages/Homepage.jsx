import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FlashSales from '../components/flashsales'




const Homepage = () => {
  return (
    <>
        <Header/>
        <main>
           <Hero/>
           <FlashSales/>

        </main>

    </>
    
  )
}

export default Homepage