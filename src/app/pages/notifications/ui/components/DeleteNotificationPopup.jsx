import { useDispatch, useSelector } from "react-redux";
import { notificationsSelectors } from "../../application/state/notificationsSelector";
import { deleteNotificationUseCase } from "../../application/useCases/deleteNotificationUseCase";
import { setDeleteNotificationPopupOpen } from "../../application/state/notificationsSlice";
import Popup from "../../../../shared/components/Popup";
import TextButton from "../../../../shared/components/TextButton";

export default function DeleteNotificationPopup() {
  //
  const dispatch = useDispatch();
  //
  const isDeletePopupOpen = useSelector(
    notificationsSelectors.isOpen.deleteNotificationPopup,
  );
  //
  const handelSubmit = () => {
    dispatch(deleteNotificationUseCase());
  };
  const handleClose = () => {
    dispatch(setDeleteNotificationPopupOpen({ value: false }));
  };
  //
  return (
    <Popup
      open={isDeletePopupOpen}
      title="حذف إشعار"
      actions={
        <>
          <TextButton
            className={
              "w-31 bg-bg-secondary border-border-theme text-primary-accent font-bold"
            }
            title="تراجع"
            onClick={handleClose}
          />
          <TextButton
            className={"w-31 bg-red-100 border-none text-red-500 font-bold"}
            title="أنا متأكد"
            onClick={handelSubmit}
          />
        </>
      }
    >
      <p>سيتم حذف الإشعار ونقله إلى الإشعارات المحذوفة هل أنت متأكد ؟</p>
    </Popup>
  );
}
