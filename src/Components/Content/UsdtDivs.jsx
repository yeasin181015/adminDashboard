import { useContext } from "react";
import ItemCard from "./ItemCard";
import ColorContext from "../../context/ColorContext";
import { numericConverter } from "../../utils/incOrdec";

const items = [
  {
    logo: "/icons/eth.svg",
    title: "ETHUSDT",
    semi_title: "Ethereum",
    amount: "$23,738",
    change: "+$189.91",
    percentage: "+24.68%",
    graph: "/icons/eth_gr.svg",
  },
  {
    logo: "/icons/btc.svg",
    title: "SOLUUSDT",
    semi_title: "Solana",
    amount: "$23,738",
    change: "+$556.14",
    percentage: "+64.11%",
    graph: "/icons/solus_gr.svg",
  },
];

const btcusdt = {
  logo: "/icons/btc.svg",
  title: "BTCUSDT",
  semi_title: "Bitcoin",
  amount: "$23,738",
  change: "-$16.78",
  percentage: "+14.67%",
  graph: "/icons/btc_gr.svg",
};

const UsdtDivs = () => {
  const { theme, setTheme } = useContext(ColorContext);
  return (
    <div className="flex flex-col space-y-4 lgxl:space-y-0 lgxl:grid  lgxl:grid-cols-4 lgxl:gap-x-4">
      <div className="lgxl:col-span-2 grid grid-cols-2 gap-x-6 ">
        <div
          className={`${
            theme ? "bg-white" : "bg-[#1C1C25]"
          } col-span-1 flex flex-col space-y-5 rounded-lg p-6`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/icons/wallet.svg" alt="" />
              <h2
                className={`${
                  theme ? "text-black" : "text-white"
                } font-semibold`}
              >
                Estimated Balance
              </h2>
            </div>
            <img src="/icons/eye.svg" alt="" />
          </div>
          <h2
            className={`${
              theme ? "text-black" : "text-white"
            } font-semibold text-3xl`}
          >
            $123,987
          </h2>
          <div className="flex items-center justify-between space-x-2">
            <p className="text-[#626D7D] text-xs xl:text-sm font-medium">
              Monthly Profit
            </p>
            <p className="text-[#219653] text-xs xl:text-sm font-semibold leading-5">
              +$2560.78
            </p>
            <div className="rounded-full bg-customGreen">
              <p className="text-[#219653] text-xs px-2 py-1 font-semibold leading-5">
                +14.67%
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${
            theme ? "bg-white" : "bg-[#1C1C25]"
          } col-span-1 flex flex-col space-y-7 rounded-xl p-6`}
        >
          <div className="grid grid-cols-4">
            <div className="col-span-2 flex flex-col space-y-5">
              <div className="flex space-x-2">
                <img src="/icons/btc.svg" alt="" />
                <div>
                  <h2
                    className={`${
                      theme ? "text-black" : "text-white"
                    } font-semibold`}
                  >
                    BTCUSDT
                  </h2>
                  <p className="text-[#626D7D] text-sm font-medium">Bitcoin</p>
                </div>
              </div>
              <h2
                className={`${
                  theme ? "text-black" : "text-white"
                } font-semibold text-xl`}
              >
                $23,738
              </h2>
            </div>
            <div className="col-span-2 flex justify-start items-end">
              <img src="/icons/btc_gr.svg" alt="" width="100%" height="100%" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#626D7D] text-xs xl:text-sm font-medium">
              PIN Daily
            </p>
            <p
              className={`${
                numericConverter(btcusdt.change) >= 0
                  ? "text-[#219653]"
                  : "text-[#EB5757]"
              } text-xs xl:text-sm font-semibold leading-5`}
            >
              -$16.78
            </p>
            <p className="text-[#219653] text-xs font-semibold leading-5 px-2 py-1 rounded-full bg-customGreen">
              +14.67%
            </p>
          </div>
        </div>
      </div>

      <div className="lgxl:col-span-2 grid grid-cols-2 gap-x-6 ">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default UsdtDivs;
