import DataTable from "../../../../../shared/components/DateTable";

export default function UsedMaterials() {
  return (
    <div
      className="flex flex-col gap-2.5 p-3
        border border-border-theme rounded-2xl"
    >
      <p className="font-bold text-right">قطع الغيار المستخدمة</p>
      <DataTable
        className={"max-h-50"}
        columns={[
          {
            accessorKey: "name",
            header: "اسم القطعة",
            isVisible: true,
          },
          {
            accessorKey: "number",
            header: "الكمية/الوحدة",
            isVisible: true,
          },
        ]}
        data={[
          { name: "name", number: "cscsc" },
          { name: "name", number: "cscsc" },
          { name: "name", number: "cscsc" },
          { name: "name", number: "cscsc" },
          { name: "name", number: "cscsc" },
          { name: "name", number: "cscsc" },
        ]}
        selectRows={false}
      />
    </div>
  );
}
