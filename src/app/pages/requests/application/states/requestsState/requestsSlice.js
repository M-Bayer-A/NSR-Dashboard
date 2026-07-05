import { createSlice } from "@reduxjs/toolkit";
import { getRequestsTableUseCase } from "../../useCases/getRequestsTableUseCase";
import { getFilterOptionsUseCase } from "../../useCases/getFilterOptionsUseCase";
//
const initialState = {
  search: {
    textField: "",
    unit: null,
    floor: null,
    suite: null,
    room: null,
    type: null,
    importance: null,
    worker: null,
    supervisor: null,
  },
  table: {
    columns: [],
    data: [],
    selectedRowsIds: [],
    pageNumber: 1,
    pageSize: 20,
  },
  dropDownsOptions: {
    unit: [],
    floor: [],
    suite: [],
    room: [],
    type: [],
    importance: [],
    worker: [],
    supervisor: [],
  },
  isLoaded: {
    table: false,
    dropDowns: false,
  },
  isOpen: {
    filterPopup: false,
  },
};
//
export const requestsSlice = createSlice({
  name: "requests",
  initialState,
  // ==REDUCERS==
  reducers: {
    setSearchTextField: (state, { payload }) => {
      const { value } = payload;
      state.search.textField = value;
    },
    setSearchUnit: (state, { payload }) => {
      const { value } = payload;
      state.search.unit = value;
    },
    setSearchFloor: (state, { payload }) => {
      const { value } = payload;
      state.search.floor = value;
    },
    setSearchSuit: (state, { payload }) => {
      const { value } = payload;
      state.search.suite = value;
    },
    setSearchRoom: (state, { payload }) => {
      const { value } = payload;
      state.search.room = value;
    },
    setSearchType: (state, { payload }) => {
      const { value } = payload;
      state.search.type = value;
    },
    setSearchImportance: (state, { payload }) => {
      const { value } = payload;
      state.search.importance = value;
    },
    setSearchWorker: (state, { payload }) => {
      const { value } = payload;
      state.search.worker = value;
    },
    setSearchSupervisor: (state, { payload }) => {
      const { value } = payload;
      state.search.supervisor = value;
    },
    resetSearch: (state) => {
      state.search = initialState.search;
    },
    //
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
    //
    setFilterPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.filterPopup = value;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder.addCase(getRequestsTableUseCase.fulfilled, (state, { payload }) => {
      state.table = { ...payload };
      state.isLoaded.table = true;
    });
    //
    builder.addCase(getFilterOptionsUseCase.fulfilled, (state, { payload }) => {
      state.dropDownsOptions = { ...payload };
      state.isLoaded.dropDowns = true;
    });
  },
});
//
export const {
  resetSearch,
  setSearchFloor,
  setSearchImportance,
  setSearchRoom,
  setSearchSuit,
  setSearchSupervisor,
  setSearchTextField,
  setSearchType,
  setSearchUnit,
  setSearchWorker,
  setTablePageNumber,
  setTablePageSize,
  setTableSelectedRowsIds,
  setFilterPopupOpen,
} = requestsSlice.actions;

export default requestsSlice.reducer;
