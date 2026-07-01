import { Icons } from "../../../../../assets/icons";

export default function MonitoringIndicatorsCard() {
  return (
    <div className="h-full min-w-1/2 flex flex-col px-2.5 py-2 gap-2.5 border border-border-theme rounded-3xl">
      <div className="flex flex-row justify-end items-center gap-2.5">
        <h2>مؤشرات المتابعة</h2>
        <Icons.Activity />
      </div>
      <div className="w-full h-full flex flex-row p-2.5 text-center">
        <div className="grow flex flex-col items-center p-2.5 gap-2.5 border-r border-border-theme">
          <h2>متوسط زمن التأكيد</h2>
          <p>1.4 ساعة</p>
          <p>أفضل من 20%</p>
        </div>
        <div className="grow flex flex-col items-center p-2.5 gap-2.5 border-r border-border-theme">
          <h2>متوسط زمن التأكيد</h2>
          <p>1.4 ساعة</p>
          <p>أفضل من 20%</p>
        </div>
        <div className="grow flex flex-col items-center p-2.5 gap-2.5 ">
          <h2>متوسط زمن التأكيد</h2>
          <p>1.4 ساعة</p>
          <p>أفضل من 20%</p>
        </div>
      </div>
    </div>
  );
}
