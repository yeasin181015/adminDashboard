import { useContext } from "react";
import ItemCard from "./ItemCard";
import ColorContext from "../../context/ColorContext";

const items = [
  {
    logo: "/icons/btc.svg",
    title: "BTCUSDT",
    semi_title: "Bitcoin",
    amount: "$23,738",
    change: "-$16.78",
    percentage: "+14.67%",
    graph: "/icons/btc_gr.svg",
  },
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
    percentage: "+64.11%%",
    graph: "/icons/solus_gr.svg",
  },
];
const UsdtDivs = () => {
  const { theme, setTheme } = useContext(ColorContext);
  return (
    <div className="grid grid-cols-4 gap-x-8">
      <div
        className={`${
          theme ? "bg-white" : "bg-[#1C1C25]"
        } col-span-1 flex flex-col space-y-5 rounded-lg p-6`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/icons/wallet.svg" alt="" />
            <h2
              className={`${theme ? "text-black" : "text-white"} font-semibold`}
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
        <div className="flex items-center justify-between">
          <p className="text-[#626D7D] text-sm font-medium">Monthly Profit</p>
          <p className="text-[#219653] text-sm font-semibold leading-5">
            +$2560.78
          </p>
          <div className="rounded-full bg-customGreen">
            <p className="text-[#219653] text-xs px-2 py-1 font-semibold leading-5">
              +14.67%
            </p>
          </div>
        </div>
      </div>
      {items.map((item) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
};

export default UsdtDivs;
