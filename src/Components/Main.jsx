import { useContext } from "react";
import Dashboard from "./Content/Dashboard";
import HeaderNavbar from "./Content/HeaderNavbar";
import ColorContext from "../context/ColorContext";

const Main = () => {
  const { isSidebarVisible } = useContext(ColorContext);
  return (
    <div className={`${isSidebarVisible ? "blur" : ""} "w-full xs:w-[85%]"`}>
      <HeaderNavbar />
      <Dashboard />
    </div>
  );
};

export default Main;
