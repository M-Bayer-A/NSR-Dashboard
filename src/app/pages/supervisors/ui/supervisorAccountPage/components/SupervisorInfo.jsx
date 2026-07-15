import { useSelector } from "react-redux";
import { Icons } from "../../../../../../assets/icons";
import { tagConfigs } from "../../../../../../constants/tagConfigs";
import Tag from "../../../../../shared/components/Tag";
import { supervisorAccountSelector } from "../../../application/states/supervisorAccountState/supervisorAccountSelector";

export default function SupervisorInfo() {
  //
  const name = useSelector(supervisorAccountSelector.supervisorInfo.name);
  const phoneNumber = useSelector(
    supervisorAccountSelector.supervisorInfo.phoneNumber,
  );
  const unit = useSelector(supervisorAccountSelector.supervisorInfo.unit);
  const createDate = useSelector(
    supervisorAccountSelector.supervisorInfo.createDate,
  );
  const isAccountActive = useSelector(
    supervisorAccountSelector.supervisorInfo.isAccountActive,
  );
  const currentTickets = useSelector(
    supervisorAccountSelector.supervisorInfo.currentTickets,
  );
  const ticketsWatingConfirm = useSelector(
    supervisorAccountSelector.supervisorInfo.ticketsWatingConfirm,
  );
  //
  return (
    <div
      className="w-full flex flex-col items-center px-3 py-6 gap-4
    border border-border-theme rounded-2xl font-[Cairo]"
    >
      <div className="size-16 flex justify-center items-center bg-blue-100 text-blue-500 rounded-full overflow-hidden">
        <p>مبا</p>
      </div>
      <div className="flex flex-row justify-center gap-2.5">
        <p>{phoneNumber}</p>
        <p>{name}</p>
      </div>
      <p className="text-text-secondary text-[14px]">
        {unit} .{createDate}
      </p>
      <div className="flex flex-row gap-2.5">
        <Tag
          tagConfig={{
            label: `${ticketsWatingConfirm} ينتظر تأكيدها`,
            icon: Icons.Danger,
            textColor: "text-yellow-500",
            bgColor: "bg-yellow-100",
          }}
        />
        <Tag
          tagConfig={{
            label: `${currentTickets} تذاكر مفتوحة`,
            icon: Icons.Ticket,
            textColor: "text-yellow-500",
            bgColor: "bg-yellow-100",
          }}
        />
        <Tag tagConfig={{ ...tagConfigs["active"], label: "نشط اليوم" }} />
        <Tag tagConfig={tagConfigs[isAccountActive ? "active" : "notActive"]} />
      </div>
    </div>
  );
}
