import { Icons } from "../assets/icons";

export const tagConfigs = {
  waitingForApprovement: {
    label: "تنتظر الموافقة",
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-100",
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
  // Category
  electricity: {
    label: "كهربائية",
    textColor: "text-text-primary",
    bgColor: "bg-bg-primary",
    icon: Icons.Electricity,
  },
  // Account Activation
  active: {
    label: "الحساب مفعل",
    textColor: "text-green-500",
    bgColor: "bg-green-100",
    icon: () => <div className="size-3 rounded-full bg-green-500" />,
  },
  notActive: {
    label: "الحساب غير مفعل",
    textColor: "text-red-500",
    bgColor: "bg-red-100",
    icon: () => <div className="size-3 rounded-full bg-red-500" />,
  },
};
