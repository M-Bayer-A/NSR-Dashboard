import { useIsSideBarOpen } from "./SideBarProvider";

export default function MainContent({ children, className }) {
  //
  const { isOpen, handleOpenSideBar } = useIsSideBarOpen();
  //
  return (
    <div className={`${className} h-full grow`}>
      {children}
      <div
        onClick={handleOpenSideBar}
        className={`fixed inset-0 bg-black/50 z-100 transition-opacity duration-300 ease-in-out md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
    </div>
  );
}
