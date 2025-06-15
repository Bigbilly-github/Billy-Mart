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
import { toast } from 'react-toastify';











function Homepage () {
  
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
    const [displayName, setDisplayName] = useState("");
    


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate("/");
       
        
      }
      else{
         setDisplayName(currentUser.displayName);


         toast.success(`Welcome ${currentUser.displayName.slice(0,1).toUpperCase()}${currentUser.displayName.slice(1,currentUser.displayName.length)}`)
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


