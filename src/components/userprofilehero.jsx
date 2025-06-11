
import { useState } from "react";
import groceries from "../assets/img/category/groceries.jpg";
import { useValueContext } from "../contexts/propscontext";

function UserProfileHero() {
  const { placedorders, products } = useValueContext();
  const [openIndexes, setOpenIndexes] = useState({});

  const GetTitle = (id) => {
    const match = products.find((product) => product.id === id);
    return match?.title || "Unknown Product";
  };

  const GetImage = (id) => {
     const match = products.find((product) => product.id === id);
    return match?.thumbnail; 
  };

  

  const toggleOrderVisibility = (orderIndex) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [orderIndex]: !prev[orderIndex],
    }));
  };

  return (
    <section className="w-full flex mt-[50px] h-auto justify-center">
      <div className="w-[90%] flex">
      
        <div className="sm:w-[20%] w-[25%] border-r border-slate-200">
          <h1 className="md:text-[24px] sm:text-[18px] text-[16px] cursor-pointer hover:underline transition-all duration-150">
            My Orders
          </h1>
        </div>

      
        <div className="w-[80%] flex flex-col">
          {placedorders.map((orders, orderGroupIndex) => (
            <div
              key={`order-group-${orderGroupIndex}`}
              className="mb-[30px] shadow-md cursor-pointer"
            >
              <h1
                onClick={() => toggleOrderVisibility(orderGroupIndex)}
                className="md:text-[36px] sm:text-[24px] text-[16px] text-slate-700 pl-[40px] font-semibold mb-[30px]"
              >
                Order {orderGroupIndex + 1}
              </h1>

              {orders.map((order, orderIndex) => (
                <div
                  key={`order-${orderIndex}`}
                  className={`border-b border-slate-100 px-[30px] ${
                    openIndexes[orderGroupIndex] ? "block" : "hidden"
                  } mb-[30px] pb-[30px]`}
                >
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={GetImage(order.id)}
                      alt="product"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="font-medium sm:text-[18px] text-[14px]">
                      {GetTitle(order.id)}
                    </p>
                  </div>

                  <div className="flex pl-[50px] lg:flex-row flex-col gap-[10px] lg:justify-between lg:items-center mt-[20px]">
                    <p className="text-slate-600 sm:text-[18px] text-[14px]">
                      Quantity: {order.quantity}
                    </p>
                    <p className="text-slate-600 sm:text-[18px] text-[14px]">
                      Price: ${order.price}
                    </p>
                    <p className="text-slate-600 sm:text-[18px] text-[14px]">
                      Delivery: ${order.delivery}
                    </p>
                    <p className="text-slate-600 font-semibold sm:text-[18px] text-[14px]">
                      Total: $
                      {(
                        Number(order.price) * Number(order.quantity)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserProfileHero;
