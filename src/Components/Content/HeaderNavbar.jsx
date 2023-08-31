import { useContext } from "react";
import ColorContext from "../../context/ColorContext";

const HeaderNavbar = () => {
  const { theme, setTheme } = useContext(ColorContext);

  return (
    <div className={`${theme ? "bg-white" : "bg-[#1C1C25]"}`}>
      <div className="flex justify-center xs:justify-end md:justify-between items-center p-4">
        <div className="w-[40%] hidden md:block">
          <div
            className={` px-6 border border-[#C4CACD] ${
              theme ? "border-opacity-40" : "border-opacity-10"
            }  rounded-full h-12  text-sm flex align-items`}
          >
            <input
              placeholder="Search..."
              className="bg-transparent border-none h-[100%] w-full ml-2 focus:outline-none text-[#626D7D] text-opacity-40"
            />
            <img
              src="/icons/search.svg"
              className="ml-2"
              alt=""
              width={18}
              height={18}
            />
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden xs:flex xs:items-center xs:space-x-2">
            <label className={`${!theme ? "text-white" : "text-black"} mb-1`}>
              theme
            </label>
            <label class="mt-4 relative inline-flex items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                checked={theme}
                onChange={() => setTheme(!theme)}
                class="sr-only peer"
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div>
            <img src="/icons/notification.svg" width={26} height={28} alt="" />
          </div>
          <div className={`${theme ? "bg-[#F2F8FF]" : "bg-black"} rounded-xl`}>
            <div className="flex items-center space-x-3 p-2">
              <div className="flex justify-center items-center">
                <img
                  src="/icons/profileIcon.svg"
                  className="max-w-full h-auto"
                  alt=""
                />
              </div>
              <div>
                <h2
                  className={`${
                    theme ? "text-[#1F1F1F]" : "text-[#E0E0E0]"
                  } font-semibold text-sm leading-5`}
                >
                  Andy Warhol
                </h2>
                <p className="text-xs text-[#5E6E78] font-medium leading-5">
                  andywarhol@mail.com
                </p>
              </div>
              <img
                src="/icons/dots.svg"
                alt=""
                className="cursor-pointer transofrm rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
