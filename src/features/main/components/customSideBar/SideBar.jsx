import { useIsSideBarOpen } from "./SideBarProvider";

export default function SideBar({ children, className }) {
  //
  const { isOpen } = useIsSideBarOpen();
  //
  return (
    <div
      className={`${className} 
        h-full w-fit flex flex-col shrink-0 overflow-auto overflow-x-hidden
        md:static fixed top-0 right-0 z-110
        transition-all duration-300 ease-in-out md:translate-x-0
        ${isOpen ? "md:w-70 translate-x-0" : "md:w-21 translate-x-100"}`}
    >
      {children}
    </div>
  );
}
