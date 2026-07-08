import { createContext, useContext, useState } from "react";
//
const SideBarContext = createContext();
//
export default function SideBarProvider({ children, className }) {
  //
  const [isOpen, setopen] = useState(false);
  const handleOpenSideBar = () => {
    setopen(!isOpen);
  };
  //
  return (
    <SideBarContext.Provider value={{ isOpen, handleOpenSideBar }}>
      <div
        className={`${className} w-screen h-screen flex flex-row-reverse overflow-hidden`}
      >
        {children}
      </div>
    </SideBarContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useIsSideBarOpen = () => useContext(SideBarContext);
