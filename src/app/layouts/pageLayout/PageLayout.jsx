import { Icons } from "../../../assets/icons";
import IconButton from "../../shared/components/IconButton";
import { useIsSideBarOpen } from "../mainLayout/components/customSideBar/SideBarProvider";

export default function PageLayout({ children, title }) {
  //
  const { isOpen, handleOpenSideBar } = useIsSideBarOpen();
  //
  return (
    <div className="w-full h-full flex flex-col">
      {/* AppBar */}
      <div
        className="w-full flex flex-row-reverse items-center py-3 px-4 border-b border-[#DFDFDF]
                text-[20px] text-text-primary font-[Cairo] font-bold"
      >
        <IconButton
          className={`shrink-0 border-transparent bg-bg-primary md:hidden 
                ${isOpen ? "rotate-0" : "rotate-180"}`}
          Icon={Icons.ArrowRight}
          onClick={() => {
            handleOpenSideBar();
          }}
        />
        <h1>{title}</h1>
      </div>
      {/* ==AppBar== */}
      <div className="w-full grow overflow-auto">{children}</div>
    </div>
  );
}
