import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../../../../shared/components/DateTable";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";
import { setTableSelectedRowsIds } from "../../../application/states/supervisorsState/supervisorsSlice";
import { useNavigate } from "react-router-dom";
import TextButton from "../../../../../shared/components/TextButton";

export default function SupervisorsTable() {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  //   const isTableLoading = useSelector(loadingSelector.requests.isTableLoading);
  //   console.log("from the table " + isTableLoading);
  //
  const tableData = useSelector(supervisorsSelectors.table.data);
  const tableColumns = useSelector(supervisorsSelectors.table.columns);
  const selectedRowsIds = useSelector(
    supervisorsSelectors.table.selectedRowsIds,
  );
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
            // dispatch(acceptRequestUseCase());
          }}
        />
        <TextButton
          className={"p-2 border-none"}
          onClick={() => {
            // dispatch(rejectRequestUseCase());
          }}
        />
        <TextButton
          className={"p-2 border-none"}
          onClick={() => {
            navigate(`/requests/${row.id}`);
          }}
        />
      </div>
    ),
  }));
  //
  return (
    <DataTable
      className={"grow"}
      columns={columns}
      data={data}
      selectedIds={selectedRowsIds}
      setSelectedIds={(value) => {
        dispatch(setTableSelectedRowsIds({ value }));
      }}
    />
  );
}
