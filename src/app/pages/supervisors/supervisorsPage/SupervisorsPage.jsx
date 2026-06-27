import PageLayout from "../../../layouts/pageLayout/PageLayout";
import BackDrop from "../../../shared/components/BackDrop";
import DataTable from "../../../shared/components/DateTable";
import SearchBar from "../../../shared/components/SearchBar";
import TextButton from "../../../shared/components/TextButton";

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
      <BackDrop />
    </PageLayout>
  );
}
