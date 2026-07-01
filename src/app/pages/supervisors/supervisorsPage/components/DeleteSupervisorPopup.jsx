import BackDrop from "../../../../shared/components/BackDrop";
import TextButton from "../../../../shared/components/TextButton";

export default function DeleteSupervisorPopup() {
  return (
    <BackDrop open={true}>
      <div
        className="w-135 flex flex-col items-center p-6 gap-5 
            bg-bg-primary border border-border-theme rounded-3xl font-[Cairo]"
      >
        <h1 className="font-bold text-xl">حذف حساب مشرف</h1>
        <p>سيتم حذف الحساب ونقله إلى الحسابات المحذوفة هل أنت متأكد ؟</p>
        <div className="w-full flex flex-row justify-end items-center gap-2.5">
          <TextButton
            className={
              "w-31 bg-bg-secondary border-border-theme text-primary-accent"
            }
            title="تراجع"
          />
          <TextButton
            className={"w-31 bg-red-100 border-none text-red-500"}
            title="أنا متأكد"
          />
        </div>
      </div>
    </BackDrop>
  );
}
