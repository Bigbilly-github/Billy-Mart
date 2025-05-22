


function BodyDetail2 ({text, maintext}){

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

                                        </div>


                        </div>
        </>
    )

}
export default BodyDetail2