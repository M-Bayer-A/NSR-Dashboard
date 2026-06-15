import { useIsSideBarOpen } from "./SideBarProvider";

export default function SideBarButton({
  className,
  active,
  icon,
  title,
  onClick,
}) {
  //
  const { isOpen } = useIsSideBarOpen();
  //
  const Icon = icon;
  //
  return (
    <button
      className={`w-full flex flex-row-reverse items-center rounded-lg
        transition-all duration-300 ease-in-out
        ${active ? "bg-[#397AFF]" : "bg-transparent"}
        ${isOpen ? "w-full gap-2" : "w-fit gap-0"}
        ${className}`}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={`size-5 shrink-0 ${active ? "text-white" : "text-slate-500 "} `}
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
