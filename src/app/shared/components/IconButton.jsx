export default function IconButton({
  className,
  Icon,
  disabled = false,
  onClick = () => {
    console.log("clicked");
  },
}) {
  //
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`p-1 border rounded-lg font-bold font-[Cairo] text-[14px]
        transition duration-300 ease-in-out
        disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:shadow-none
        ${className} `}
    >
      {Icon && <Icon className="size-full" />}
    </button>
  );
}
