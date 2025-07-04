import { useEffect } from "react";
import { useValueContext } from '../contexts/propscontext'
import { toast } from 'react-toastify';
import { auth } from "../js/firebase";



function BillingForm (){
    const { billingdetails, setBillingDetails} = useValueContext();

        const formdetails = [
        {
            label:"First Name",
            type:"text",
            value:"firstname"
        },
                {
            label:"Street Address",
            type:"text",
            value:"address"
        },
        {
            label:"Town/City",
            type:"text",
            value:"town"
        },
        {
            label:"Phone Number",
            type:"text",
            value:"phonenumber"
        },
         {
            label:"Email Address",
            type:"email",
            value:"email"
        }
    ]

    const scrollToTop = () => {
    window.scrollTo({
      top: 600, 
      behavior: "smooth",
    });
  };

  function GetBillingDetails(formData, formElement) {
        const user = auth.currentUser;

        if (!user) {
            alert("You must be logged in to save billing details.");
            return;
        }

        const updated = {
            firstname: formData.get("firstname"),
            address: formData.get("address"),
            town: formData.get("town"),
            phonenumber: formData.get("phonenumber"),
            email: formData.get("email"),
        };

        const key = `billingdetails_${user.uid}`;
        setBillingDetails((prev) => ({ ...prev, ...updated }));
        localStorage.setItem(key, JSON.stringify(updated));
        toast.success("Billing details saved successfully");
        formElement.reset();

        if (window.innerWidth < 600) {
            scrollToTop();
        }
}
   
    return(
        <>
         <div className="sm:w-[30%] w-[95%] h-auto ">
                  
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        GetBillingDetails(formData,e.target);
                    }
                     }         className="flex flex-col gap-[20px] ">
                     { formdetails.map((detail,index)=>  <div key={index} className=" flex flex-col gap-[10px]">
                            <label htmlFor={detail.value} className="font-normal sm:text-[14px] text-[12px]  md:text-[16px] text-slate-500">{detail.label}</label>
                            <input type={detail.type}  id={detail.value} name={detail.value}   placeholder={`Enter ${detail.label}`} className="outline-0 bg-[#F5F5F5] p-[10px] text-slate-500 text-[12px] rounded-[4px]" required/>

                        </div>
                    )}
                     <button
                            type="submit"
                            className="bg-[red] hover:outline-2 hover:outline-offset-2 hover:outline-black   text-white py-2 px-4 mt-4 rounded text-sm"
                            > Save Billing Details</button>
                    </form>

            </div>
        </>
    )

}
export default BillingForm