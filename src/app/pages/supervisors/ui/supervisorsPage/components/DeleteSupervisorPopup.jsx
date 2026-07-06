import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../../../shared/components/Popup";
import TextButton from "../../../../shared/components/TextButton";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";
import { setDeleteSupervisorPopupOpen } from "../../../application/states/supervisorsState/supervisorsSlice";

export default function DeleteSupervisorPopup() {
  //
  const dispatch = useDispatch();
  //
  const isDeletePopupOpen = useSelector(
    supervisorsSelectors.isOpen.deleteSupervisorPopup,
  );
  //
  return (
    <Popup
      open={isDeletePopupOpen}
      title="حذف حساب مشرف"
      actions={
        <>
          <TextButton
            className={
              "w-31 bg-bg-secondary border-border-theme text-primary-accent"
            }
            title="تراجع"
            onClick={() => {
              dispatch(setDeleteSupervisorPopupOpen({ value: false }));
            }}
          />
          <TextButton
            className={"w-31 bg-red-100 border-none text-red-500"}
            title="أنا متأكد"
          />
        </>
      }
    >
      <p>سيتم حذف الحساب ونقله إلى الحسابات المحذوفة هل أنت متأكد ؟</p>
    </Popup>
  );
}
