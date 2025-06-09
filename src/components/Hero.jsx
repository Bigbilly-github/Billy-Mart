import  { useState,useEffect,useRef } from 'react'
import { useValueContext } from '../contexts/propscontext'

import image2 from "../assets/img/hero/img2.png"
import image3 from "../assets/img/hero/img3.png"
import image4 from "../assets/img/hero/img4.png"
import image5 from "../assets/img/hero/img5.png"

import { useNavigate } from 'react-router-dom';

function Hero1 () {
   const {setDisplayValue} = useValueContext();
    const navigate = useNavigate();

    const images = [image2, image3, image4, image5];   

    const [current, setCurrent] = useState(0);
    const length = images.length;
    const intervalRef = useRef(null);
  
    const handleNext = () => setCurrent((current + 1) % length);
    const handlePrev = () => setCurrent((current - 1 + length) % length);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
          handleNext();
        }, 3000); 
    
        return () => clearInterval(intervalRef.current);
      },);


      function DisplayCategory (value){
        setDisplayValue(value);
        navigate("/shop");


      }
  
   
    
    const {categories} = useValueContext();
  return (
    <section className='w-full  max-h-[500px] min-h-[300px] flex justify-center bg-slate-100  border-t border-slate-300'>
        <div className='w-[90%] px-[30px] flex   '>
            <div className='pr-[50px] pb-[50px] hidden md:flex flex-col pt-[30px] border-r border-slate-300 '>
              { categories.map((category,index) => <a onClick={()=> DisplayCategory(category)} key={index} className='text-[18px]  hover:text-slate-500 hover:underline  mb-[16px] font-[poppins]'>
                   { `${category.slice(0,1).toUpperCase()}${category.slice(1,category.length)}`}
                </a>
            )}

            </div>
            <div className=' flex-1 h-auto '>
                            <div
                                    className="relative w-full h-full mx-auto overflow-hidden rounded"
                                  
                                >
                    <img src={images[current]} alt="Gallery" className="w-full h-full object-contain" />

                
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
                    >
                        ›
                    </button>
                    </div>

            </div>

        </div>

    </section>
  )
}

export default Hero1