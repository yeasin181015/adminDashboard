import { useContext, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { chartData } from "../../utils/dataChart";
import { numericConverter, percetageToValue } from "../../utils/incOrdec";
import ColorContext from "../../context/ColorContext";

const marketItems = [
  {
    title: "BTCUSDT",
    semi_title: "Bitcoin",
    amount: "$23,495",
    increment: "+23.4%",
  },
  {
    title: "AXSUSDT",
    semi_title: "Axie Infinity",
    amount: "$15.9",
    increment: "-7.8%",
  },
  {
    title: "ETHUSDT",
    semi_title: "Ethereum",
    amount: "$15,978",
    increment: "-0.3%",
  },
  {
    title: "SOLUSDT",
    semi_title: "Solana",
    amount: "$495",
    increment: "+11.1%",
  },
  {
    title: "BNBUSDT",
    semi_title: "Bnance",
    amount: "$267",
    increment: "+6.7%",
  },
  {
    title: "ADAUSDT",
    semi_title: "Cardana",
    amount: "$0.49",
    increment: "-1.4%",
  },
];

const filterTabs = ["All", "Metaverse", "Gaming", "Defi", "NFT"];
const timeFilter = ["1H", "3H", "5H", "1D", "1W", "1M"];

const ChartDiv = () => {
  const { theme, setTheme } = useContext(ColorContext);
  const [select, setSelect] = useState("All");
  const [time, setTime] = useState("1H");
  const series = [
    {
      data: chartData,
    },
  ];
  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#C0D9FD",
          downward: "#3380FF",
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex">
      <div className="w-[65%]">
        <div
          className={`${
            theme ? "bg-white" : "bg-[#1C1C25]"
          } grid grid-rows-5  rounded-2xl p-8`}
        >
          <div className="row-span-1 flex justify-between items-start">
            <div className="flex justify-center items-center ">
              <div
                className={`${
                  theme
                    ? "bg-opacity-50 bg-gray-100"
                    : "bg-[#121212] bg-opacity-50"
                } flex space-x-24 p-4 rounded-xl`}
              >
                <div>
                  <h2
                    className={`${
                      theme ? "text-black" : "text-white"
                    } font-semibold text-xl`}
                  >
                    BTCUSDT
                  </h2>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(98, 109, 125, 1)" }}
                  >
                    Bitcoin
                  </p>
                </div>
                <div>
                  <p
                    className={`${
                      theme ? "text-black" : "text-white"
                    } font-semibold text-xl`}
                  >
                    $23,738
                  </p>
                  <div className="rounded-full bg-customGreen w-16 h-7 flex justify-center items-center">
                    <p className="text-[#219653] text-xs font-semibold">
                      +23.6%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-3">
              {timeFilter.map((item) => (
                <div
                  onClick={() => setTime(item)}
                  className={`${
                    item === time
                      ? "text-[#0060FF]"
                      : theme
                      ? "text-black"
                      : "text-white"
                  } font-meidum text-xs rounded-lg px-4 leading-6 cursor-pointer ${
                    theme ? "bg-[#F8F8F9]" : "bg-[#131313]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="row-span-4">
            <ReactApexChart
              options={options}
              series={series}
              type="candlestick"
              height="90%"
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          theme ? "bg-white" : "bg-[#1C1C25]"
        } w-[35%] flex-col space-y-8  ml-4 rounded-2xl pr-8 pl-8 pt-8`}
      >
        <div className="flex items-center space-x-3 text-xs font-medium">
          <h2
            className={`${
              theme ? "text-black" : "text-white"
            } font-semibold text-xl leading-7 mr-4`}
          >
            Markets
          </h2>
          {filterTabs.map((item) => (
            <p
              onClick={() => setSelect(item)}
              className={`${
                item === select
                  ? "bg-customBlue text-[#0060FF]"
                  : "bg-[#F8F8F9]"
              } text-xs font-semibold rounded-lg px-4 leading-6 cursor-pointer`}
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          {marketItems.map((item, index) => (
            <div key={index} className="grid grid-cols-4 mb-6">
              <div>
                <h2
                  className={`${
                    theme ? "text-black" : "text-white"
                  } font-semibold text-xs leading-7`}
                >
                  {item.title}
                </h2>
              </div>
              <div>
                <p className="text-[#5E6E78] font-semibold text-xs leading-5">
                  {item.semi_title}
                </p>
              </div>
              <div>
                <p
                  className={`${
                    theme ? "text-black" : "text-white"
                  } text-center text-xs font-medium leading-5`}
                >
                  {item.amount}
                </p>
              </div>
              <div className="flex justify-end">
                <div
                  className={`${
                    percetageToValue(item.increment) > 0
                      ? "text-[#219653] bg-customGreen"
                      : "text-[#EB5757] bg-customRed"
                  } w-[50%] rounded-full flex justify-center items-center`}
                >
                  <p className="text-xs font-semibold leading-5">
                    {item.increment}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end items-center font-medium">
            <div
              className={`border ${
                theme ? "border-black" : "border-white"
              } border-opacity-20 rounded-md cursor-pointer`}
            >
              <p
                className={`${
                  theme ? "text-black" : "text-white"
                } text-opacity-40 text-xs p-2`}
              >
                View All
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartDiv;
