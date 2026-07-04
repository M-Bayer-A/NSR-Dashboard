import { useSelector } from "react-redux";
import DataTable from "../../../../../shared/components/DateTable";
import { requestDetailSelector } from "../../../application/states/requestDetailsState/requestDetailsSelector";

export default function UsedMaterials() {
  //
  const tableData = useSelector(requestDetailSelector.usedMaterials);
  //
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
        data={tableData}
        selectRows={false}
      />
    </div>
  );
}
