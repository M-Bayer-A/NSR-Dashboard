export default function TextButton({
  className,
  title = "",
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
      className={`px-4 py-2.5 border rounded-lg font-[Cairo] text-[14px]
        transition duration-300 ease-in-out
        disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:shadow-none
        ${className} `}
    >
      <h1>{title}</h1>
    </button>
  );
}
