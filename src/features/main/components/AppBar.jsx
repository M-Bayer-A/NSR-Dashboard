import { Icons } from "../../../assets/icons";
import CustomIconButton from "../../shared/component/CustomIconButton";
import { useIsSideBarOpen } from "./customSideBar/SideBarProvider";

export default function AppBar({ title }) {
  //
  const { isOpen, handleOpenSideBar } = useIsSideBarOpen();
  //
  return (
    <div
      className="w-full flex flex-row-reverse items-center py-3 px-4 border-b border-[#DFDFDF]
          text-[20px] text-text-primary font-[Cairo] font-bold"
    >
      <CustomIconButton
        className={`size-10 shrink-0 border-transparent bg-bg-primary md:hidden 
          ${isOpen ? "rotate-0" : "rotate-180"}`}
        icon={Icons.Arrow}
        onClick={() => {
          handleOpenSideBar();
        }}
      />
      <h1>{title}</h1>
    </div>
  );
}
