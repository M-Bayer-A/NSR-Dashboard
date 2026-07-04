import { useSelector } from "react-redux";
import { Icons } from "../../../../../../assets/icons";
import { requestDetailSelector } from "../../../application/states/requestDetailsState/requestDetailsSelector";
import Tag from "../../../../../shared/components/Tag";

export default function RequestInfoCard() {
  //
  const createDate = useSelector(requestDetailSelector.info.createDate);
  const lastUpdateDate = useSelector(requestDetailSelector.info.lastUpdateDate);
  const creator = useSelector(requestDetailSelector.info.creator);
  const worker = useSelector(requestDetailSelector.info.worker);
  const importance = useSelector(requestDetailSelector.info.importance);
  const type = useSelector(requestDetailSelector.info.type);
  const unit = useSelector(requestDetailSelector.info.unit);
  const floor = useSelector(requestDetailSelector.info.floor);
  const suite = useSelector(requestDetailSelector.info.suite);
  const room = useSelector(requestDetailSelector.info.room);
  //
  const info = [
    { icon: Icons.Calendar, label: ": تاريخ الإنشاء", value: createDate },
    {
      icon: Icons.Calendar,
      label: "تاريخ آخر تحديث :",
      value: lastUpdateDate,
    },
    { icon: Icons.User, label: ": منشئ الطلب", value: creator },
    {
      icon: Icons.MaintenanceWorker,
      label: ": عامل الصيانة المكلف",
      value: worker,
    },
    {
      icon: Icons.Info,
      label: ": الأولوية",
      value: <Tag status={importance} />,
    },
    { icon: Icons.Info, label: ": النوع", value: type },
    { icon: Icons.Building, label: ": المبنى", value: unit },
    { icon: Icons.Floor, label: ": الطابق", value: floor },
    { icon: Icons.Floor, label: ": الجناح", value: suite },
    { icon: Icons.Room, label: ": الغرفة", value: room },
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
