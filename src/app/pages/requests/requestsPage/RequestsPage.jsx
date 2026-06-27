import PageLayout from "../../../layouts/pageLayout/PageLayout";
import DataTable from "../../../shared/components/DateTable";
import ReuestsSearchHeader from "./components/ReuestsSearchHeader";

export default function RequestsPage() {
  return (
    <PageLayout title={"الطلبات"}>
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <ReuestsSearchHeader />
        <DataTable className={"grow"} />
      </div>
    </PageLayout>
  );
}
