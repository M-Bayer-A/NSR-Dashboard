import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../../../layouts/pageLayout/PageLayout";
import SearchBar from "../../../shared/components/SearchBar";
import TextButton from "../../../shared/components/TextButton";
import DeleteWorkerPopup from "./components/DeleteWorkerPopup";
import WorkersTable from "./components/WorkersTable";
import { useEffect } from "react";
import {
  setAddWorkerPopupOpen,
  setSearchTextField,
} from "../application/state/workersSlice";
import { getWorkersTableUseCase } from "../application/useCases/getWorkersTableUseCase";
import { getUnitOptionsUseCase } from "../application/useCases/getUnitOptionsUseCase";
import { workersSelectors } from "../application/state/workersSelector";
import AddWorkerPopup from "./components/AddWorkerPopup";
import EditWorkerPopup from "./components/EditWorkerPopup";

export default function WorkersPage() {
  //
  const dispatch = useDispatch();
  //
  const isTableLoaded = useSelector(workersSelectors.loaded.table);
  const isUnitOptionsLoaded = useSelector(workersSelectors.loaded.dropDowns);
  //
  const searchTextField = useSelector(workersSelectors.search.textField);
  //
  const handleOpenAddWorkerPopup = () => {
    dispatch(setAddWorkerPopupOpen({ value: true }));
  };
  const handleGetWorkersTable = () => {
    dispatch(getWorkersTableUseCase());
  };
  const handleGetUnitOptions = () => {
    dispatch(getUnitOptionsUseCase());
  };
  const handleSetSearchTextField = (value) => {
    dispatch(setSearchTextField({ value }));
  };
  //
  useEffect(() => {
    if (!isTableLoaded) {
      handleGetWorkersTable();
    }
    if (!isUnitOptionsLoaded) {
      handleGetUnitOptions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTableLoaded, isUnitOptionsLoaded]);
  //
  return (
    <PageLayout
      title={"عمال الصيانة"}
      action={
        <>
          <TextButton
            className={
              "border-none bg-primary-accent text-text-primary-inverse font-bold"
            }
            title="إضافة عامل صيانة"
            onClick={handleOpenAddWorkerPopup}
          />
        </>
      }
    >
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <SearchBar
          placeholder={"ابحث في العمال"}
          value={searchTextField}
          onChange={handleSetSearchTextField}
          onSubmit={handleGetWorkersTable}
        />
        <WorkersTable />
      </div>
      <AddWorkerPopup />
      <EditWorkerPopup />
      <DeleteWorkerPopup />
    </PageLayout>
  );
}
