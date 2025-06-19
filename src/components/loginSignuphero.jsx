
import { useState } from "react";
import image from "../assets/svg/login/image.svg";

import { auth } from "../js/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useValueContext } from "../contexts/propscontext";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';



function LoginSignUpHero (){
     const {  action,  setAction } = useValueContext();
   
    const [username,setUserName] = useState("");
    const [useremail,setUserEmail] = useState("");
    const [userpassword,setUserPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (action==="login") {
         await signInWithEmailAndPassword(auth, useremail, userpassword);
         toast.success("Logged in successfully!");
          navigate("/homepage");
            setTimeout(() => {
                        navigate(0);
                        }, 100);

      } else if (action==="signup") {
       const userCredential =  await createUserWithEmailAndPassword(auth, useremail, userpassword);
         await updateProfile(userCredential.user, {
        displayName: username,
      });
         toast.success("Account created!");
          navigate("/homepage");
            setTimeout(() => {
                        navigate(0);
                        }, 100);
      }
      else {
                if (!useremail) {
                toast.info("Please enter your email first.");
                return;
            }

            try {
                await sendPasswordResetEmail(auth, useremail);
                toast.success("Password reset email sent! Check your inbox.");
                setAction("login")
                  

            } catch (error) {
                toast.error(error.message);
            }
        

      }
           
            
            setUserEmail("");
            setUserPassword("");
             setUserName("");
    } 
    catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    toast.info("That email is already registered. Please log in instead.");
                    setAction("login");
                } else if (error.code === "auth/invalid-credential"){
                    toast.error("Incorrect Email or password.Please try again");


                }
                else {
                    alert(error.message);
                }
}
}

    

    return(
        <>
        <section className="w-full overflow-hidden   items-center flex justify-center pt-[50px] lg:pb-[50px] pb-[0px]  ">
           <div className="w-[80%]  lg:w-[90%] px-4 flex flex-col lg:flex-row items-center justify-between pb-[50px]">

                <img src={image} alt="side image" className="object-contain lg:w-[50%] hidden lg:block " />
               <div className="w-full lg:w-[40%] px-4">

                    <h1 className="md:text-[36px] text-center sm:text-[36px] text-[18px] font-semibold mb-[20px]"> 
                       {action==="signup" ? "Create an account" :
                       action==="login" ? "Welcome Back": "Change password"}
                    </h1>
                    <p className="text-[16px] text-center mb-[20px]">
                            {action==="signup" ? "Enter your details below" :
                            action==="login" ? "Enter your details below": "Enter email below" }
                    </p>
                    <form onSubmit={handleSubmit} className=" flex flex-col ">
                      {action ==="signup" ? <input type="text" id="name" name="name" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Name" className="w-full box-border    mb-[10px] text-[14px] sm:text-[16px] md:text-[18px] outline-0 p-[10px] border-b border-slate-300"  required/> : <div></div>}
                         <input type="email" id="email" name="email" placeholder="Email" value={useremail} onChange={(e) => setUserEmail(e.target.value)} className="w-full box-border mb-[10px] outline-0 text-[14px] sm:text-[16px] md:text-[18px] p-[10px] border-b border-slate-300" required />
                    {action==="passwordrecovery" ? <div></div>  : <input type="password" id="password" name="password" placeholder="Password" value={userpassword} onChange={(e) => setUserPassword(e.target.value)} className={`w-full box-border text-[14px] sm:text-[16px] md:text-[18px] mb-[10px] outline-0 p-[10px] border-b border-slate-300`} required /> }
                        <button type="submit" className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black sm:mt-[30px] mt-[15px]  duration-150   w-[100%] rounded-[5px] box-border text-[14px] sm:text-[16px] text-white font-medium self-center h-[40px] sm:h-[56px] mb-[20px]">
                            {action==="signup" ? "Create Account":
                            action === "login" ? "Login": "Change password"}
                        </button>

                    </form>
                    {
                        action==="signup" ?  <p className="text-slate-500 sm:text-[16px] text-[12px]">
                        Already have account? &nbsp; <span className="underline cursor-pointer" onClick={()=>{
                            setAction("login")
                        }}>Log in</span></p> : 
                        action==="login" ? <div> <p className="text-slate-500 sm:text-[16px] text-[12px]">
                        Forgot password? &nbsp; <span onClick={()=> {
                            setAction("passwordrecovery")
                        }} className="underline cursor-pointer" >Click here</span>  &nbsp; <span className="underline font-bold cursor-pointer" onClick={()=>{
                            setAction("signup")
                        }} >Sign up</span></p>

                   
                    </div>: <div></div>
                   

                    }
                   

                </div>

            </div>

        </section>
        </>
    )

}
export default LoginSignUpHero
