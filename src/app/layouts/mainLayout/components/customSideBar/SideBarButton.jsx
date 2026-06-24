import { useIsSideBarOpen } from "./SideBarProvider";

export default function SideBarButton({ active, icon, title, onClick }) {
  //
  const { isOpen } = useIsSideBarOpen();
  //
  const Icon = icon;
  //
  return (
    <button
      className={`w-full flex flex-row-reverse items-center px-3.5 py-2 gap-2.5 rounded-lg
        ${active ? "bg-primary-accent" : "bg-transparent"}`}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={`size-5 shrink-0 ${
            active ? "text-[#F8FAFC]" : "text-text-secondary"
          }`}
        />
      )}

      <h1
        className={`
          text-lg text-right overflow-hidden truncate
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-full" : "w-0"}
          ${active ? "text-[#F8FAFC] font-bold" : "text-text-secondary font-normal"}`}
      >
        {title}
      </h1>
    </button>
  );
}
