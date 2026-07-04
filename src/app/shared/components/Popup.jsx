import { AppZIndex } from "../../../constants/zIndex";
import BackDrop from "./BackDrop";

export default function Popup({
  children,
  title = "",
  actions = <></>,
  open,
  onClose = () => {},
}) {
  return (
    <BackDrop
      className={`bg-white/30 backdrop-blur-[1px] ${AppZIndex.Popup}`}
      open={open}
      onClick={onClose}
    >
      <div
        className="min-w-full md:min-w-135 max-h-[90vh] flex flex-col p-6 gap-5  
        bg-bg-primary border border-border-theme rounded-3xl font-[Cairo] text-right"
      >
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="w-full h-fit max-h-full overflow-auto">{children}</div>
        {/* Action Buttons */}
        <div className="w-full flex flex-row justify-end items-center gap-2.5">
          {actions}
        </div>
        {/* ==Action Buttons== */}
      </div>
    </BackDrop>
  );
}
