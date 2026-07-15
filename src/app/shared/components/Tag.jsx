import { Icons } from "../../../assets/icons";

export default function Tag({
  tagConfig = {
    label: "مكتملة",
    textColor: "text-green-100",
    bgColor: "bg-green-500",
    icon: Icons.Accepted,
  },
  filled = true,
}) {
  //
  const Icon = tagConfig.icon;
  //
  return (
    <div
      className={`flex flex-row items-center gap-1.5 rounded-xl px-3 py-1.5
        ${tagConfig.textColor} font-[Cairo]
        ${filled ? tagConfig.bgColor : ""}`}
    >
      <span>{tagConfig.label}</span>

      {Icon && <Icon className="" />}
    </div>
  );
}
