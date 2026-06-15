import { createContext, useContext, useState } from "react";
//
const SideBarContext = createContext();
//
export default function SideBarProvider({ children, className }) {
  //
  const [isOpen, setopen] = useState(true);
  const handleOpenSideBar = () => {
    setopen(!isOpen);
  };
  //
  return (
    <SideBarContext.Provider value={{ isOpen, handleOpenSideBar }}>
      <div
        className={`${className} grow w-full flex flex-row-reverse overflow-hidden`}
      >
        {children}
      </div>
    </SideBarContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useIsSideBarOpen = () => useContext(SideBarContext);
