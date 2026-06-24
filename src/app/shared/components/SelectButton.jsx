export default function SelectButton({
  className,
  options = [
    { id: 1, name: "option_1" },
    { id: 2, name: "option_2" },
  ],
  value = options[0].id,
  onChange = (id) => {
    console.log(id);
  },
}) {
  //
  return (
    <div
      className={`w-fit flex flex-row justify-between gap-1 p-2
        bg-primary-accent rounded-full font-[Cairo] text-[16px]
        transition duration-300 ease-in-out
        ${className} `}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`rounded-full px-1.5 py-1 cursor-pointer
            ${opt.id == value ? "bg-amber-50 text-primary-accent" : "bg-transparent text-text-primary-inverse"}`}
        >
          {opt.name}
        </button>
      ))}
    </div>
  );
}
