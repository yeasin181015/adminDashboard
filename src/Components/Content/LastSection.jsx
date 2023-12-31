import Converter from "./Converter";
import History from "./Hisotry";
import PieChart from "./PieChart";

const LastSection = () => {
  return (
    <div className="flex flex-col space-y-6 lgxl:space-y-0 lgxl:grid lgxl:grid-cols-7 lgxl:gap-x-6">
      <div className="lgxl:col-span-4 flex flex-col space-y-4 sm:space-y-4 sm:grid sm:grid-cols-4 sm:gap-x-6">
        <PieChart />
        <Converter />
      </div>
      <History />
    </div>
  );
};

export default LastSection;
