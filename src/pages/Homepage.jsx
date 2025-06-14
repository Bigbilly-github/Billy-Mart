import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import FlashSales from '../components/flashsales'
import Category from '../components/category'
import BestSelling from '../components/bestselling'
import Ad from '../components/ad'
import NewArrival from '../components/newarrival'
import CustomerService from '../components/customerservices'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../js/firebase";
import { useNavigate } from "react-router-dom";








function Homepage () {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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


