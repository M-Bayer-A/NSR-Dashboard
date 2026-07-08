import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../../../../layouts/pageLayout/PageLayout";
import SearchBar from "../../../../shared/components/SearchBar";
import TextButton from "../../../../shared/components/TextButton";
import SupervisorsTable from "./components/SupervisorsTable";
import { supervisorsSelectors } from "../../application/states/supervisorsState/supervisorsSelector";
import AddSupervisorPopup from "./components/AddSupervisorPopup";

import {
  setAddSupervisorPopupOpen,
  setSearchTextField,
} from "../../application/states/supervisorsState/supervisorsSlice";
import DeleteSupervisorPopup from "./components/DeleteSupervisorPopup";
import EditSupervisorPopup from "./components/EditSupervisorPopup";
import { useEffect } from "react";
import { getSupervisorsTableUseCase } from "../../application/useCases/getSupervisorsTableUseCase";
import { getUnitOptionsUseCase } from "../../application/useCases/getUnitOptionsUseCase";

export default function SupervisorsPage() {
  //
  const dispatch = useDispatch();
  //
  const isTableLoaded = useSelector(supervisorsSelectors.loaded.table);
  const isUnitOptionsLoaded = useSelector(
    supervisorsSelectors.loaded.dropDowns,
  );

  const textField = useSelector(supervisorsSelectors.search.textField);
  //
  useEffect(() => {
    if (!isTableLoaded) {
      dispatch(getSupervisorsTableUseCase());
    }
    if (!isUnitOptionsLoaded) {
      dispatch(getUnitOptionsUseCase());
    }
  }, [dispatch, isTableLoaded, isUnitOptionsLoaded]);
  //
  return (
    <PageLayout
      title={"المشرفين"}
      action={
        <>
          <TextButton
            className={
              "border-none bg-primary-accent text-text-primary-inverse font-bold"
            }
            title="إضافة مشرف"
            onClick={() => {
              dispatch(setAddSupervisorPopupOpen({ value: true }));
            }}
          />
        </>
      }
    >
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <SearchBar
          placeholder={"ابحث في المشرفين"}
          value={textField}
          onChange={(value) => {
            dispatch(setSearchTextField({ value }));
          }}
          onSubmit={() => {
            dispatch(getSupervisorsTableUseCase());
          }}
        />
        <SupervisorsTable />
      </div>
      <AddSupervisorPopup />
      <DeleteSupervisorPopup />
      <EditSupervisorPopup />
    </PageLayout>
  );
}
