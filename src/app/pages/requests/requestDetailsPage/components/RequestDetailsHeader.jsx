import { Icons } from "../../../../../assets/icons";
import IconButton from "../../../../shared/components/IconButton";
import Tag from "../../../../shared/components/Tag";
import TextIconButton from "../../../../shared/components/TextIconButton";

export default function RequestDetailsHeader() {
  return (
    <div className="w-full flex flex-row justify-between gap-3">
      <TextIconButton
        title="تصدير"
        Icon={Icons.Reports}
        className={"bg-bg-secondary border-border-theme text-primary-accent"}
      />
      <div className="flex flex-row gap-6 items-center">
        <Tag status="Completed" />
        <p className="text-text-primary font-medium">#8512</p>
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
