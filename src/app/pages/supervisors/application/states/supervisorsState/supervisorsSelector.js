export const supervisorsSelectors = {
  search: {
    textField: (state) => state.supervisors.search.textField,
  },
  table: {
    data: (state) => state.supervisors.table.data,
    columns: (state) => state.supervisors.table.columns,
    selectedRowsIds: (state) => state.supervisors.table.selectedRowsIds,
    pageNumber: (state) => state.supervisors.table.pageNumber,
    pageSize: (state) => state.supervisors.table.pageSize,
  },
  loaded: {
    table: (state) => state.supervisors.isLoaded.table,
  },
  isOpen: {
    filterPopup: (state) => state.supervisors.isOpen.filterPopup,
    addSupervisorPopup: (state) => state.supervisors.isOpen.addSupervisorPopup,
    editSupervisorPopup: (state) =>
      state.supervisors.isOpen.editSupervisorPopup,
    deleteSupervisorPopup: (state) =>
      state.supervisors.isOpen.deleteSupervisorPopup,
  },
};
