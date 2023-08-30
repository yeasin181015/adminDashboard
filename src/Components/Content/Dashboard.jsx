import { useContext } from "react";
import ColorContext from "../../context/ColorContext";
import ChartDiv from "./ChartDiv";
import LastSection from "./LastSection";
import UsdtDivs from "./UsdtDivs";

const Dashboard = () => {
  const { theme, setTheme } = useContext(ColorContext);
  return (
    <div
      className={`${
        theme == 1 ? "bg-[#F0F8FF]" : "bg-black"
      }  flex flex-col space-y-5 overflow-x-hidden p-6`}
    >
      <UsdtDivs />
      <ChartDiv />
      <LastSection />
    </div>
  );
};

export default Dashboard;
