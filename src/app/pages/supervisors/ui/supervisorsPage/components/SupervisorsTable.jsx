import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../../../../shared/components/DateTable";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";
import {
  setDeleteSupervisorPopupOpen,
  setEditeSupervisorPopupOpen,
  setTableSelectedRowsIds,
} from "../../../application/states/supervisorsState/supervisorsSlice";
import TextButton from "../../../../../shared/components/TextButton";
import { loadingSelector } from "../../../../../shared/states/loadingState/loadingSelector";
import SkeletonLoader from "../../../../../shared/components/SkeletonLoader";
import { useNavigate } from "react-router-dom";

export default function SupervisorsTable() {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const isTableLoading = useSelector(
    loadingSelector.supervisors.isTableLoading,
  );
  console.log("from the table " + isTableLoading);
  //
  const tableData = useSelector(supervisorsSelectors.table.data);
  const tableColumns = useSelector(supervisorsSelectors.table.columns);
  const selectedRowsIds = useSelector(
    supervisorsSelectors.table.selectedRowsIds,
  );
  //
  const handleOpenEditPopup = (id) => {
    dispatch(setEditeSupervisorPopupOpen({ value: true, id: id }));
  };
  const handleOpenDeletePopup = (id) => {
    dispatch(setDeleteSupervisorPopupOpen({ value: true, id: id }));
  };
  const handleNavigateToSupervisorProfile = (id) => {
    navigate(`/supervisors/${id}`);
  };
  //
  const columns = [
    ...tableColumns,
    {
      accessorKey: "actions",
      header: "الإجراءات",
      isVisible: true,
    },
  ];

  const data = tableData.map((row) => ({
    ...row,
    actions: (
      <div className="flex flex-row gap-2.5">
        <TextButton
          className={"bg-primary-accent text-text-primary-inverse"}
          title="عرض"
          onClick={() => {
            handleNavigateToSupervisorProfile(row.id);
          }}
        />
        <TextButton
          className={"bg-primary-accent text-text-primary-inverse"}
          title="تعديل"
          onClick={() => {
            handleOpenEditPopup(row.id);
          }}
        />
        <TextButton
          className={"bg-primary-accent text-text-primary-inverse"}
          title="إعادة تعيين كلمة سر"
          onClick={() => {
            // dispatch(acceptRequestUseCase());
          }}
        />{" "}
        <TextButton
          className={"bg-red-100 text-red-500 border-none"}
          title="حذف"
          onClick={() => {
            handleOpenDeletePopup(row.id);
          }}
        />
      </div>
    ),
  }));
  //
  return (
    <SkeletonLoader isLoading={isTableLoading} className="grow">
      <DataTable
        className={"grow"}
        columns={columns}
        data={data}
        selectedIds={selectedRowsIds}
        setSelectedIds={(value) => {
          dispatch(setTableSelectedRowsIds({ value }));
        }}
      />
    </SkeletonLoader>
  );
}
