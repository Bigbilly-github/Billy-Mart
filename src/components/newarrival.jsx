
import BodyDetail2 from "./bodydetail2"
import React, { useState,useEffect,useRef } from 'react'
import { useValueContext } from '../contexts/propscontext'
import ps5 from "../assets/svg/new arrival/ps5.svg"
import woman from "../assets/svg/new arrival/woman.svg"
import speaker from "../assets/svg/new arrival/speakers.svg"
import gucci from "../assets/svg/new arrival/gucci parfum.svg"



function NewArrival (){

      const { products } = useValueContext();

    return(
        <>
         <section className="w-full h-auto flex flex-col items-center  mb-[80px] ">
                 <div className='w-[90%] px-[30px] '>
                       <BodyDetail2 text="Featured" maintext="Coming Soon"/>
                 </div>

                <div className="w-[90%] md:h-[600px] flex flex-col items-center md:flex-row md:justify-center mt-[30px] gap-[30px]">
                            <div className="md:w-[50%] w-[90%] sm:w-[600px] rounded-[4px] relative md:h-[100%] h-[400px] bg-black flex items-center justify-center">
                                <img src={ps5} alt="" className="object-contain h-[100%] " />
                                <div className="absolute bottom-[20px] left-[20px]  flex flex-col gap-[10px]">
                                    <h1 className="font-semibold sm:text-[24px] text-[16px] text-white">
                                    PlayStation 5
                                    </h1>
                                    <p className="sm:text-[14px] text-[12px] w-[100%]  text-white">
                                    Black and White version of the PS5 coming out on sale.
                                    </p>
                                    <p className="sm:text-[16px] text-[14px] font-medium text-slate-400">
                                        Coming Soon
                                    </p>

                                </div>

                            </div>

                            <div className="flex flex-col  md:w-[50%] w-[90%]  sm:w-[600px] gap-[32px] h-[100%]">
                                <div className="w-[100%] relative h-[284px] bg-black rounded-[4px]   ">
                                    <img src={woman} alt="" className="object-contain "/>
                                    <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[10px]">
                                            <h1 className="font-semibold sm:text-[24px] text-[16px] text-white">
                                            Women’s Collections
                                            </h1>
                                            <p className="sm:text-[14px] text-[12px] w-[100%]  text-white">
                                            Featured woman collections that give you another vibe.
                                            </p>
                                            <p className="sm:text-[16px] text-[14px] font-medium text-slate-400">
                                                Coming Soon
                                            </p>
                                    </div>


                                </div>
                                <div className="flex w-[100%] h-[284px] gap-[30px] ">
                                    <div className="w-[50%] relative h-[100%] bg-black rounded-[4px]  flex items-center justify-center ">
                                        <img src={speaker} alt="speaker image" className="object-contain " />
                                        <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[10px]">
                                            <h1 className="font-semibold sm:text-[24px] text-[16px] text-white">
                                            Speakers
                                            </h1>
                                            <p className="sm:text-[14px] text-[12px] w-[100%] text-white">
                                            Amazon wireless speakers
                                            </p>
                                            <p className="sm:text-[16px] text-[14px] font-medium text-slate-400">
                                                Coming Soon
                                            </p>
                                    </div>

                                    </div>
                                    <div className="w-[50%] relative h-[100%] bg-black rounded-[4px]  flex items-center justify-center ">
                                        <img src={gucci} alt="image of a gucci parfum" />
                                        <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[10px]">
                                            <h1 className="font-semibold sm:text-[24px] text-[16px] text-white">
                                            Perfume
                                            </h1>
                                            <p className="sm:text-[14px] text-[12px] w-[100%] text-white">
                                            GUCCI INTENSE OUD EDP
                                            </p>
                                            <p className="sm:text-[16px] text-[14px] font-medium text-slate-400">
                                                Coming Soon
                                            </p>
                                        </div>


                                    </div>

                                </div>

                            </div>


                 </div>
                

         </section>
        </>
    )

}
export default NewArrival