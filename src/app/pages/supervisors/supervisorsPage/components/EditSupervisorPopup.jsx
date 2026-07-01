import BackDrop from "../../../../shared/components/BackDrop";
import DropDown from "../../../../shared/components/DropDown";
import InputField from "../../../../shared/components/InputField";
import TextButton from "../../../../shared/components/TextButton";
import Toggle from "../../../../shared/components/Toggle";

export default function EditSupervisorPopup() {
  return (
    <BackDrop open={true}>
      <div
        className="w-135 flex flex-col items-center p-6 gap-5 
            bg-bg-primary border border-border-theme rounded-3xl font-[Cairo]"
      >
        <h1 className="font-bold text-xl">تعديل حساب مشرف</h1>
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
        <div className="w-full flex flex-row justify-end items-center gap-2.5">
          <TextButton
            className={
              "w-31 bg-bg-secondary border-border-theme text-primary-accent"
            }
            title="إلغاء"
          />
          <TextButton
            className={
              "w-31 bg-primary-accent border-none text-text-primary-inverse"
            }
            title="حفظ التعديلات"
          />
        </div>
      </div>
    </BackDrop>
  );
}
