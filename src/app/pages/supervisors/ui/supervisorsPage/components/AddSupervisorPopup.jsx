import InputField from "../../../../../shared/components/InputField";
import Popup from "../../../../../shared/components/Popup";
import TextButton from "../../../../../shared/components/TextButton";
import DropDown from "../../../../../shared/components/DropDown";
import Toggle from "../../../../../shared/components/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";
import { setAddSupervisorPopupOpen } from "../../../application/states/supervisorsState/supervisorsSlice";

export default function AddSupervisorPopup() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(
    supervisorsSelectors.isOpen.addSupervisorPopup,
  );
  //
  return (
    <Popup
      open={isAddPopupOpen}
      title="إنشاء حساب مشرف"
      actions={
        <>
          <TextButton
            className={
              "w-31 bg-bg-secondary border-border-theme text-primary-accent"
            }
            title="إلغاء"
            onClick={() => {
              dispatch(setAddSupervisorPopupOpen({ value: false }));
            }}
          />
          <TextButton
            className={
              "w-31 bg-primary-accent border-none text-text-primary-inverse"
            }
            title="إضافة مشرف"
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
