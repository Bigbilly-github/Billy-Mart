import phoneimage from "../assets/svg/contactus/icons-phone.svg";
import mailimage from "../assets/svg/contactus/icons-mail.svg";
import { useValueContext } from "../contexts/propscontext";

function ContactUsHero() {
  const { messages, setMessages } = useValueContext();
  const contactarray = [
    {
      image: phoneimage,
      text: "Call to us",
      text2: "We are available 24/7, 7 days a week.",
      text3: "Phone: +2349196034643",
    },
    {
      image: mailimage,
      text: "Write to us",
      text2: "Fill out our form and we will contact you.",
      text3: "Emails: yusufabiola555@gmail.com",
    },
  ];
  function GetMessage(formData, formElement) {
    const updated = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    setMessages((m) => [...m, updated]);
    localStorage.setItem("messages", JSON.stringify(messages));
    alert("Message saved succesfully");
    formElement.reset();
  }
  return (
    <>
      <section className="w-full h-auto  pb-[50px] pt-[50px] mt-[50px]  flex justify-center">
        <div className="w-[90%] flex md:flex-row flex-col  gap-[50px] items-center">
          <div className="md:w-[30%]  md:pl-[30px]  ">
            {contactarray.map((item, index) => (
              <div key={index} className="mb-[50px]">
                <div className=" flex gap-[10px] mb-[24px] items-center">
                  <img src={item.image} alt="phone icon" />
                  <p className="text-[16px] font-medium">{item.text}</p>
                </div>
                <p className="text-[14px] mb-[10px]">{item.text2}</p>
                <p className="text-[14px] pb-[30px] border-b border-slate-400">
                  {item.text3}
                </p>
              </div>
            ))}
          </div>
          <div className="flex-1  ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                GetMessage(formData, e.target);
              }}
              className="md:w-[100%]  flex flex-col  "
            >
              <div className="flex justify-between mb-[30px]">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="outline-0   bg-slate-100 w-[45%] p-[15px] rounded-[5px] "
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="outline-0  bg-slate-100  w-[45%] p-[15px] rounded-[5px]"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="block w-full mb-[50px] h-[200px] outline-0 p-[15px] flex-1 rounded-[5px] bg-slate-100"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button className="bg-[red] self-end hover:outline-2 hover:outline-offset-2 hover:outline-black    duration-150   w-[30%] rounded-[5px] text-[12px] sm:text-[16px] text-white font-medium  h-[40px] sm:h-[56px] mb-[20px]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactUsHero;
