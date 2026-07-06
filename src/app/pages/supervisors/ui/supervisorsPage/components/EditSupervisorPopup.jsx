import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../../../shared/components/Popup";
import DropDown from "../../../../shared/components/DropDown";
import InputField from "../../../../shared/components/InputField";
import TextButton from "../../../../shared/components/TextButton";
import Toggle from "../../../../shared/components/Toggle";
import { setEditeSupervisorPopupOpen } from "../../../application/states/supervisorsState/supervisorsSlice";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";

export default function EditSupervisorPopup() {
  //
  const dispatch = useDispatch();
  //
  const isEditPopupOpen = useSelector(
    supervisorsSelectors.isOpen.editSupervisorPopup,
  );
  //
  return (
    <Popup
      open={isEditPopupOpen}
      title="تعديل حساب مشرف"
      actions={
        <>
          <TextButton
            className={
              "w-31 bg-bg-secondary border-border-theme text-primary-accent"
            }
            title="إلغاء"
            onClick={() => {
              dispatch(setEditeSupervisorPopupOpen({ value: false }));
            }}
          />
          <TextButton
            className={
              "w-31 bg-primary-accent border-none text-text-primary-inverse"
            }
            title="حفظ التعديلات"
          />
        </>
      }
    >
      <div className="flex flex-col gap-2.5">
        <InputField className={"w-full"} header={"الاسم"} />
        <InputField className={"w-full"} header={"رقم الهاتف"} />
        <div className="w-full flex flex-row justify-end items-center gap-2.5">
          <DropDown title="الوحدة" />
          <p>الوحدة المسؤول عنها</p>
        </div>
        <div className="w-full flex flex-col items-end gap-2.5">
          <p>حالة الحساب</p>
          <div className="w-full flex flex-row justify-end items-center gap-2.5">
            <span>مفعل</span>
            <Toggle />
          </div>
        </div>
      </div>
    </Popup>
  );
}
