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
      className={`${className} flex flex-row items-center px-3 py-2 gap-2 rounded-xl border border-[#E2E8F0] focus-within:border-[#397AFF]`}
    >
      <input
        dir="rtl"
        placeholder={placeholder}
        className={`w-full focus:outline-none text-black placeholder:text-[#64748B]`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {Icon && <Icon className={`text-[#397AFF] shrink-0`} />}
    </div>
  );
}
