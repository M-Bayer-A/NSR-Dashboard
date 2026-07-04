import { Icons } from "../../../assets/icons";

const tagConfigs = {
  waitingForApprovement: {
    label: "تنتظر الموافقة",
    textColor: "text-yellow-100",
    bgColor: "bg-yellow-500",
    icon: Icons.Clock,
  },

  rejected: {
    label: "مرفوضة",
    textColor: "text-red-100",
    bgColor: "bg-red-500",
    icon: Icons.Rejected,
  },

  unFixable: {
    label: "لا يمكن حل المشكلة",
    textColor: "text-red-100",
    bgColor: "bg-red-500",
    icon: Icons.Rejected,
  },

  workingOn: {
    label: "جاري التنفيذ",
    textColor: "text-blue-100",
    bgColor: "bg-blue-500",
    icon: Icons.Sledgehammer,
  },

  completed: {
    label: "مكتملة",
    textColor: "text-green-100",
    bgColor: "bg-green-500",
    icon: Icons.Accepted,
  },

  canceled: {
    label: "ملغية",
    textColor: "text-gray-100",
    bgColor: "bg-gray-500",
    icon: Icons.Cancelled,
  },

  waitingForConfirmation: {
    label: "تنتظر التأكيد من المشرفة",
    textColor: "text-yellow-100",
    bgColor: "bg-yellow-500",
    icon: Icons.Clock,
  },
  // Importances
  normal: {
    label: "عادي",
    textColor: "text-gray-900",
    bgColor: "bg-bg-primary",
    icon: Icons.Flag,
  },
  medium: {
    label: "متوسط",
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-100",
    icon: Icons.Flag,
  },
  urgent: {
    label: "عاجل",
    textColor: "text-red-500",
    bgColor: "bg-red-100",
    icon: Icons.Flag,
  },
};
export default function Tag({ status = "completed", filled = true }) {
  const tagConfig = tagConfigs[status.toLowerCase()];

  if (!tagConfig) {
    const validStatuses = Object.keys(tagConfigs).join(", ");

    throw new Error(
      `[Tag] Invalid status "${status}". Valid statuses are: ${validStatuses}`,
    );
  }

  const Icon = tagConfig.icon;

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
