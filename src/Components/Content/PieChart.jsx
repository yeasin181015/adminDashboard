import { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import ColorContext from "../../context/ColorContext";

const PieChart = () => {
  const { theme, setTheme } = useContext(ColorContext);
  const series = [5, 10, 15, 70];
  const options = {
    labels: ["BTC", "ETH", "ADA", "Others"],
    chart: {
      type: "donut",
    },
    colors: ["#155AB6", "#00C4DF", "#B1D3FF", "#3380FF"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        stroke: "none",
        strokeWidth: 0,
      },
    },
    legend: {
      position: "bottom", // Place legend below the chart
      markers: {
        fillColors: ["#155AB6", "#00C4DF", "#B1D3FF", "#3380FF"],
      },
      itemMargin: {
        horizontal: 10, // Adjust margin between legend items
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };
  return (
    <div
      className={`${
        theme ? "bg-white" : "bg-[#1C1C25]"
      } col-span-2 rounded-2xl`}
    >
      <div className="p-7 h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <h2
            className={`${
              theme ? "text-black" : "text-white"
            } font-semibold text-xl leading-7`}
          >
            Assets
          </h2>
          <div className="border rounded-md border-gray-500 border-opacity-10 cursor-pointer">
            <img src="/icons/dots.svg" className="p-3 rounded-md" alt="" />
          </div>
        </div>
        <div>
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
