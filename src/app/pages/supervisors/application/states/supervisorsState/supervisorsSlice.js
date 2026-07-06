import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  search: {
    textField: "",
  },
  table: {
    columns: [
      {
        accessorKey: "id",
        header: "ID",
        isVisible: true,
      },
      {
        accessorKey: "code",
        header: "الكود",
        isVisible: true,
      },
      {
        accessorKey: "validity",
        header: "الصلاحية",
        isVisible: true,
      },
      {
        accessorKey: "status",
        header: "الحالة",
        isVisible: true,
      },
      {
        accessorKey: "userNumber",
        header: "المستخدم",
        isVisible: true,
      },
      {
        accessorKey: "endDate",
        header: "تاريخ الإنتهاء",
        isVisible: true,
      },
    ],
    data: [
      {
        id: "0",
        code: "qwerty",
        validity: 30,
        status: "مستخدم",
        userNumber: "0951830877",
        endDate: "17-10-2025",
      },
      {
        id: "1",
        code: "qwerty",
        validity: 30,
        status: "منتهي",
        userNumber: null,
        endDate: "17-10-2025",
      },
      {
        id: "2",
        code: "qwerty",
        validity: 30,
        status: "متاح",
        userNumber: "0951830877",
        endDate: "17-10-2025",
      },
      {
        id: "3",
        code: "qwerty",
        validity: 30,
        status: "مستخدم",
        userNumber: "0951830877",
        endDate: "17-10-2025",
      },
    ],
    selectedRowsIds: [],
    pageNumber: 1,
    pageSize: 20,
  },
  addSupervisorPopup: {
    name: "",
    phoneNumber: null,
    unit: null,
    isActive: false,
  },
  editSupervisorPopup: {
    id: null,
    name: "",
    phoneNumber: null,
    unit: null,
    isActive: false,
  },
  deleteSupervisorPopup: {
    id: null,
  },
  isOpen: {
    filterPopup: false,
    addSupervisorPopup: false,
    editSupervisorPopup: false,
    deleteSupervisorPopup: false,
  },
  isLoaded: {
    table: false,
  },
};
//
export const supervisorsSlice = createSlice({
  name: "supervisors",
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
    setFilterPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.filterPopup = value;
    },
    setAddSupervisorPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.addSupervisorPopup = value;
    },
    setEditeSupervisorPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.editSupervisorPopup = value;
    },
    setDeleteSupervisorPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.deleteSupervisorPopup = value;
    },
  },
  // ==EXTRA REDUCERS==
  // extraReducers(builder) {
  //   builder.addCase(getRequestsTableUseCase.fulfilled, (state, { payload }) => {
  //     state.table = { ...payload };
  //     state.isLoaded.table = true;
  //   });
  //   //
  //   builder.addCase(getFilterOptionsUseCase.fulfilled, (state, { payload }) => {
  //     state.dropDownsOptions = { ...payload };
  //     state.isLoaded.dropDowns = true;
  //   });
  // },
});
//
export const {
  setAddSupervisorPopupOpen,
  setDeleteSupervisorPopupOpen,
  setEditeSupervisorPopupOpen,
  setFilterPopupOpen,
  setSearchTextField,
  setTablePageNumber,
  setTablePageSize,
  setTableSelectedRowsIds,
} = supervisorsSlice.actions;

export default supervisorsSlice.reducer;
