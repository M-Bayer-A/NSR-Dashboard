import { useDispatch, useSelector } from "react-redux";
import { reportsSelectors } from "../application/state/reportsSelector";
import { getReportsTableUseCase } from "../application/useCases/getReportsTableUseCase";
import { setSearchTextField } from "../application/state/reportsSlice";
import { useEffect } from "react";
import PageLayout from "../../../layouts/pageLayout/PageLayout";
import SearchBar from "../../../shared/components/SearchBar";
import ReportsTable from "./components/ReportsTable";
import DeleteReportsPopup from "./components/DeleteReportsPopup";

export default function ReportsPage() {
  //
  const dispatch = useDispatch();
  //
  const isTableLoaded = useSelector(reportsSelectors.loaded.table);
  //
  const searchTextField = useSelector(reportsSelectors.search.textField);
  //
  const handleGetWorkersTable = () => {
    dispatch(getReportsTableUseCase());
  };
  const handleSetSearchTextField = (value) => {
    dispatch(setSearchTextField({ value }));
  };
  //
  useEffect(() => {
    if (!isTableLoaded) {
      handleGetWorkersTable();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTableLoaded]);
  //
  return (
    <PageLayout title={"التقارير المولدة"}>
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <SearchBar
          placeholder={"ابحث في التقارير"}
          value={searchTextField}
          onChange={handleSetSearchTextField}
          onSubmit={handleGetWorkersTable}
        />
        <ReportsTable />
      </div>
      <DeleteReportsPopup />
    </PageLayout>
  );
}
