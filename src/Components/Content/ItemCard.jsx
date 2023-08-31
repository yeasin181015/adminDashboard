import { useContext } from "react";
import { numericConverter } from "../../utils/incOrdec";
import ColorContext from "../../context/ColorContext";

const ItemCard = ({ item }) => {
  const { theme, setTheme } = useContext(ColorContext);

  return (
    <div
      className={`${
        theme ? "bg-white" : "bg-[#1C1C25]"
      } sm:col-span-1 flex flex-col space-y-7 rounded-xl p-6`}
    >
      <div className="grid grid-cols-4">
        <div className="col-span-2 flex flex-col space-y-5">
          <div className="flex space-x-2">
            <img src={item.logo} alt="" />
            <div>
              <h2
                className={`${
                  theme ? "text-black" : "text-white"
                } font-semibold`}
              >
                {item.title}
              </h2>
              <p className="text-[#626D7D] text-sm font-medium">
                {item.semi_title}
              </p>
            </div>
          </div>
          <h2
            className={`${
              theme ? "text-black" : "text-white"
            } font-semibold text-xl`}
          >
            {item.amount}
          </h2>
        </div>
        <div className="col-span-2 flex justify-start items-end">
          <img src={item.graph} alt="" width="100%" height="100%" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#626D7D] text-xs xl:text-sm font-medium">
          PIN Daily
        </p>
        <p
          className={`${
            numericConverter(item.change) >= 0
              ? "text-[#219653]"
              : "text-[#EB5757]"
          } text-xs xl:text-sm font-semibold leading-5`}
        >
          {item.change}
        </p>
        <p className="text-[#219653] text-xs font-semibold leading-5 px-2 py-1 rounded-full bg-customGreen">
          {item.percentage}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;


