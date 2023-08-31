import React, { useContext, useState } from "react";
import DashboardIcon from "../icons/dashboardIcon";
import MarketsIcon from "../icons/marketsIcon";
import TransactionIcon from "../icons/transactionsIcon";
import ProfileIcon from "../icons/profileIcon";
import SettingIcon from "../icons/settingIcon";
import HelpIcon from "../icons/helpIcon";
import LogOutIcon from "../icons/logOut";
import ColorContext from "../context/ColorContext";

const Sidebar = () => {
  const tabs = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Markets",
      icon: <MarketsIcon />,
    },
    {
      name: "Transactions",
      icon: <TransactionIcon />,
    },
    {
      name: "Profile",
      icon: <ProfileIcon />,
    },
    {
      name: "Setting",
      icon: <SettingIcon />,
    },
    {
      name: "Help",
      icon: <HelpIcon />,
    },
    {
      name: "Log Out",
      icon: <LogOutIcon />,
    },
  ];

  const { theme, setTheme } = useContext(ColorContext);
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const handleClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div
      className={`${
        theme ? "bg-white" : "bg-[#1C1C25]"
      }  hidden xs:w-[15%] xs:flex xs:justify-center`}
    >
      <div className="flex flex-col w-[75%] mt-8 space-y-16">
        <div className="flex flex-wrap items-center justify-center space-y-2 mt-4">
          <img src={`/icons/${theme ? "Logo" : "darkLogo"}.svg`} alt="" />
          <h2 className="hidden sm:block text-lg md:text-xl leading-5">
            <span className="ml-2 text-[#2F80ED] font-semibold">Blue</span>
            <span
              className={`${
                theme ? "text-black" : "text-white"
              } font-extrabold`}
            >
              Trade.
            </span>
          </h2>
        </div>
        <div>
          <div className="flex flex-col gap-y-5 mb-4">
            {tabs.map((item) => (
              <>
                <div
                  className={`p-2 flex items-center justify-center rounded-lg cursor-pointer font-medium text-xs md:text-sm lg:text-md xl:text-lg leading-5 ${
                    selectedTab === item.name && theme
                      ? "bg-[#D5E6FB] text-[#0060FF]"
                      : selectedTab === item.name && !theme
                      ? "bg-[#062141] text-[#0060FF]"
                      : theme
                      ? "text-black"
                      : "text-white"
                  }`}
                  onClick={() => handleClick(item.name)}
                >
                  <div className="block md:hidden lg:block">
                    {" "}
                    {item.icon &&
                      React.cloneElement(item.icon, {
                        selected: selectedTab === item.name,
                        theme,
                      })}
                  </div>
                  <div className="hidden md:block">
                    <span className={`${item.name === "Help" ? "ml-2" : ""}`}>
                      {item.name}
                    </span>
                  </div>
                </div>
                {item.name === "Setting" && theme && (
                  <hr
                    className="mt-4 mb-4"
                    style={{
                      borderTop: "0.3px solid rgba(232, 234, 236, 0.78)",
                    }}
                  />
                )}
                {item.name === "Setting" && !theme && (
                  <hr
                    className="mt-4 mb-4"
                    style={{
                      borderTop: "0.3px solid rgba(255, 255, 255, 0.04)",
                    }}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
