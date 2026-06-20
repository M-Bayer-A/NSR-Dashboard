import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "../../../assets/icons";

export default function DropDown({
  className,
  title = "select",
  options = [{ id: 1, name: "option_1" }],
  value = options[0].id,
  onChange = () => {},
}) {
  //
  const [open, setOpen] = useState(false);
  //
  const Icon = Icons.Arrow;
  const selected = options.find((opt) => opt.id == value);
  //
  return (
    <div className={`relative font-[Cairo] ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex flex-row items-center justify-between gap-2 px-3.5 py-1.5
          border border-border-theme rounded-lg focus:outline-none
          ${!selected ? "text-text-secondary" : "text-text-primary"}`}
      >
        {selected?.name || title}
        <Icon
          className={`size-6 transition-transform duration-500 ${
            open ? "rotate-270" : "rotate-90"
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className=" mt-2 w-full absolute bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10"
          >
            {options.map((opt) => (
              <li
                key={opt.id}
                onClick={() => {
                  onChange(opt.id);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-primary-accent hover:text-white transition-colors"
              >
                {opt.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
