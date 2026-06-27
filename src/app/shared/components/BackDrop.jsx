// export default function BackDrop() {
//   return (
//     <div className="bg-black opacity-50 fixed inset-0 z-100 h-screen w-screen"></div>
//   );
// }
export default function BackDrop({ open, onClick, className = "", children }) {
  if (!open) return null;

  return (
    <div
      className={`
        fixed inset-0
        z-80
        bg-white/50
        backdrop-blur-[2px]
        flex items-center justify-center
        transition-opacity duration-300
        ${className}
      `}
      onClick={onClick}
    >
      <div className="size-50 bg-amber-400"></div>
      {children}
    </div>
  );
}
