import services from '../assets/svg/customer service/services.svg'
import services1 from '../assets/svg/customer service/services1.svg'
import services2 from '../assets/svg/customer service/services2.svg'



function CustomerService (){

    const servicesArray= [
        {
            img:services,
            maintext:"FREE AND FAST DELIVERY",
            text:"  Free delivery for all orders over $140"
        },
        {
            img:services1,
            maintext:"24/7 CUSTOMER SERVICE",
            text:"Friendly 24/7 customer support"
        },
        {
            img:services2,
            maintext:"MONEY BACK GUARANTEE",
            text:"We reurn money within 30 days"
        }

    ]


    return(
        <>
        <section className='w-full flex justify-center items-center  h-[200px]'>
            <div className='w-[90%] flex  justify-center gap-[30px]'>
                {servicesArray.map((service,index)=>   <div key={index} className='sm:w-[349px]   w-[249px] h-[181px] flex flex-col items-center  '>
                    <img src={service.img} alt="delivery logo" className=' w-[44px] h-[44px] sm:w-[64px] sm:h-[64px] lg:w-[84px] lg:h-[84px]' />
                    <div className='mt-[30px] flex flex-col gap-[10px]'>
                        <h1 className='font-semibold text-[12px] text-center sm:text-[18px] lg:text-[20px]'>
                       {service.maintext}
                        </h1>
                        <p className='sm:text-[14px] text-[12px]  text-center '>
                       {service.text}
                        </p>
                    </div>

                </div>
               ) }

            </div>

        </section>
        </>
    )

    
}
export default CustomerService