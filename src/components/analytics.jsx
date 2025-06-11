

import image1 from "../assets/svg/analytics/Services.svg";
import image2 from "../assets/svg/analytics/Services2.svg";
import image3 from "../assets/svg/analytics/Services3.svg";
import image4 from "../assets/svg/analytics/Services4.svg";

function Analytics() {
  const AnalyticsArray = [
    {
      image: image1,
      maintext: "10.5k",
      text: "Sellers active on our site",
    },
    {
      image: image2,
      maintext: "33k",
      text: "Monthly Product Sale",
    },
    {
      image: image3,
      maintext: "45.5k",
      text: "Customers active on our site",
    },
    {
      image: image4,
      maintext: "25k",
      text: "Annual gross sale on our site",
    },
  ];

  return (
    <section className="w-full flex justify-center mb-[100px] lg:mb-[140px]">
      <div className="w-[85%] grid grid-cols-2 xl:flex xl:gap-[30px] gap-[30px]">
        {AnalyticsArray.map((item, index) => (
          <div
            key={index}
            className="group border border-slate-300 rounded-md p-[24px] xl:w-[270px] xl:h-[230px] flex flex-col items-center justify-center transition-all duration-300 hover:bg-red-500"
          >
            <img
              src={item.image}
              alt={`Analytics icon ${index + 1}`}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[60px] mb-[16px]"
            />
            <p className="font-bold text-[24px] sm:text-[32px] text-center group-hover:text-white">
              {item.maintext}
            </p>
            <p className="text-[12px] sm:text-[16px] text-center group-hover:text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Analytics;
