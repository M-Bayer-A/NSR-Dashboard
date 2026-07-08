import InputField from "../../../../../shared/components/InputField";
import Popup from "../../../../../shared/components/Popup";
import TextButton from "../../../../../shared/components/TextButton";
import DropDown from "../../../../../shared/components/DropDown";
import Toggle from "../../../../../shared/components/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { supervisorsSelectors } from "../../../application/states/supervisorsState/supervisorsSelector";
import {
  setAddSupervisorPopupOpen,
  setIsActiveAddSupervisorPopup,
  setNameAddSupervisorPopup,
  setPhoneNumberAddSupervisorPopup,
  setUnitAddSupervisorPopup,
} from "../../../application/states/supervisorsState/supervisorsSlice";
import { addSupervisorUseCase } from "../../../application/useCases/addSupervisorUseCase";

export default function AddSupervisorPopup() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(
    supervisorsSelectors.isOpen.addSupervisorPopup,
  );
  const unitOptions = useSelector(supervisorsSelectors.dropDownsOptions.uint);
  //
  const name = useSelector(supervisorsSelectors.addSupervisorPopup.name);
  const phoneNumber = useSelector(
    supervisorsSelectors.addSupervisorPopup.phoneNumber,
  );
  const unit = useSelector(supervisorsSelectors.addSupervisorPopup.unit);
  const isActive = useSelector(
    supervisorsSelectors.addSupervisorPopup.isActive,
  );
  //
  const handleClosePopup = () => {
    dispatch(setAddSupervisorPopupOpen({ value: false }));
  };
  const handelSubmit = () => {
    dispatch(addSupervisorUseCase());
  };
  const handleSetName = (value) => {
    dispatch(setNameAddSupervisorPopup({ value }));
  };
  const handleSetPhoneNumber = (value) => {
    dispatch(setPhoneNumberAddSupervisorPopup({ value }));
  };
  const handleSetUnit = (value) => {
    dispatch(setUnitAddSupervisorPopup({ value }));
  };
  const handleSetIsActive = (value) => {
    dispatch(setIsActiveAddSupervisorPopup({ value }));
  };
  //
  return (
    <Popup
      open={isAddPopupOpen}
      title="إنشاء حساب مشرف"
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
            title="إضافة مشرف"
            onClick={handelSubmit}
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
