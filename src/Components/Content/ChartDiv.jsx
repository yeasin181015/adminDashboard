import { useContext, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { chartData } from "../../utils/dataChart";
import { numericConverter, percetageToValue } from "../../utils/incOrdec";
import ColorContext from "../../context/ColorContext";
import DropDownIcon from "../../icons/dropDown";

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
    <div className="flex flex-col space-y-4 lgxl:space-y-0 lgxl:flex-row">
      <div className="w-full lgxl:w-[65%]">
        <div
          className={`${
            theme ? "bg-white" : "bg-[#1C1C25]"
          } grid grid-rows-5 rounded-2xl p-8`}
        >
          <div className="row-span-1 flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start">
            <div className="flex justify-center items-center">
              <div
                className={`${
                  theme
                    ? "bg-opacity-50 bg-gray-100"
                    : "bg-[#121212] bg-opacity-50"
                } flex space-x-12 sm:space-x-24 p-4 rounded-xl`}
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
                <div className="flex items-center space-x-2">
                  <div>
                    <p
                      className={`${
                        theme ? "text-black" : "text-white"
                      } font-semibold text-lg`}
                    >
                      $23,738
                    </p>
                    <div className="rounded-full bg-customGreen w-16 h-7 flex justify-center items-center">
                      <p className="text-[#219653] text-xs font-semibold">
                        +23.6%
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <DropDownIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-3 space-y-1">
              {timeFilter.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setTime(item)}
                  className={`${
                    item === time
                      ? "text-[#0060FF]"
                      : theme
                      ? "text-black"
                      : "text-white"
                  } font-meidum text-xs rounded-lg px-4 leading-6 cursor-pointer ${
                    theme ? "bg-[#F8F8F9]" : "bg-[#131313]"
                  } ${index === 0 ? "ml-3" : ""}`}
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
        } w-full lgxl:w-[35%] flex-col space-y-8  lgxl:ml-4 rounded-2xl p-8 lgxl:pr-8 lgxl:pl-8 lgxl:pt-8 lgxl:pb-0`}
      >
        <div className="flex flex-col space-y-3 xs:space-y-0 xs:flex-row xs:items-center xs:justify-between text-xs font-medium">
          <div>
            <h2
              className={`${
                theme ? "text-black" : "text-white"
              } font-semibold text-xl leading-7 mr-4`}
            >
              Markets
            </h2>
          </div>
          <div className="flex flex-wrap gap-y-2 xl:gap-x-4">
            {filterTabs.map((item) => (
              <div className="text-center">
                <p
                  onClick={() => setSelect(item)}
                  className={`${
                    item === select
                      ? "bg-customBlue text-[#0060FF]"
                      : "bg-[#F8F8F9]"
                  } text-xs px-3 font-semibold rounded-lg leading-6 cursor-pointer`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          {marketItems.map((item, index) => (
            <div key={index} className="grid grid-cols-4 mb-6 items-center">
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
                  } w-[90%] sm:w-[80%] md:w-[40%] lgxl:w-[70%] rounded-full flex justify-center items-center`}
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
