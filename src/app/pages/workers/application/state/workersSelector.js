export const workersSelectors = {
  search: {
    textField: (state) => state.workers.search.textField,
  },
  table: {
    data: (state) => state.workers.table.data,
    columns: (state) => state.workers.table.columns,
    selectedRowsIds: (state) => state.workers.table.selectedRowsIds,
    pageNumber: (state) => state.workers.table.pageNumber,
    pageSize: (state) => state.workers.table.pageSize,
  },
  dropDownsOptions: {
    uint: (state) => state.workers.dropDownsOptions.unit,
  },
  addWorkerPopup: {
    name: (state) => state.workers.addWorkerPopup.name,
    phoneNumber: (state) => state.workers.addWorkerPopup.phoneNumber,
    unit: (state) => state.workers.addWorkerPopup.unit,
    isActive: (state) => state.workers.addWorkerPopup.isActive,
  },
  editWorkerPopup: {
    id: (state) => state.workers.editWorkerPopup.id,
    initialInfo: (state) => state.workers.editWorkerPopup.initialInfo,
    name: (state) => state.workers.editWorkerPopup.name,
    phoneNumber: (state) => state.workers.editWorkerPopup.phoneNumber,
    unit: (state) => state.workers.editWorkerPopup.unit,
    isActive: (state) => state.workers.editWorkerPopup.isActive,
  },
  deleteWorkerPopup: {
    id: (state) => state.workers.deleteworkerPopup.id,
  },
  loaded: {
    table: (state) => state.workers.isLoaded.table,
    dropDowns: (state) => state.workers.isLoaded.dropDowns,
  },
  isOpen: {
    filterPopup: (state) => state.workers.isOpen.filterPopup,
    addWorkerPopup: (state) => state.workers.isOpen.addWorkerPopup,
    editWorkerPopup: (state) => state.workers.isOpen.editWorkerPopup,
    deleteWorkerPopup: (state) => state.workers.isOpen.deleteWorkerPopup,
  },
};
