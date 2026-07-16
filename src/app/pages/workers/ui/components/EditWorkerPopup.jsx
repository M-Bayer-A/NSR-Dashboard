import { useDispatch, useSelector } from "react-redux";
import DropDown from "../../../../shared/components/DropDown";
import InputField from "../../../../shared/components/InputField";
import Popup from "../../../../shared/components/Popup";
import TextButton from "../../../../shared/components/TextButton";
import Toggle from "../../../../shared/components/Toggle";
import { workersSelectors } from "../../application/state/workersSelector";
import {
  setEditeWorkerPopupOpen,
  setIsActiveEditWorkerPopup,
  setNameEditWorkerPopup,
  setPhoneNumberEditWorkerPopup,
  setUnitEditWorkerPopup,
} from "../../application/state/workersSlice";
import { editWorkerUseCase } from "../../application/useCases/editWorkerUseCase";

export default function EditWorkerPopup() {
  //
  const dispatch = useDispatch();
  //
  const isEditPopupOpen = useSelector(workersSelectors.isOpen.editWorkerPopup);
  const unitOptions = useSelector(workersSelectors.dropDownsOptions.uint);
  //
  const initialInfo = useSelector(workersSelectors.editWorkerPopup.initialInfo);
  const name = useSelector(workersSelectors.editWorkerPopup.name);
  const phoneNumber = useSelector(workersSelectors.editWorkerPopup.phoneNumber);
  const unit = useSelector(workersSelectors.editWorkerPopup.unit);
  const isActive = useSelector(workersSelectors.editWorkerPopup.isActive);
  //
  const handleClosePopup = () => {
    dispatch(setEditeWorkerPopupOpen({ value: false }));
  };
  const handelSubmit = () => {
    dispatch(editWorkerUseCase());
  };
  const handleSetName = (value) => {
    dispatch(setNameEditWorkerPopup({ value }));
  };
  const handleSetPhoneNumber = (value) => {
    dispatch(setPhoneNumberEditWorkerPopup({ value }));
  };
  const handleSetUnit = (value) => {
    dispatch(setUnitEditWorkerPopup({ value }));
  };
  const handleSetIsActive = (value) => {
    dispatch(setIsActiveEditWorkerPopup({ value }));
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
