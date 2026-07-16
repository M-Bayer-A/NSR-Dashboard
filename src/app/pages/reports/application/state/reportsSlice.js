import { createSlice } from "@reduxjs/toolkit";
import { getReportsTableUseCase } from "../useCases/getReportsTableUseCase";
import { deleteReportUseCase } from "../useCases/deleteReportUseCase";
//
const initialState = {
  search: {
    textField: "",
  },
  table: {
    columns: [],
    data: [],
    selectedRowsIds: [],
    pageNumber: 1,
    pageSize: 20,
  },
  deleteReportPopup: {
    id: null,
  },
  isOpen: {
    deleteReportPopup: false,
  },
  isLoaded: {
    table: false,
  },
};
//
export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  // ==REDUCERS==
  reducers: {
    setSearchTextField: (state, { payload }) => {
      const { value } = payload;
      state.search.textField = value;
    },
    //
    //
    setTableSelectedRowsIds: (state, { payload }) => {
      const { value } = payload;
      state.table.selectedRowsIds = value;
    },
    setTablePageNumber: (state, { payload }) => {
      const { value } = payload;
      state.table.pageNumber = value;
    },
    setTablePageSize: (state, { payload }) => {
      const { value } = payload;
      state.table.pageSize = value;
    },
    //
    //
    setDeleteReportPopupOpen: (state, { payload }) => {
      const { value, id } = payload;
      if (value) {
        state.deleteReportPopup.id = id;
      }
      state.isOpen.deleteReportPopup = value;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder.addCase(getReportsTableUseCase.fulfilled, (state, { payload }) => {
      state.table.columns = payload.columns;
      state.table.data = payload.data;
      state.isLoaded.table = true;
    });
    builder.addCase(deleteReportUseCase.fulfilled, (state) => {
      state.table.data = state.table.data.filter(
        (supervisor) => supervisor.id != state.deleteReportPopup.id,
      );
      state.isOpen.deleteReportPopup = false;
    });
  },
});
//
export const {
  setDeleteReportPopupOpen,
  setSearchTextField,
  setTablePageNumber,
  setTablePageSize,
  setTableSelectedRowsIds,
} = reportsSlice.actions;

export default reportsSlice.reducer;
