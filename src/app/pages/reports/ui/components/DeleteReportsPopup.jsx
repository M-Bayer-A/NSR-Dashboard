import { useDispatch, useSelector } from "react-redux";
import { reportsSelectors } from "../../application/state/reportsSelector";
import { deleteReportUseCase } from "../../application/useCases/deleteReportUseCase";
import { setDeleteReportPopupOpen } from "../../application/state/reportsSlice";
import Popup from "../../../../shared/components/Popup";
import TextButton from "../../../../shared/components/TextButton";

export default function DeleteReportsPopup() {
  //
  const dispatch = useDispatch();
  //
  const isDeletePopupOpen = useSelector(
    reportsSelectors.isOpen.deleteReportPopup,
  );
  //
  const handelSubmit = () => {
    dispatch(deleteReportUseCase());
  };
  const handleClose = () => {
    dispatch(setDeleteReportPopupOpen({ value: false }));
  };
  //
  return (
    <Popup
      open={isDeletePopupOpen}
      title="حذف التقرير"
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
      <p>سيتم حذف التقرير ونقله إلى التقارير المحذوفة هل أنت متأكد ؟</p>
    </Popup>
  );
}
