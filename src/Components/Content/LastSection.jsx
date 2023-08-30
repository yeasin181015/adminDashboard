import Converter from "./Converter";
import History from "./Hisotry";
import PieChart from "./PieChart";

const LastSection = () => {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      <PieChart />
      <Converter />
      <History />
    </div>
  );
};

export default LastSection;
