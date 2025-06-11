
import { useState } from "react";
import image from "../assets/svg/login/image.svg";


function LoginSignUpHero (){
    const [action,setAction] = useState("signup");

    return(
        <>
        <section className="w-full flex justify-center mt-[50px]">
            <div className="w-[90%] flex items-center justify-between  pb-[50px]  ">
                <img src={image} alt="side image" className="object-contain" />
                <div className="w-[30%]">
                    <h1 className="text-[36px] font-medium mb-[20px]"> 
                       {action==="signup" ? "Create an account" : "Log in to Exclusive"}
                    </h1>
                    <p className="text-[16px] mb-[20px]">
                            {action==="signup" ? "Enter your details below" : "Enter your details below"}
                    </p>
                    <form action="">
                      {action ==="signup" ? <input type="text" id="name" name="name" placeholder="Name" className="w-[100%] mb-[10px] outline-0 p-[10px] border-b border-slate-300" /> : <div></div>}
                         <input type="email" id="email" name="email" placeholder="Email" className="w-[100%] mb-[10px] outline-0 p-[10px] border-b border-slate-300" />
                        <input type="password" id="password" name="password" placeholder="Password" className="w-[100%] mb-[10px] outline-0 p-[10px] border-b border-slate-300" />
                        <button className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black  mt-[30px]  duration-150   w-[100%] rounded-[5px] text-[14px] sm:text-[16px] text-white font-medium self-center h-[40px] sm:h-[56px] mb-[20px]">
                            {action==="signup" ? "Create Account":"Login"}
                        </button>

                    </form>
                    {
                        action==="signup" ?  <p className="text-slate-500">
                        Already have account? &nbsp; &nbsp; &nbsp; <span className="underline cursor-pointer" onClick={()=>{
                            setAction("login")
                        }}>Log in</span>
                    </p> : <div> <p className="text-slate-500">
                        Forgot password? &nbsp; &nbsp; &nbsp; <span className="underline cursor-pointer" >Click here</span>  &nbsp; &nbsp; &nbsp; <span className="underline font-bold cursor-pointer" onClick={()=>{
                            setAction("signup")
                        }} >Sign up</span>
                    </p>
                   
                    </div>
                   

                    }
                   

                </div>

            </div>

        </section>
        </>
    )

}
export default LoginSignUpHero
