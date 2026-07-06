import Tag from "../../../../../shared/components/Tag";

export default function SupervisorInfo() {
  return (
    <div
      className="w-full flex flex-col items-center px-3 py-6 gap-4
    border border-border-theme rounded-2xl font-[Cairo]"
    >
      <div className="size-16 flex justify-center items-center bg-blue-100 text-blue-500 rounded-full overflow-hidden">
        <p>مبا</p>
      </div>
      <div className="flex flex-row justify-center gap-2.5">
        <p>0951830877</p>
        <p>محمد باير العلي</p>
      </div>
      <p className="text-text-secondary text-[14px]">الوحدة أ منذ يتاير 2025</p>
      <div className="flex flex-row gap-2.5">
        <Tag status="completed" />
        <Tag status="completed" />
        <Tag status="completed" />
        <Tag status="completed" />
      </div>
    </div>
  );
}
