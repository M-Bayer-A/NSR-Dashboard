import { Icons } from "../../../assets/icons";

export default function SearchField({
  className,
  placeholder = "",
  value,
  onChange = (value) => {
    console.log(value);
  },
}) {
  //
  const Icon = Icons.Search;
  //
  return (
    <div
      className={`${className} flex flex-row items-center px-3 py-2 gap-2 rounded-xl border border-border-theme focus-within:border-primary-accent`}
    >
      <input
        dir="rtl"
        placeholder={placeholder}
        className={`w-full focus:outline-none font-[Cairo] text-text-primary placeholder:text-text-secondary`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {Icon && <Icon className={`text-primary-accent shrink-0`} />}
    </div>
  );
}
