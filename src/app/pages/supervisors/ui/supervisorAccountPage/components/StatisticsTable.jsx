import { useSelector } from "react-redux";
import { tagConfigs } from "../../../../../../constants/tagConfigs";
import DataTable from "../../../../../shared/components/DateTable";
import Tag from "../../../../../shared/components/Tag";
import { supervisorAccountSelector } from "../../../application/states/supervisorAccountState/supervisorAccountSelector";
import IconButton from "../../../../../shared/components/IconButton";
import { Icons } from "../../../../../../assets/icons";
import { useNavigate } from "react-router-dom";

export default function StatisticsTable() {
  //
  const navigate = useNavigate();
  //
  const columns = useSelector(
    supervisorAccountSelector.statisticsTable.columns,
  );
  const data = useSelector(supervisorAccountSelector.statisticsTable.data);
  //
  const newColumns = [
    ...columns,
    {
      accessorKey: "actions",
      header: "الإجراءات",
      isVisible: true,
    },
  ];
  const newData = data.map((row) => ({
    ...row,
    type: <Tag tagConfig={tagConfigs[row.type]} filled={false} />,
    status: <Tag tagConfig={tagConfigs[row.status]} filled={false} />,
    importance: <Tag tagConfig={tagConfigs[row.importance]} filled={false} />,
    actions: (
      <IconButton
        className={"p-2 border-none text-primary-accent"}
        Icon={Icons.Eye}
        onClick={() => {
          navigate(`/requests/${row.id}`);
        }}
      />
    ),
  }));
  //
  return <DataTable className={"grow"} columns={newColumns} data={newData} />;
}
