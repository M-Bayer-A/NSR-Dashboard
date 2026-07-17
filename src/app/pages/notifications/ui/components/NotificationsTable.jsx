import { useDispatch, useSelector } from "react-redux";
import { notificationsSelectors } from "../../application/state/notificationsSelector";
import {
  setDeleteNotificationPopupOpen,
  setSentTableSelectedRowsIds,
  setSystemTableSelectedRowsIds,
} from "../../application/state/notificationsSlice";
import TextButton from "../../../../shared/components/TextButton";
import SkeletonLoader from "../../../../shared/components/SkeletonLoader";
import DataTable from "../../../../shared/components/DateTable";
import { loadingSelector } from "../../../../shared/states/loadingState/loadingSelector";

export default function NotificationsTable() {
  //
  const dispatch = useDispatch();
  //
  const isTableLoading = useSelector(
    loadingSelector.notifications.isTableLoading,
  );
  const currentTab = useSelector(notificationsSelectors.currentTab);
  //
  const tableData = useSelector(
    currentTab == "system"
      ? notificationsSelectors.systemNotifications.table.data
      : notificationsSelectors.sentNotifications.table.data,
  );
  const tableColumns = useSelector(
    currentTab == "system"
      ? notificationsSelectors.systemNotifications.table.columns
      : notificationsSelectors.sentNotifications.table.columns,
  );
  const selectedRowsIds = useSelector(
    currentTab == "system"
      ? notificationsSelectors.systemNotifications.table.selectedRowsIds
      : notificationsSelectors.sentNotifications.table.selectedRowsIds,
  );
  //
  const handleSetSelectedRowsIds = (value) => {
    if (currentTab == "system") {
      dispatch(setSystemTableSelectedRowsIds({ value }));
    } else {
      dispatch(setSentTableSelectedRowsIds({ value }));
    }
  };
  const handleOpenDeletePopup = (id) => {
    dispatch(setDeleteNotificationPopupOpen({ value: true, id: id }));
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

  const data = tableData.map((row) => {
    return currentTab == "system"
      ? {
          ...row,
          actions: (
            <div className="flex flex-row gap-2.5">
              <TextButton
                className={"bg-primary-accent text-text-primary-inverse"}
                title="تمييز كمقروءة"
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
        }
      : {
          ...row,
          actions: (
            <div className="flex flex-row gap-2.5">
              <TextButton
                className={"bg-red-100 text-red-500 border-none"}
                title="حذف"
                onClick={() => {
                  handleOpenDeletePopup(row.id);
                }}
              />
            </div>
          ),
        };
  });
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
