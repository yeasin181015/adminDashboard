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
      show: true,
      position: "bottom",
      labels: {
        colors: ["#155AB6", "#00C4DF", "#B1D3FF", "#3380FF"],
        useSeriesColors: true,
      },
      fontSize: "12px",
      markers: {
        width: 10,
        height: 10,
        radius: 0,
        strokeWidth: 10,
        strokeColor: "#fff",
        fillColors: ["#155AB6", "#00C4DF", "#B1D3FF", "#3380FF"],
      },
    },
    responsive: [
      {
        breakpoint: 786,
        options: {
          chart: {
            width: 300,
          },
        },
      },
      {
        breakpoint: 1320,
        options: {
          chart: {
            width: 350,
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            width: 375,
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
      <div className="p-7 h-full flex flex-col">
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
        <div className="flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
