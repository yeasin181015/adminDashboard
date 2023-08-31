import { useContext, useState } from "react";
import ColorContext from "../../context/ColorContext";

const Converter = () => {
  const { theme, setTheme } = useContext(ColorContext);
  const [convFrom, setConvFrom] = useState("USDT");
  const [convTo, setConvTo] = useState("BTC");
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const currencyList = ["BTC", "USDT", "AXS", "ETH", "SOLUS", "BNB", "ADA"];
  return (
    <div
      className={`${
        theme ? "bg-white " : "bg-[#1C1C25]"
      } col-span-2 rounded-2xl`}
    >
      <div className="p-7">
        <div className="flex justify-between items-center mb-8">
          <h2
            className={`${
              theme ? "text-black" : "text-white"
            } font-semibold text-xl leading-7`}
          >
            Convert
          </h2>
          <div className="border rounded-md border-gray-500 border-opacity-10 cursor-pointer">
            <img src="/icons/dots.svg" className="p-3 rounded-md" alt="" />
          </div>
        </div>
        <div className="mb-4">
          <div className="rounded-lg bg-[#F9F9FA] w-full h-12 text-[#626D7D] text-xs flex space-x-2 items-center px-4">
            <input
              type="number"
              className="rounded-lg bg-[#F9F9FA] h-[80%] w-[90%] focus:outline-none"
            />
            <div
              className="relative bg-[#C7E4DB] w-fit flex-col justify-center rounded-lg cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            >
              <div className="flex space-x-1 py-2 px-3">
                <span className="text-[#219653] font-medium text-xs">
                  {convFrom}
                </span>
                <img src="/icons/dropdown.svg" alt="" />
              </div>
              {dropDown && (
                <div className="dropdown-menu absolute bg-white mt-1 p-2 rounded w-20">
                  <ul>
                    {currencyList.map((item) => (
                      <li
                        className="hover:bg-[#d7e9e3] rounded text-xs"
                        onClick={() => setConvFrom(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="rounded-lg bg-[#F9F9FA] w-full h-12 text-[#626D7D] text-xs flex space-x-2 items-center px-4">
            <input
              type="number"
              className="rounded-lg bg-[#F9F9FA] h-[80%] w-[90%] focus:outline-none"
            />
            <div
              className="relative bg-[#FCF4DB] w-fit flex-col justify-center rounded-lg cursor-pointer"
              onClick={() => setDropDown2(!dropDown2)}
            >
              <div className="flex space-x-1 py-2 px-3">
                <span className="text-[#FF7C04] font-medium text-xs">
                  {convTo}
                </span>
                <img src="/icons/dropdown.svg" alt="" />
              </div>
              {dropDown2 && (
                <div className="dropdown-menu absolute bg-white mt-1 p-2 rounded w-20">
                  <ul>
                    {currencyList.map((item) => (
                      <li
                        className="hover:bg-[#ecb887] rounded text-xs"
                        onClick={() => setConvTo(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <button className="w-full leading-5 text-white font-medium bg-[#3380FF] py-4 rounded-lg">
            Convert Now
          </button>
        </div>
        <div>
          <p className="text-[#626D7D] leading-4 text-[8px]">
            The ultimate price and output is determined by the amount of tokens
            in the pool at the time of your swap.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Converter;
