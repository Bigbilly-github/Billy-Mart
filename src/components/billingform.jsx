




function BillingForm (){

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
    return(
        <>
         <div className="w-[30%] h-auto ">
                  
                    <form action="" className="flex flex-col gap-[20px] ">
                     { formdetails.map((detail,index)=>  <div key={index} className=" flex flex-col gap-[10px]">
                            <label htmlFor={detail.value} className="font-normal text-[16px] text-slate-500">{detail.label}</label>
                            <input type={detail.type}  id={detail.value} name={detail.value}   placeholder={`Enter ${detail.label}`} className="outline-0 bg-[#F5F5F5] p-[10px] text-slate-500 text-[12px] rounded-[4px]" required/>

                        </div>
                    )}
                    </form>

            </div>
        </>
    )

}
export default BillingForm