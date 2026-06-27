import { Icons } from "../../../assets/icons";
import IconButton from "../../shared/components/IconButton";
import { useIsSideBarOpen } from "../mainLayout/components/customSideBar/SideBarProvider";

export default function PageLayout({ children, title, action = <></> }) {
  //
  const { isOpen, handleOpenSideBar } = useIsSideBarOpen();
  //
  return (
    <div className="w-full h-full flex flex-col">
      {/* AppBar */}
      <div className="w-full flex flex-row-reverse justify-between items-center py-3 px-4 gap-2.5 border-b border-bord">
        <div className="w-fit flex flex-row items-center gap-1">
          <IconButton
            className={`shrink-0 border-transparent bg-bg-primary md:hidden 
                ${isOpen ? "rotate-0" : "rotate-180"}`}
            Icon={Icons.ArrowRight}
            onClick={() => {
              handleOpenSideBar();
            }}
          />
          <h1 className="text-[20px] text-text-primary font-[Cairo] font-bold">
            {title}
          </h1>
        </div>
        <div className="w-fit flex flex-row items-center gap-1">{action}</div>
      </div>
      {/* ==AppBar== */}
      <div className="w-full grow overflow-auto">{children}</div>
    </div>
  );
}
