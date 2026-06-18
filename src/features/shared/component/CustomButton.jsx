export default function CustomTextIconButton({
  className,
  children,
  disabled = false,
  onClick = () => {},
}) {
  //
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-1.5 border rounded-lg transition duration-300 ease-in-out
      disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:shadow-none
      ${className} `}
    >
      {children}
    </button>
  );
}
// disabled:bg-zinc-500 disabled:text-white disabled:cursor-not-allowed
