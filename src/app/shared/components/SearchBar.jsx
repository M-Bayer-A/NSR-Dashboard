import { Icons } from "../../../assets/icons";
import SearchField from "./SearchField";
import TextButton from "./TextButton";
import TextIconButton from "./TextIconButton";

export default function SearchBar({
  placeholder,
  value,
  onChange = () => {},
  onSubmit = () => {},
  openFilter = () => {},
}) {
  return (
    <div className="w-full flex flex-row justify-between gap-2">
      <SearchField
        className="w-65"
        placeholder={placeholder}
        value={value}
        onChange={(value) => {
          onChange(value);
        }}
      />
      <div className="flex flex-row gap-3">
        <TextIconButton
          className={
            "bg-bg-secondary border-border-theme text-primary-accent font-bold"
          }
          title="فلترة"
          Icon={Icons.Filter}
          onClick={openFilter}
        />
        <TextButton
          className={
            "w-31 border-none bg-primary-accent text-text-primary-inverse font-bold"
          }
          onClick={onSubmit}
          title="بحث"
        />
      </div>
    </div>
  );
}
