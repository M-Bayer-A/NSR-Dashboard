import { createSlice } from "@reduxjs/toolkit";
import { getSupervisorsTableUseCase } from "../../useCases/getSupervisorsTableUseCase";
import { getUnitOptionsUseCase } from "../../useCases/getUnitOptionsUseCase";
import { addSupervisorUseCase } from "../../useCases/addSupervisorUseCase";
import { editSupervisorUseCase } from "../../useCases/editSupervisorUseCase";
import { deleteSupervisorUseCase } from "../../useCases/deleteSupervisorUseCase";
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
  dropDownsOptions: {
    unit: [],
  },
  addSupervisorPopup: {
    name: "",
    phoneNumber: "",
    unit: null,
    isActive: false,
  },
  editSupervisorPopup: {
    id: null,
    initialInfo: { name: "", phoneNumber: "", unit: null, isActive: false },
    name: "",
    phoneNumber: "",
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
    dropDowns: false,
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
    setNameAddSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.addSupervisorPopup.name = value;
    },
    setPhoneNumberAddSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.addSupervisorPopup.phoneNumber = value;
    },
    setUnitAddSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.addSupervisorPopup.unit = value;
    },
    setIsActiveAddSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.addSupervisorPopup.isActive = value;
    },
    //
    //
    setNameEditSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.editSupervisorPopup.name = value;
    },
    setPhoneNumberEditSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.editSupervisorPopup.phoneNumber = value;
    },
    setUnitEditSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.editSupervisorPopup.unit = value;
    },
    setIsActiveEditSupervisorPopup: (state, { payload }) => {
      const { value } = payload;
      state.editSupervisorPopup.isActive = value;
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
      const { value, id } = payload;
      //
      if (value) {
        const supervisor = state.table.data.find((d) => d.id == id);

        if (!supervisor) return;

        const info = {
          id,
          name: supervisor.name,
          phoneNumber: supervisor.phoneNumber,
          unit: supervisor.unit,
          isActive: supervisor.accountStatus,
        };
        state.editSupervisorPopup = { initialInfo: { ...info }, ...info };
      }
      //
      state.isOpen.editSupervisorPopup = value;
    },
    setDeleteSupervisorPopupOpen: (state, { payload }) => {
      const { value, id } = payload;
      if (value) {
        state.deleteSupervisorPopup.id = id;
      }
      state.isOpen.deleteSupervisorPopup = value;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder.addCase(
      getSupervisorsTableUseCase.fulfilled,
      (state, { payload }) => {
        state.table.columns = payload.columns;
        state.table.data = payload.data;
        state.isLoaded.table = true;
      },
    );
    builder.addCase(getUnitOptionsUseCase.fulfilled, (state, { payload }) => {
      state.dropDownsOptions.unit = payload;
      state.isLoaded.dropDowns = true;
    });
    builder.addCase(addSupervisorUseCase.fulfilled, (state) => {
      state.addSupervisorPopup = initialState.addSupervisorPopup;
      state.isOpen.addSupervisorPopup = false;
    });
    builder.addCase(editSupervisorUseCase.fulfilled, (state) => {
      const index = state.table.data.findIndex(
        (supervisor) => supervisor.id === state.editSupervisorPopup.id,
      );
      let row = state.table.data[index];

      row.name = state.editSupervisorPopup.name;
      row.phoneNumber = state.editSupervisorPopup.phoneNumber;
      row.unit = state.editSupervisorPopup.unit;
      row.accountStatus = state.editSupervisorPopup.isActive;

      state.isOpen.editSupervisorPopup = false;
    });
    builder.addCase(deleteSupervisorUseCase.fulfilled, (state) => {
      state.table.data = state.table.data.filter(
        (supervisor) => supervisor.id != state.deleteSupervisorPopup.id,
      );
      state.isOpen.deleteSupervisorPopup = false;
    });
  },
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
  setIsActiveAddSupervisorPopup,
  setIsActiveEditSupervisorPopup,
  setNameAddSupervisorPopup,
  setNameEditSupervisorPopup,
  setPhoneNumberAddSupervisorPopup,
  setPhoneNumberEditSupervisorPopup,
  setUnitAddSupervisorPopup,
  setUnitEditSupervisorPopup,
  setIdDeleteSupervisorPopup,
} = supervisorsSlice.actions;

export default supervisorsSlice.reducer;
