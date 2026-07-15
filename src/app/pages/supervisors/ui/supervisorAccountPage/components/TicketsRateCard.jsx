import { useSelector } from "react-redux";
import { Icons } from "../../../../../../assets/icons";
import DataChart from "../../../../../shared/components/DataChart";
import { supervisorAccountSelector } from "../../../application/states/supervisorAccountState/supervisorAccountSelector";

export default function TicketsRateCard() {
  //
  const ticketRate = useSelector(supervisorAccountSelector.ticketRate);
  //
  return (
    <div className="h-full grow flex flex-col px-2.5 py-2 gap-2.5 border border-border-theme rounded-3xl">
      <div className="flex flex-row justify-end items-center gap-2.5">
        <h2 className="">معدل التذاكر</h2>
        <Icons.Statistic />
      </div>
      <DataChart data={ticketRate} />
    </div>
  );
}
