import { useIsSideBarOpen } from "./SideBarProvider";

export default function SideBarHeader({ children }) {
  //
  const { isOpen, handleOpenSideBar } = useIsSideBarOpen();
  //
  return (
    <div className="w-full flex flex-row justify-center items-center gap-2 p-4 border-b border-[#F8F8F8]">
      <button
        onClick={() => {
          handleOpenSideBar();
        }}
      >
        scsc
      </button>
      <div
        className={`overflow-hidden  
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-full opacity-100" : "w-0 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
