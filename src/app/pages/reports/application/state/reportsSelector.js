export const reportsSelectors = {
  search: {
    textField: (state) => state.reports.search.textField,
  },
  table: {
    data: (state) => state.reports.table.data,
    columns: (state) => state.reports.table.columns,
    selectedRowsIds: (state) => state.reports.table.selectedRowsIds,
    pageNumber: (state) => state.reports.table.pageNumber,
    pageSize: (state) => state.reports.table.pageSize,
  },
  deleteReportPopup: {
    id: (state) => state.reports.deletereportPopup.id,
  },
  loaded: {
    table: (state) => state.reports.isLoaded.table,
  },
  isOpen: {
    deleteReportPopup: (state) => state.reports.isOpen.deleteReportPopup,
  },
};
