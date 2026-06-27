import { Icons } from "../../../../../assets/icons";
import Tag from "../../../../shared/components/Tag";

export default function RequestInfoCard() {
  //
  const info = [
    { icon: Icons.Calendar, label: ": تاريخ الإنشاء", value: "سؤسؤسؤ" },
    {
      icon: Icons.Calendar,
      label: "تاريخ آخر تحديث :",
      value: <Tag status="completed" />,
    },
    { icon: Icons.User, label: ": منشئ الطلب", value: "" },
    {
      icon: Icons.MaintenanceWorker,
      label: ": عامل الصيانة المكلف",
      value: "",
    },
    { icon: Icons.Info, label: ": الأولوية", value: "" },
    { icon: Icons.Info, label: ": النوع", value: "" },
    { icon: Icons.Building, label: ": المبنى", value: "" },
    { icon: Icons.Floor, label: ": الطابق", value: "" },
    { icon: Icons.Floor, label: ": الجناح", value: "" },
    { icon: Icons.Room, label: ": الغرفة", value: "" },
  ];
  //
  return (
    <div
      className="flex flex-col gap-2.5 p-3
        border border-border-theme rounded-3xl"
    >
      <div className="flex flex-row-reverse items-center gap-2.5">
        <Icons.Info />
        <span className="text-[16px] font-bold">معلومات الطلب</span>
      </div>
      <div className="flex flex-col gap-6">
        {info.map((i) => (
          <div
            key={i.label}
            className="flex flex-row-reverse justify-between items-center gap-2.5"
          >
            <div className="flex flex-row items-center gap-1 text-text-secondary">
              <span className="">{i.label}</span>
              {i.icon && <i.icon />}
            </div>
            <span>{i.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
