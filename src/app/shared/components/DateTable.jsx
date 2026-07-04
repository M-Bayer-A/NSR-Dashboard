export default function DataTable({
  className,
  columns = [
    {
      accessorKey: "accessorKey",
      header: "title",
      isVisible: true,
    },
  ],
  data = [
    {
      accessorKey: "value",
    },
  ],
  selectRows = true,
  selectedIds = [],
  setSelectedIds = (param) => {
    console.log(param);
  },
}) {
  //
  const isAllSelected = data.length > 0 && selectedIds.length === data.length;
  //
  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      let newArray = data.map((row) => row.id);
      setSelectedIds(newArray);
    }
  };
  //
  const toggleRow = (id) => {
    let newArray = selectedIds.includes(id)
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];

    setSelectedIds(newArray);
  };
  //
  return (
    <div
      dir={"rtl"}
      className={`${className} w-full flex flex-col overflow-hidden`}
    >
      <div className="w-full max-h-full overflow-auto">
        <table
          className="min-w-full
            text-nowrap text-center text-[14px] font-[Cairo]
            border-separate border-spacing-y-2.5"
        >
          <thead>
            <tr
              className="bg-bg-secondary text-text-secondary
              sticky top-0 z-2"
            >
              {selectRows && (
                <th className={`p-3 rounded-r-xl`}>
                  <input
                    className="align-middle"
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={toggleAll}
                  />
                </th>
              )}
              {columns.map((column) => {
                if (column.isVisible) {
                  return (
                    <th
                      key={column.accessorKey}
                      className={`p-3 ${!selectRows ? "first:rounded-r-xl" : ""} last:rounded-l-xl`}
                    >
                      {column.header}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="bg-bg-secondary">
                {selectRows && (
                  <td className="p-3 rounded-r-xl">
                    <input
                      className="align-middle"
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => toggleRow(row.id)}
                    />
                  </td>
                )}
                {columns.map((column) => {
                  if (column.isVisible) {
                    return (
                      <td
                        key={`${row.id}-${column.accessorKey}`}
                        className={`p-3 ${!selectRows ? "first:rounded-r-xl" : ""} last:rounded-l-xl`}
                      >
                        <div className="flex justify-center items-center">
                          {row[column.accessorKey] || "Not available"}
                        </div>
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-bg-secondary grow rounded-xl" />
    </div>
  );
}
