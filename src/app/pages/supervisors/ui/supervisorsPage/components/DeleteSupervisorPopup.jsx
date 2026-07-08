import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../../../shared/components/Popup";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";
import { setDeleteSupervisorPopupOpen } from "../../../application/states/supervisorsState/supervisorsSlice";
import TextButton from "../../../../../shared/components/TextButton";
import { deleteSupervisorUseCase } from "../../../application/useCases/deleteSupervisorUseCase";

export default function DeleteSupervisorPopup() {
  //
  const dispatch = useDispatch();
  //
  const isDeletePopupOpen = useSelector(
    supervisorsSelectors.isOpen.deleteSupervisorPopup,
  );
  //
  const handelSubmit = () => {
    dispatch(deleteSupervisorUseCase());
  };
  const handleClose = () => {
    dispatch(setDeleteSupervisorPopupOpen({ value: false }));
  };
  //
  return (
    <Popup
      open={isDeletePopupOpen}
      title="حذف حساب مشرف"
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
      <p>سيتم حذف الحساب ونقله إلى الحسابات المحذوفة هل أنت متأكد ؟</p>
    </Popup>
  );
}
