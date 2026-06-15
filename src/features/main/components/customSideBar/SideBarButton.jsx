import { useIsSideBarOpen } from "./SideBarProvider";

export default function SideBarButton({ active, icon, title, onClick }) {
  //
  const { isOpen } = useIsSideBarOpen();
  //
  const Icon = icon;
  //
  return (
    <button
      className={`w-full flex flex-row-reverse items-center px-3 py-2 gap-2.5 rounded-lg
        ${active ? "bg-[#397AFF]" : "bg-transparent"}`}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={`w-5 h-5 shrink-0 ${
            active ? "text-white" : "text-slate-500"
          }`}
        />
      )}

      <h1
        className={`
          text-lg text-right overflow-hidden truncate
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-full" : "w-0"}
          ${active ? "text-white font-bold" : "text-[#64748B] font-normal"}`}
      >
        {title}
      </h1>
    </button>
  );
}
