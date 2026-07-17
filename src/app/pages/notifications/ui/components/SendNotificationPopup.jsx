import { useDispatch, useSelector } from "react-redux";
import { notificationsSelectors } from "../../application/state/notificationsSelector";
import {
  setReceiverSendNotificationPopup,
  setReceiversIdsSendNotificationPopup,
  setsendNotificationPopupOpen,
  setTargetSendNotificationPopup,
  setTitleSendNotificationPopup,
} from "../../application/state/notificationsSlice";
import { sendNotificationUseCase } from "../../application/useCases/sendNotificationUseCase";
import TextButton from "../../../../shared/components/TextButton";
import SelectButton from "../../../../shared/components/SelectButton";
import InputField from "../../../../shared/components/InputField";
import Popup from "../../../../shared/components/Popup";
import DropDown from "../../../../shared/components/DropDown";
import DataTable from "../../../../shared/components/DateTable";
import { useEffect } from "react";
import { getReceiversTableUseCase } from "../../application/useCases/getReceiversTableUseCase";
import { loadingSelector } from "../../../../shared/states/loadingState/loadingSelector";
import SkeletonLoader from "../../../../shared/components/SkeletonLoader";

export default function SendNotificationPopup() {
  //
  const dispatch = useDispatch();
  //
  const isOpen = useSelector(
    notificationsSelectors.isOpen.sendNotificationPopup,
  );
  const isReceiversTableLoading = useSelector(
    loadingSelector.notifications.isReceiversTableLoading,
  );
  //
  const target = useSelector(
    notificationsSelectors.sendNotificationPopup.target,
  );
  const title = useSelector(notificationsSelectors.sendNotificationPopup.title);
  const message = useSelector(
    notificationsSelectors.sendNotificationPopup.message,
  );
  const receiver = useSelector(
    notificationsSelectors.sendNotificationPopup.receiver,
  );
  //
  const receiversTable = useSelector(
    notificationsSelectors.sendNotificationPopup.receiversTable,
  );
  const receiversIds = useSelector(
    notificationsSelectors.sendNotificationPopup.receiversIds,
  );
  //
  const handleClosePopup = () => {
    dispatch(setsendNotificationPopupOpen({ value: false }));
  };
  const handelSubmit = () => {
    dispatch(sendNotificationUseCase());
  };
  const handleSetTarget = (value) => {
    dispatch(setTargetSendNotificationPopup({ value }));
  };
  const handleSetTitle = (value) => {
    dispatch(setTitleSendNotificationPopup({ value }));
  };
  const handleSetMessage = (value) => {
    dispatch(setTargetSendNotificationPopup({ value }));
  };
  const handleSetReceiver = (value) => {
    dispatch(setReceiverSendNotificationPopup({ value }));
  };
  const handleSetReceiversIds = (value) => {
    dispatch(setReceiversIdsSendNotificationPopup({ value }));
  };
  //
  useEffect(() => {
    if (target != "all" && receiver != "all") {
      dispatch(getReceiversTableUseCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, receiver]);
  //
  return (
    <Popup
      open={isOpen}
      title="إنشاء حساب عامل صيانة"
      actions={
        <>
          <TextButton
            className={
              "min-w-31 bg-bg-secondary border-border-theme text-primary-accent font-bold"
            }
            title="إلغاء"
            onClick={handleClosePopup}
          />
          <TextButton
            className={
              "min-w-31 bg-primary-accent border-none text-text-primary-inverse font-bold"
            }
            title="إضافة عامل صيانة"
            onClick={handelSubmit}
          />
        </>
      }
    >
      <div className="flex flex-col gap-2.5">
        <div className="w-full flex justify-end">
          <SelectButton
            options={[
              { id: "workers", name: "عمال الصيانة" },
              { id: "supervisors", name: "المشرفين" },
              { id: "all", name: "الكل" },
            ]}
            value={target}
            onChange={handleSetTarget}
          />
        </div>
        <InputField
          className={"w-full"}
          header={"عنوان الإشعار"}
          value={title}
          onChange={handleSetTitle}
        />
        <InputField
          className={"w-full"}
          header={"محتوى الإشعار"}
          value={message}
          onChange={handleSetMessage}
        />
        <div
          className={`w-full flex flex-row items-center justify-between gap-2.5
            ${target == "all" ? "hidden" : ""}`}
        >
          <DropDown
            className={"min-w-35"}
            options={[
              { id: "all", name: "الكل" },
              { id: "some", name: "تحديد أشخاص" },
            ]}
            value={receiver}
            onChange={handleSetReceiver}
          />
          <p>المرسل إليه</p>
        </div>
        <SkeletonLoader isLoading={isReceiversTableLoading} className="h-50">
          <DataTable
            className={`min-h-50 ${target == "all" || receiver == "all" ? "hidden" : ""}`}
            columns={receiversTable.columns}
            data={receiversTable.data}
            selectedIds={receiversIds}
            setSelectedIds={handleSetReceiversIds}
          />
        </SkeletonLoader>
      </div>
    </Popup>
  );
}
