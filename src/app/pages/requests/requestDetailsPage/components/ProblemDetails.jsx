import { Icons } from "../../../../../assets/icons";

export default function ProblemDetails() {
  return (
    <div
      className="flex flex-col gap-2.5 p-3
         border border-border-theme rounded-2xl"
    >
      <div className="w-full flex flex-row-reverse items-center gap-2.5">
        <Icons.Document />
        <span className="text-[16px] font-bold">تفاصيل المشكلة</span>
      </div>
      <div className="w-full flex flex-row gap-3">
        {/* Problem Photos */}
        <div className="flex flex-col">
          <div className="w-full flex flex-row-reverse items-center gap-2.5">
            <Icons.Photo />
            <span className="text-[16px] font-bold">صور الطلب</span>
          </div>
          <div className="h-56.25 w-87.5 bg-gray-500" />
        </div>
        {/* ==Problem Photos== */}
        {/* Problem info */}
        <div className="w-full flex flex-col gap-2 text-right">
          <p className="font-bold">عنوان المشكلة</p>
          <span>بطاطا مقلية</span>
          <p className="font-bold">ملاحظات إضافية</p>
          <span>البطاطا غير مقلية</span>
        </div>
        {/* ==Problem Info== */}
      </div>
    </div>
  );
}
