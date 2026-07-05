export const requestsSelectors = {
  search: {
    textField: (state) => state.requests.search.textField,
    unit: (state) => state.requests.search.unit,
    floor: (state) => state.requests.search.floor,
    suite: (state) => state.requests.search.suite,
    room: (state) => state.requests.search.room,
    type: (state) => state.requests.search.type,
    importance: (state) => state.requests.search.importance,
    worker: (state) => state.requests.search.worker,
    supervisor: (state) => state.requests.search.supervisor,
  },

  table: {
    data: (state) => state.requests.table.data,
    columns: (state) => state.requests.table.columns,
    selectedRowsIds: (state) => state.requests.table.selectedRowsIds,
    pageNumber: (state) => state.requests.table.pageNumber,
    pageSize: (state) => state.requests.table.pageSize,
  },
  dropDownsOptions: {
    unit: (state) => state.requests.dropDownsOptions.unit,
    floor: (state) => state.requests.dropDownsOptions.floor,
    suite: (state) => state.requests.dropDownsOptions.suite,
    room: (state) => state.requests.dropDownsOptions.room,
    type: (state) => state.requests.dropDownsOptions.type,
    importance: (state) => state.requests.dropDownsOptions.importance,
    worker: (state) => state.requests.dropDownsOptions.worker,
    supervisor: (state) => state.requests.dropDownsOptions.supervisor,
  },
  loaded: {
    table: (state) => state.requests.isLoaded.table,
    dropDowns: (state) => state.requests.isLoaded.dropDowns,
  },
  isOpen: {
    filterPopup: (state) => state.requests.isOpen.filterPopup,
  },
};
