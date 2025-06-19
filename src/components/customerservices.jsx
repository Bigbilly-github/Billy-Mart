import services from "../assets/svg/customerservice/Services.svg";
import services1 from "../assets/svg/customerservice/Services1.svg";
import services2 from "../assets/svg/customerservice/Services2.svg";

function CustomerService() {
  const servicesArray = [
    {
      img: services,
      maintext: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      img: services1,
      maintext: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
    },
    {
      img: services2,
      maintext: "MONEY BACK GUARANTEE",
      text: "We return money within 30 days",
    },
  ];

  return (
    <section className="w-full flex justify-center py-[40px] bg-white">
      <div className="w-[95%] flex flex-wrap justify-center gap-[20px] lg:gap-[30px]">
        {servicesArray.map((service, index) => (
          <div
            key={index}
            className="w-[249px] sm:w-[349px] h-[181px] flex flex-col items-center justify-center text-center p-4 rounded-md transition duration-300 hover:bg-slate-100"
          >
            <img
              src={service.img}
              alt={`${service.maintext.toLowerCase()} icon`}
              className="w-[44px] h-[44px] sm:w-[64px] sm:h-[64px] lg:w-[84px] lg:h-[84px] mb-4"
            />
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-semibold text-[12px] sm:text-[18px] lg:text-[20px]">
                {service.maintext}
              </h1>
              <p className="text-[12px] sm:text-[14px]">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerService;
