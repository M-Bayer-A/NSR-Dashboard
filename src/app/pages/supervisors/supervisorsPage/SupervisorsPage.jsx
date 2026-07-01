import PageLayout from "../../../layouts/pageLayout/PageLayout";
import DataTable from "../../../shared/components/DateTable";
import SearchBar from "../../../shared/components/SearchBar";
import TextButton from "../../../shared/components/TextButton";
// import AddSupervisorPopup from "./components/AddSupervisorPopup";
// import DeleteSupervisorPopup from "./components/DeleteSupervisorPopup";
// import EditSupervisorPopup from "./components/EditSupervisorPopup";

export default function SupervisorsPage() {
  return (
    <PageLayout
      title={"المشرفين"}
      action={
        <>
          <TextButton
            className={
              "border-none bg-primary-accent text-text-primary-inverse"
            }
            title="إضافة مشرف"
          />
        </>
      }
    >
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <SearchBar />
        <DataTable className={"grow"} />
      </div>
      {/* <AddSupervisorPopup /> */}
      {/* <DeleteSupervisorPopup /> */}
      {/* <EditSupervisorPopup /> */}
    </PageLayout>
  );
}
