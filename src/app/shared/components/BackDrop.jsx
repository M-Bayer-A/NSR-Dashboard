export default function BackDrop({
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
      className={`fixed inset-0 z-80 flex justify-center items-center
        bg-white/30 backdrop-blur-[1px] transition-opacity duration-300 ease-in-out
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {children}
    </div>
  );
}
