import { Link } from "react-router-dom";

function NotFoundHero (){
    return(
        <>
        <section className="w-full flex mt-[50px] justify-center" >
            <div className="w-[90%] flex justify-center ">
                <div className="flex flex-col items-center ">
                         <h1 className="lg:text-[110px] md:text-[70px] sm:text-[50px] text-[32px] font-medium">
                            404 Not Found
                        </h1>
                        <p className="sm:text-[16px] text-[12px]">
                            The visited page does not exist. 
                        </p>
                        <button className="bg-[red] sm:mt-[50px] mt-[30px]  self-center hover:outline-2 hover:outline-offset-2 hover:outline-black    duration-150   w-[40%] rounded-[5px] text-[12px] sm:text-[16px] text-white font-medium  h-[40px] sm:h-[56px] mb-[20px]">
                          <Link to="/">Homepage</Link> 
                        </button>

                </div>


            </div>

        </section>
        </>
    )
}
export default NotFoundHero