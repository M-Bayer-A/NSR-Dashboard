import { Icons } from "../../../../../../assets/icons";
import IconButton from "../../../../../shared/components/IconButton";
import TextIconButton from "../../../../../shared/components/TextIconButton";
import DropDown from "../../../../../shared/components/DropDown";

export default function SupervisorAccountHeader() {
  return (
    <div className="w-full h-10 flex flex-row justify-between gap-3">
      <div className="h-full flex flex-row gap-2.5">
        <TextIconButton
          title="تصدير"
          Icon={Icons.Reports}
          className={
            "h-full bg-bg-secondary border-border-theme text-primary-accent"
          }
        />
        <DropDown className={"h-full"} />
      </div>
      <div className="flex flex-row gap-6 items-center">
        <p className="text-text-primary font-[Cairo] font-medium">#8512</p>
        <div className="flex flex-row gap-1">
          <IconButton
            Icon={Icons.ArrowLeft}
            className={
              "bg-bg-secondary border-border-theme text-primary-accent"
            }
          />
          <IconButton
            Icon={Icons.ArrowRight}
            className={
              "bg-bg-secondary border-border-theme text-primary-accent"
            }
          />
        </div>
      </div>
    </div>
  );
}
