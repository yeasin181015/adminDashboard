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
      } w-[15%] flex justify-center`}
    >
      <div className="flex flex-col w-[75%] mt-8 space-y-16">
        <div className="flex items-center mt-4">
          <img src={`/icons/${theme ? "Logo" : "darkLogo"}.svg`} alt="" />
          <h2 className="text-xl leading-5">
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
                  className={`py-2 flex items-center justify-center rounded-lg cursor-pointer font-medium text-lg leading-5 ${
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
                  {item.icon &&
                    React.cloneElement(item.icon, {
                      selected: selectedTab === item.name,
                      theme,
                    })}
                  <span className={`${item.name === "Help" ? "ml-2" : ""}`}>
                    {item.name}
                  </span>
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
      {/* <style>
        {`
          .custom-border {
            --border-thickness: 0.3px;
            border-top: var(--border-thickness) solid #E8EAEC;
            border-opacity: 78
          }
        `}
      </style> */}
    </div>
  );
};

export default Sidebar;
