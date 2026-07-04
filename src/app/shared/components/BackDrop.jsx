export default function BackDrop({
  className,
  open = false,
  onClick = () => {},
  children,
}) {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClick();
        }
      }}
      className={`${className} fixed inset-0 flex justify-center items-center
        transition-opacity duration-300 ease-in-out
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {children}
    </div>
  );
}
