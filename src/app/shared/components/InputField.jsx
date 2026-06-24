export default function InputField({
  className,
  dir = "rtl",
  disabled = false,
  error = { value: false, message: "" },
  header,
  type = "text",
  placeholder,
  value,
  onChange = (value) => {
    console.log(value);
  },
}) {
  return (
    <div
      dir={dir}
      className="flex flex-col gap-1 text-[14px] text-text-primary font-[Cairo] "
    >
      {header && <h1>{header}</h1>}
      <input
        disabled={disabled}
        type={type}
        placeholder={error.value ? error.message : placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`p-3 bg-bg-primary rounded-lg
          ${
            !error.value
              ? "border border-border-theme placeholder:text-text-secondary "
              : "border-0 ring-2 ring-red-600 placeholder:text-red-600"
          }
          focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary-accent
          disabled:bg-[#F1F5F9]
          transition duration-300 ease-in-out
        [&::-webkit-inner-spin-button]:appearance-none ${className}`}
      />
    </div>
  );
}
