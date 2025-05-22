



function BodyDetail ({text,maintext,scroll}){

   

    return(
        <>
                <div>
                        <div className="flex items-center gap-[16px]">
                                    <div className="w-[20px] h-[50px] bg-[red] rounded-t-[5px] rounded-b-[5px]"> </div>
                                    <p className="font-[poppins] text-[16px] font-semibold">
                                    {text}
                                    </p>
                        </div>
                    

                                <div className="flex items-center  justify-between mt-[24px] ">
                                    <p className="md:text-[36px] text-[24px]  font-semibold font-[poppins] tracking-wider">
                                    {maintext}
                                    </p>
                                    <div className="flex items-center gap-[10px] ">
                                            <button
                                            onClick={() => scroll("left")}
                                            
                                                className="   bg-slate-300  text-[20px]   text-black px-3 py-1 rounded-full"
                                            >
                                                &larr;
                                            </button>
                                            <button
                                            onClick={() => scroll("right")}
                                            
                                                className="   bg-slate-300 text-[20px]  text-black px-3 py-1 rounded-full"
                                            >
                                                &rarr;
                                                </button>
                                    </div>

                                </div>


                </div>
        </>
    )

}
export default BodyDetail