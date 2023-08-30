import { useContext } from "react";
import ColorContext from "../../context/ColorContext";
import { numericConverter } from "../../utils/incOrdec";

const History = () => {
  const { theme, setTheme } = useContext(ColorContext);
  const historyItems = [
    {
      title: "Deposit",
      amount: "+$23,738",
      time: "11:34 PM",
      status: "pending",
    },
    {
      title: "SANDUSDT",
      amount: "-$576",
      time: "06:01 AM",
      status: "done",
    },
    {
      title: "DOGEUSDT",
      amount: "+$3500",
      time: "02:10 AM",
      status: "done",
    },
    {
      title: "FTMUSDT",
      amount: "+$791",
      time: "06:45 PM",
      status: "done",
    },
  ];

  return (
    <div
      className={`${
        theme ? "bg-white " : "bg-[#1C1C25]"
      }   col-span-2 rounded-2xl`}
    >
      <div className="pr-6 pl-6 pt-6">
        <div className="flex justify-between items-center font-medium mb-8">
          <h2
            className={`${
              theme ? "text-black" : "text-white"
            } font-semibold text-xl leading-7`}
          >
            History
          </h2>
          <div className="border border-black border-opacity-10 rounded-md cursor-pointer">
            <p
              style={{ color: "rgba(0, 0, 0, 0.4)" }}
              className="text-xs p-2 font-semibold"
            >
              View All
            </p>
          </div>
        </div>
        <div>
          {historyItems.map((item, index) => (
            <>
              <div className="grid grid-cols-9 items-center gap-x-12 mb-4">
                <div className="col-span-1">
                  <img
                    src={
                      numericConverter(item.amount) >= 0
                        ? "/icons/downgreen.svg"
                        : "/icons/upred.svg"
                    }
                    alt=""
                  />
                </div>
                <div
                  className={`${
                    theme ? "text-black" : "text-white"
                  } col-span-2 font-semibold text-xs`}
                >
                  {item.title}
                </div>
                <div
                  className={`${
                    numericConverter(item.amount) >= 0
                      ? "text-[#219653]"
                      : "text-[#EB5757]"
                  } col-span-2 text-xs leading-5 font-semibold flex justify-end`}
                >
                  {item.amount}
                </div>
                <div
                  className={`${
                    theme ? "text-black" : "text-white"
                  } col-span-2 font-medium text-xs leading-5 text-center`}
                >
                  {item.time}
                </div>
                <div
                  className={`${
                    item.status === "pending"
                      ? "text-[#F2994A] bg-yellow-400 bg-opacity-20"
                      : "text-[#219653] bg-green-600 bg-opacity-20"
                  } col-span-2 text-xs leading-5 font-semibold text-center rounded-md`}
                >
                  <p className="p-2">{item.status}</p>
                </div>
              </div>
              {index < historyItems.length - 1 ? (
                <hr className="border-black border-opacity-10 mb-4" />
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
