import { useContext } from "react";
import ColorContext from "../../context/ColorContext";

const Converter = () => {
  const { theme, setTheme } = useContext(ColorContext);
  return (
    <div
      className={`${
        theme ? "bg-white " : "bg-[#1C1C25]"
      } col-span-1 rounded-2xl`}
    >
      <div className="p-6">
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
          <div className="rounded-lg bg-[#F9F9FA] w-80 h-12 text-[#626D7D] text-xs flex space-x-2 items-center px-4">
            <input
              type="text"
              className="rounded-lg bg-[#F9F9FA] h-[80%] w-[90%] focus:outline-none"
            />
            <div className="bg-[#C7E4DB] w-fit rounded-lg cursor-pointer">
              <div className="flex space-x-1 py-2 px-3">
                <span className="text-[#219653] font-medium text-xs">USDT</span>
                <img src="/icons/dropdown.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="rounded-lg bg-[#F9F9FA] w-80 h-12 text-[#626D7D] text-xs flex space-x-2 items-center px-4">
            <input
              type="text"
              className="rounded-lg bg-[#F9F9FA] h-[80%] w-[90%] focus:outline-none"
            />
            <div className="bg-[#FCF4DB] w-fit rounded-lg">
              <div className="flex space-x-1 py-2 px-3 cursor-pointer">
                <span className="text-[#FF7C04] font-medium text-xs">USDT</span>
                <img src="/icons/dropdown.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <button className="w-full leading-5 text-white font-medium bg-[#3380FF] py-4 rounded-lg">
            Convert Now
          </button>
        </div>
        <p className="text-[#626D7D] leading-4 text-[8px] w-[300px]">
          The ultimate price and output is determined by the amount of tokens in
          the pool at the time of your swap.
        </p>
      </div>
    </div>
  );
};

export default Converter;
