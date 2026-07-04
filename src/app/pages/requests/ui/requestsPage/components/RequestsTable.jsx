import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../../../../shared/components/DateTable";
import { requestsSelectors } from "../../../application/states/requestsState/requestsSelector";
import { setTableSelectedRowsIds } from "../../../application/states/requestsState/requestsSlice";
import IconButton from "../../../../../shared/components/IconButton";
import { Icons } from "../../../../../../assets/icons";
import SkeletonLoader from "../../../../../shared/components/SkeletonLoader";
import { acceptRequestUseCase } from "../../../application/useCases/AcceptRequestUseCase";
import { rejectRequestUseCase } from "../../../application/useCases/rejectRequestUseCase";
import { useNavigate } from "react-router-dom";

export default function RequestsTable() {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const isTableLoading = useSelector(requestsSelectors.loading.table);
  //
  const tableData = useSelector(requestsSelectors.table.data);
  const tableColumns = useSelector(requestsSelectors.table.columns);
  const selectedRowsIds = useSelector(requestsSelectors.table.selectedRowsIds);
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
      <div className="flex flex-row gap-2.5 text-primary-accent">
        <IconButton
          className={"p-2 border-none"}
          Icon={Icons.Accepted}
          onClick={() => {
            dispatch(acceptRequestUseCase());
          }}
        />
        <IconButton
          className={"p-2 border-none"}
          Icon={Icons.Rejected}
          onClick={() => {
            dispatch(rejectRequestUseCase());
          }}
        />
        <IconButton
          className={"p-2 border-none"}
          Icon={Icons.Eye}
          onClick={() => {
            navigate(`/requests/${row.id}`);
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
        setSelectedIds={(value) =>
          dispatch(setTableSelectedRowsIds({ value: value }))
        }
      />
    </SkeletonLoader>
  );
}
