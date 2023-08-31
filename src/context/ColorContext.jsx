import { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(1);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <ColorContext.Provider
      value={{
        theme,
        setTheme,
        isSidebarVisible,
        setSidebarVisible,
        toggleSidebar,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
