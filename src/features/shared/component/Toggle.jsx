import { motion } from "framer-motion";

export default function Toggle({
  className,
  value = true,
  onChange = () => {},
}) {
  return (
    <button
      className={`w-11 h-fit flex flex-row p-1 rounded-full
        transition duration-300 ease-in-out cursor-pointer
        ${value ? "justify-end bg-primary-accent" : "justify-start bg-gray-100"}
        ${className}`}
      onClick={onChange}
    >
      <motion.div
        className="size-5 rounded-full bg-white"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.2,
        }}
      />
    </button>
  );
}
