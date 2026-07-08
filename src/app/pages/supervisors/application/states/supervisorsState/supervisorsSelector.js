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
  dropDownsOptions: {
    uint: (state) => state.supervisors.dropDownsOptions.unit,
  },
  addSupervisorPopup: {
    name: (state) => state.supervisors.addSupervisorPopup.name,
    phoneNumber: (state) => state.supervisors.addSupervisorPopup.phoneNumber,
    unit: (state) => state.supervisors.addSupervisorPopup.unit,
    isActive: (state) => state.supervisors.addSupervisorPopup.isActive,
  },
  editSupervisorPopup: {
    id: (state) => state.supervisors.editSupervisorPopup.id,
    initialInfo: (state) => state.supervisors.editSupervisorPopup.initialInfo,
    name: (state) => state.supervisors.editSupervisorPopup.name,
    phoneNumber: (state) => state.supervisors.editSupervisorPopup.phoneNumber,
    unit: (state) => state.supervisors.editSupervisorPopup.unit,
    isActive: (state) => state.supervisors.editSupervisorPopup.isActive,
  },
  deleteSupervisorPopup: {
    id: (state) => state.supervisors.deleteSupervisorPopup.id,
  },
  loaded: {
    table: (state) => state.supervisors.isLoaded.table,
    dropDowns: (state) => state.supervisors.isLoaded.dropDowns,
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
