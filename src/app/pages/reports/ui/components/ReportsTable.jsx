import { useDispatch, useSelector } from "react-redux";
import { loadingSelector } from "../../../../shared/states/loadingState/loadingSelector";
import { reportsSelectors } from "../../application/state/reportsSelector";
import {
  setDeleteReportPopupOpen,
  setTableSelectedRowsIds,
} from "../../application/state/reportsSlice";
import TextButton from "../../../../shared/components/TextButton";
import SkeletonLoader from "../../../../shared/components/SkeletonLoader";
import DataTable from "../../../../shared/components/DateTable";

export default function ReportsTable() {
  //
  const dispatch = useDispatch();
  //
  const isTableLoading = useSelector(loadingSelector.reports.isTableLoading);
  //
  const tableData = useSelector(reportsSelectors.table.data);
  const tableColumns = useSelector(reportsSelectors.table.columns);
  const selectedRowsIds = useSelector(reportsSelectors.table.selectedRowsIds);
  //
  const handleSetSelectedRowsIds = (value) => {
    dispatch(setTableSelectedRowsIds({ value }));
  };
  const handleOpenDeletePopup = (id) => {
    dispatch(setDeleteReportPopupOpen({ value: true, id: id }));
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
          title="تعديل"
          onClick={() => {
            // handleOpenEditPopup(row.id);
          }}
        />
        <TextButton
          className={"bg-primary-accent text-text-primary-inverse"}
          title="إعادة تعيين كلمة سر"
          onClick={() => {
            // dispatch(acceptRequestUseCase());
          }}
        />
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
        setSelectedIds={handleSetSelectedRowsIds}
      />
    </SkeletonLoader>
  );
}
