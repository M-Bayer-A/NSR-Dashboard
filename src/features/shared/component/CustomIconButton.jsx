export default function CustomIconButton({
  className,
  icon,
  disabled = false,
  onClick,
}) {
  const Icon = icon;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border rounded-lg transition duration-300 flex items-center justify-center
      disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:shadow-none
      ${className}`}
    >
      {Icon && <Icon />}
    </button>
  );
}
// disabled:bg-zinc-500 disabled:text-white disabled:cursor-not-allowed
