import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../../../layouts/pageLayout/PageLayout";
import SearchBar from "../../../shared/components/SearchBar";
import TextButton from "../../../shared/components/TextButton";
import { notificationsSelectors } from "../application/state/notificationsSelector";
import {
  setCurrentTab,
  setsendNotificationPopupOpen,
  setSentSearchTextField,
  setSystemSearchTextField,
} from "../application/state/notificationsSlice";
import { getSystemNotificationsTableUseCase } from "../application/useCases/getSystemNotificationsTableUseCase";
import { getSentNotificationsTableUseCase } from "../application/useCases/getSentNotificationsTableUseCase";
import { useEffect } from "react";
import NotificationsTable from "./components/NotificationsTable";
import DeleteNotificationPopup from "./components/DeleteNotificationPopup";
import SelectButton from "../../../shared/components/SelectButton";
import SendNotificationPopup from "./components/SendNotificationPopup";

export default function NotificationsPage() {
  //
  const dispatch = useDispatch();
  //
  const currentTab = useSelector(notificationsSelectors.currentTab);

  const isSystemNotificationsTable = useSelector(
    notificationsSelectors.loaded.systemNotificationsTable,
  );
  const isSentNotificationsTable = useSelector(
    notificationsSelectors.loaded.sentNotificationsTable,
  );
  //
  const searchTextField = useSelector(
    currentTab == "system"
      ? notificationsSelectors.systemNotifications.search.textField
      : notificationsSelectors.sentNotifications.search.textField,
  );
  //
  const handleSetCurrentTab = (value) => {
    dispatch(setCurrentTab({ value }));
  };
  const handleSetSearchTextField = (value) => {
    if (currentTab == "system") {
      dispatch(setSystemSearchTextField({ value }));
    } else {
      dispatch(setSentSearchTextField({ value }));
    }
  };
  const handleOpenSendNotificationPopup = () => {
    dispatch(setsendNotificationPopupOpen({ value: true }));
  };
  const handleGetSystemNotificationsTable = () => {
    dispatch(getSystemNotificationsTableUseCase());
  };
  const handleGetSentNotificationsTable = () => {
    dispatch(getSentNotificationsTableUseCase());
  };
  const handleSubmitSearch = () => {
    if (currentTab == "system") {
      handleGetSystemNotificationsTable();
    } else {
      handleGetSentNotificationsTable();
    }
  };
  //
  useEffect(() => {
    if (!isSystemNotificationsTable) {
      handleGetSystemNotificationsTable();
    }
    if (!isSentNotificationsTable) {
      handleGetSentNotificationsTable();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSystemNotificationsTable, isSentNotificationsTable]);
  //
  return (
    <PageLayout
      title={"الإشعارات"}
      action={
        <>
          <TextButton
            className={
              "border-none bg-primary-accent text-text-primary-inverse font-bold"
            }
            title="إرسال إشعار"
            onClick={handleOpenSendNotificationPopup}
          />
        </>
      }
    >
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <div className="w-full flex justify-end">
          <SelectButton
            options={[
              { id: "system", name: "إشعارات النظام" },
              { id: "sent", name: "الإشعارات المرسلة" },
            ]}
            value={currentTab}
            onChange={handleSetCurrentTab}
          />
        </div>
        <SearchBar
          placeholder={"ابحث في الإشعارات"}
          value={searchTextField}
          onChange={handleSetSearchTextField}
          onSubmit={handleSubmitSearch}
        />
        <NotificationsTable />
      </div>
      <SendNotificationPopup />
      <DeleteNotificationPopup />
    </PageLayout>
  );
}
