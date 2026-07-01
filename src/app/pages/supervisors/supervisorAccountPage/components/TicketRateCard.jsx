import { Icons } from "../../../../../assets/icons";
import DataChart from "../../../../shared/components/DataChart";

export default function TicketRateCard() {
  return (
    <div className="h-full grow flex flex-col px-2.5 py-2 gap-2.5 border border-border-theme rounded-3xl">
      <div className="flex flex-row justify-end items-center gap-2.5">
        <h2 className="">معدل التذاكر</h2>
        <Icons.Statistic />
      </div>
      <DataChart />
    </div>
  );
}
