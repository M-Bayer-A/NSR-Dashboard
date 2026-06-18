import { Icons } from "../../../../assets/icons";
import CustomIconButton from "../../../shared/component/CustomIconButton";
import { useIsSideBarOpen } from "./SideBarProvider";

export default function SideBarHeader({ children }) {
  //
  const { isOpen, handleOpenSideBar } = useIsSideBarOpen();
  //
  return (
    <div className="w-full flex flex-row items-center p-4 gap-2">
      <CustomIconButton
        className={`size-11 shrink-0 border-transparent bg-bg-primary ${isOpen ? "rotate-0" : "rotate-180"}`}
        icon={Icons.Arrow}
        onClick={() => {
          handleOpenSideBar();
        }}
      />
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
