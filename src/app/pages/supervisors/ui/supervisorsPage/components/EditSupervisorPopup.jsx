import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../../../shared/components/Popup";
import DropDown from "../../../../../shared/components/DropDown";
import InputField from "../../../../../shared/components/InputField";
import TextButton from "../../../../../shared/components/TextButton";
import Toggle from "../../../../../shared/components/Toggle";
import {
  setEditeSupervisorPopupOpen,
  setIsActiveEditSupervisorPopup,
  setNameEditSupervisorPopup,
  setPhoneNumberEditSupervisorPopup,
  setUnitEditSupervisorPopup,
} from "../../../application/states/supervisorsState/supervisorsSlice";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";
import { editSupervisorUseCase } from "../../../application/useCases/editSupervisorUseCase";

export default function EditSupervisorPopup() {
  //
  const dispatch = useDispatch();
  //
  const isEditPopupOpen = useSelector(
    supervisorsSelectors.isOpen.editSupervisorPopup,
  );
  const unitOptions = useSelector(supervisorsSelectors.dropDownsOptions.uint);
  //
  const initialInfo = useSelector(
    supervisorsSelectors.editSupervisorPopup.initialInfo,
  );
  const name = useSelector(supervisorsSelectors.editSupervisorPopup.name);
  const phoneNumber = useSelector(
    supervisorsSelectors.editSupervisorPopup.phoneNumber,
  );
  const unit = useSelector(supervisorsSelectors.editSupervisorPopup.unit);
  const isActive = useSelector(
    supervisorsSelectors.editSupervisorPopup.isActive,
  );
  //
  const handleClosePopup = () => {
    dispatch(setEditeSupervisorPopupOpen({ value: false }));
  };
  const handelSubmit = () => {
    dispatch(editSupervisorUseCase());
  };
  const handleSetName = (value) => {
    dispatch(setNameEditSupervisorPopup({ value }));
  };
  const handleSetPhoneNumber = (value) => {
    dispatch(setPhoneNumberEditSupervisorPopup({ value }));
  };
  const handleSetUnit = (value) => {
    dispatch(setUnitEditSupervisorPopup({ value }));
  };
  const handleSetIsActive = (value) => {
    dispatch(setIsActiveEditSupervisorPopup({ value }));
  };
  //
  const isSubmitButtonDisable =
    name == initialInfo.name &&
    phoneNumber == initialInfo.phoneNumber &&
    unit == initialInfo.unit &&
    isActive == initialInfo.isActive;
  //
  return (
    <Popup
      open={isEditPopupOpen}
      title="تعديل حساب مشرف"
      actions={
        <>
          <TextButton
            className={
              "w-31 bg-bg-secondary border-border-theme text-primary-accent font-bold"
            }
            title="إلغاء"
            onClick={handleClosePopup}
          />
          <TextButton
            className={
              "w-31 bg-primary-accent border-none text-text-primary-inverse font-bold"
            }
            title="حفظ التعديلات"
            onClick={handelSubmit}
            disabled={isSubmitButtonDisable}
          />
        </>
      }
    >
      <div className="flex flex-col gap-2.5">
        <InputField
          className={"w-full"}
          header={"الاسم"}
          value={name}
          onChange={handleSetName}
        />
        <InputField
          className={"w-full"}
          header={"رقم الهاتف"}
          value={phoneNumber}
          onChange={handleSetPhoneNumber}
        />
        <div className="w-full flex flex-row justify-end items-center gap-2.5">
          <DropDown
            title="الوحدة"
            options={unitOptions}
            value={unit}
            onChange={handleSetUnit}
          />
          <p>الوحدة المسؤول عنها</p>
        </div>
        <div className="w-full flex flex-col items-end gap-2.5">
          <p>حالة الحساب</p>
          <div className="w-full flex flex-row justify-end items-center gap-2.5">
            <span>مفعل</span>
            <Toggle value={isActive} onChange={handleSetIsActive} />
          </div>
        </div>
      </div>
    </Popup>
  );
}
