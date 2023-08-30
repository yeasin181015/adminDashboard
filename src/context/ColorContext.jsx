import { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(1);
  return (
    <ColorContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
