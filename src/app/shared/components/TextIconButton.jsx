export default function TextIconButton({
  className,
  title = "",
  Icon,
  disabled = false,
  iconFirst = false,
  onClick = () => {
    console.log("clicked");
  },
}) {
  //
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-fit flex ${iconFirst ? "flex-row" : "flex-row-reverse"} items-center gap-2.5 px-4 py-2.5 
        border rounded-lg font-bold font-[Cairo] text-[14px]
        transition duration-300 ease-in-out
        disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:shadow-none
        ${className} `}
    >
      <h1>{title}</h1>
      {Icon && <Icon />}
    </button>
  );
}
