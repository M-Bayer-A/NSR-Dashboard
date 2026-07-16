import { createSlice } from "@reduxjs/toolkit";
import { getWorkersTableUseCase } from "../useCases/getWorkersTableUseCase";
import { getUnitOptionsUseCase } from "../useCases/getUnitOptionsUseCase";
import { addWorkerUseCase } from "../useCases/addWorkerUseCase";
import { editWorkerUseCase } from "../useCases/editWorkerUseCase";
import { deleteWorkerUseCase } from "../useCases/deleteWorkerUseCase";

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
  addWorkerPopup: {
    name: "",
    phoneNumber: "",
    unit: null,
    isActive: false,
  },
  editWorkerPopup: {
    id: null,
    initialInfo: { name: "", phoneNumber: "", unit: null, isActive: false },
    name: "",
    phoneNumber: "",
    unit: null,
    isActive: false,
  },
  deleteWorkerPopup: {
    id: null,
  },
  isOpen: {
    addWorkerPopup: false,
    editWorkerPopup: false,
    deleteWorkerPopup: false,
  },
  isLoaded: {
    table: false,
    dropDowns: false,
  },
};
//
export const workersSlice = createSlice({
  name: "workers",
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
    setNameAddWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.addWorkerPopup.name = value;
    },
    setPhoneNumberAddWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.addWorkerPopup.phoneNumber = value;
    },
    setUnitAddWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.addWorkerPopup.unit = value;
    },
    setIsActiveAddWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.addWorkerPopup.isActive = value;
    },
    //
    //
    setNameEditWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.editWorkerPopup.name = value;
    },
    setPhoneNumberEditWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.editWorkerPopup.phoneNumber = value;
    },
    setUnitEditWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.editWorkerPopup.unit = value;
    },
    setIsActiveEditWorkerPopup: (state, { payload }) => {
      const { value } = payload;
      state.editWorkerPopup.isActive = value;
    },
    //
    //
    setAddWorkerPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.addWorkerPopup = value;
    },
    setEditeWorkerPopupOpen: (state, { payload }) => {
      const { value, id } = payload;
      //
      if (value) {
        const worker = state.table.data.find((d) => d.id == id);

        if (!worker) return;

        const info = {
          id,
          name: worker.name,
          phoneNumber: worker.phoneNumber,
          unit: worker.unit,
          isActive: worker.accountStatus,
        };
        state.editWorkerPopup = { initialInfo: { ...info }, ...info };
      }
      //
      state.isOpen.editWorkerPopup = value;
    },
    setDeleteWorkerPopupOpen: (state, { payload }) => {
      const { value, id } = payload;
      if (value) {
        state.deleteWorkerPopup.id = id;
      }
      state.isOpen.deleteWorkerPopup = value;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder.addCase(getWorkersTableUseCase.fulfilled, (state, { payload }) => {
      state.table.columns = payload.columns;
      state.table.data = payload.data;
      state.isLoaded.table = true;
    });
    builder.addCase(getUnitOptionsUseCase.fulfilled, (state, { payload }) => {
      state.dropDownsOptions.unit = payload;
      state.isLoaded.dropDowns = true;
    });
    builder.addCase(addWorkerUseCase.fulfilled, (state) => {
      state.addWorkerPopup = initialState.addWorkerPopup;
      state.isOpen.addWorkerPopup = false;
    });
    builder.addCase(editWorkerUseCase.fulfilled, (state) => {
      const index = state.table.data.findIndex(
        (supervisor) => supervisor.id === state.editWorkerPopup.id,
      );
      let row = state.table.data[index];

      row.name = state.editWorkerPopup.name;
      row.phoneNumber = state.editWorkerPopup.phoneNumber;
      row.unit = state.editWorkerPopup.unit;
      row.accountStatus = state.editWorkerPopup.isActive;

      state.isOpen.editWorkerPopup = false;
    });
    builder.addCase(deleteWorkerUseCase.fulfilled, (state) => {
      state.table.data = state.table.data.filter(
        (supervisor) => supervisor.id != state.deleteWorkerPopup.id,
      );
      state.isOpen.deleteWorkerPopup = false;
    });
  },
});
//
export const {
  setAddWorkerPopupOpen,
  setDeleteWorkerPopupOpen,
  setEditeWorkerPopupOpen,
  setIsActiveAddWorkerPopup,
  setIsActiveEditWorkerPopup,
  setNameAddWorkerPopup,
  setNameEditWorkerPopup,
  setPhoneNumberAddWorkerPopup,
  setPhoneNumberEditWorkerPopup,
  setSearchTextField,
  setTablePageNumber,
  setTablePageSize,
  setTableSelectedRowsIds,
  setUnitAddWorkerPopup,
  setUnitEditWorkerPopup,
} = workersSlice.actions;

export default workersSlice.reducer;
