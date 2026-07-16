import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../../shared/components/Popup";
import TextButton from "../../../../shared/components/TextButton";
import { workersSelectors } from "../../application/state/workersSelector";
import { deleteWorkerUseCase } from "../../application/useCases/deleteWorkerUseCase";
import { setDeleteWorkerPopupOpen } from "../../application/state/workersSlice";

export default function DeleteWorkerPopup() {
  //
  const dispatch = useDispatch();
  //
  const isDeletePopupOpen = useSelector(
    workersSelectors.isOpen.deleteWorkerPopup,
  );
  //
  const handelSubmit = () => {
    dispatch(deleteWorkerUseCase());
  };
  const handleClose = () => {
    dispatch(setDeleteWorkerPopupOpen({ value: false }));
  };
  //
  return (
    <Popup
      open={isDeletePopupOpen}
      title="حذف حساب عامل الصيانة"
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
