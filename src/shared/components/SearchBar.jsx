import { Icons } from "../../assets/icons";
import SearchField from "./SearchField";
import TextButton from "./TextButton";
import TextIconButton from "./TextIconButton";

export default function SearchBar() {
  return (
    <div className="w-full flex flex-row justify-between gap-2">
      <SearchField className="w-65" placeholder="ابحث في الطلبات" />
      <div className="flex flex-row gap-3">
        <TextIconButton
          className={"bg-bg-secondary border-border-theme text-primary-accent"}
          title="فلترة"
          Icon={Icons.Bill}
        />
        <TextButton
          className={
            "w-31 border-none bg-primary-accent text-text-primary-inverse"
          }
          title="بحث"
        />
      </div>
    </div>
  );
}
