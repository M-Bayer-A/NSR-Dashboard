import DataTable from "../../../shared/components/DateTable";
import ReuestsSearchHeader from "./components/ReuestsSearchHeader";

export default function RequestsPage() {
  return (
    <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
      <ReuestsSearchHeader />
      <DataTable />
    </div>
  );
}
