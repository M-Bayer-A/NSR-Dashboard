import { useDispatch, useSelector } from "react-redux";
import DropDown from "../../../../shared/components/DropDown";
import InputField from "../../../../shared/components/InputField";
import Popup from "../../../../shared/components/Popup";
import TextButton from "../../../../shared/components/TextButton";
import Toggle from "../../../../shared/components/Toggle";
import { workersSelectors } from "../../application/state/workersSelector";
import {
  setAddWorkerPopupOpen,
  setIsActiveAddWorkerPopup,
  setNameAddWorkerPopup,
  setPhoneNumberAddWorkerPopup,
  setUnitAddWorkerPopup,
} from "../../application/state/workersSlice";
import { addWorkerUseCase } from "../../application/useCases/addWorkerUseCase";

export default function AddWorkerPopup() {
  //
  const dispatch = useDispatch();
  //
  const isAddPopupOpen = useSelector(workersSelectors.isOpen.addWorkerPopup);
  const unitOptions = useSelector(workersSelectors.dropDownsOptions.uint);
  //
  const name = useSelector(workersSelectors.addWorkerPopup.name);
  const phoneNumber = useSelector(workersSelectors.addWorkerPopup.phoneNumber);
  const unit = useSelector(workersSelectors.addWorkerPopup.unit);
  const isActive = useSelector(workersSelectors.addWorkerPopup.isActive);
  //
  const handleClosePopup = () => {
    dispatch(setAddWorkerPopupOpen({ value: false }));
  };
  const handelSubmit = () => {
    dispatch(addWorkerUseCase());
  };
  const handleSetName = (value) => {
    dispatch(setNameAddWorkerPopup({ value }));
  };
  const handleSetPhoneNumber = (value) => {
    dispatch(setPhoneNumberAddWorkerPopup({ value }));
  };
  const handleSetUnit = (value) => {
    dispatch(setUnitAddWorkerPopup({ value }));
  };
  const handleSetIsActive = (value) => {
    dispatch(setIsActiveAddWorkerPopup({ value }));
  };
  //
  return (
    <Popup
      open={isAddPopupOpen}
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
