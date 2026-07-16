import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../../../shared/components/DateTable";
import { workersSelectors } from "../../application/state/workersSelector";
import {
  setDeleteWorkerPopupOpen,
  setEditeWorkerPopupOpen,
  setTableSelectedRowsIds,
} from "../../application/state/workersSlice";
import TextButton from "../../../../shared/components/TextButton";
import SkeletonLoader from "../../../../shared/components/SkeletonLoader";
import { loadingSelector } from "../../../../shared/states/loadingState/loadingSelector";

export default function WorkersTable() {
  //
  const dispatch = useDispatch();
  //
  const isTableLoading = useSelector(loadingSelector.workers.isTableLoading);
  //
  const tableData = useSelector(workersSelectors.table.data);
  const tableColumns = useSelector(workersSelectors.table.columns);
  const selectedRowsIds = useSelector(workersSelectors.table.selectedRowsIds);
  //
  const handleSetSelectedRowsIds = (value) => {
    dispatch(setTableSelectedRowsIds({ value }));
  };
  const handleOpenEditPopup = (id) => {
    dispatch(setEditeWorkerPopupOpen({ value: true, id: id }));
  };
  const handleOpenDeletePopup = (id) => {
    dispatch(setDeleteWorkerPopupOpen({ value: true, id: id }));
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
            handleOpenEditPopup(row.id);
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
