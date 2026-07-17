import { createSlice } from "@reduxjs/toolkit";
import { getSystemNotificationsTableUseCase } from "../useCases/getSystemNotificationsTableUseCase";
import { getSentNotificationsTableUseCase } from "../useCases/getSentNotificationsTableUseCase";
import { getReceiversTableUseCase } from "../useCases/getReceiversTableUseCase";
import { sendNotificationUseCase } from "../useCases/sendNotificationUseCase";
import { deleteNotificationUseCase } from "../useCases/deleteNotificationUseCase";

//
const initialState = {
  currentTab: "system",
  systemNotifications: {
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
  },
  sentNotifications: {
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
  },
  sendNotificationPopup: {
    target: "all",
    title: "",
    message: "",
    receiver: "all",
    receiversTable: {
      columns: [],
      data: [],
    },
    receiversIds: [],
  },
  deleteNotificationPopup: {
    id: null,
  },
  isOpen: {
    sendNotificationPopup: false,
    deleteNotificationPopup: false,
  },
  isLoaded: {
    systemNotificationsTable: false,
    sentNotificationsTable: false,
  },
};
//
export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  // ==REDUCERS==
  reducers: {
    setCurrentTab: (state, { payload }) => {
      const { value } = payload;
      state.currentTab = value;
    },
    setSystemSearchTextField: (state, { payload }) => {
      const { value } = payload;
      state.systemNotifications.search.textField = value;
    },
    setSentSearchTextField: (state, { payload }) => {
      const { value } = payload;
      state.sentNotifications.search.textField = value;
    },
    //
    //
    setSystemTableSelectedRowsIds: (state, { payload }) => {
      const { value } = payload;
      state.systemNotifications.table.selectedRowsIds = value;
    },
    setSystemTablePageNumber: (state, { payload }) => {
      const { value } = payload;
      state.systemNotifications.table.pageNumber = value;
    },
    setSystemTablePageSize: (state, { payload }) => {
      const { value } = payload;
      state.systemNotifications.table.pageSize = value;
    },

    setSentTableSelectedRowsIds: (state, { payload }) => {
      const { value } = payload;
      state.sentNotifications.table.selectedRowsIds = value;
    },
    setSentTablePageNumber: (state, { payload }) => {
      const { value } = payload;
      state.sentNotifications.table.pageNumber = value;
    },
    setSentTablePageSize: (state, { payload }) => {
      const { value } = payload;
      state.sentNotifications.table.pageSize = value;
    },
    //
    //
    setTargetSendNotificationPopup: (state, { payload }) => {
      const { value } = payload;
      state.sendNotificationPopup.target = value;
    },
    setTitleSendNotificationPopup: (state, { payload }) => {
      const { value } = payload;
      state.sendNotificationPopup.title = value;
    },
    setMessageSendNotificationPopup: (state, { payload }) => {
      const { value } = payload;
      state.sendNotificationPopup.message = value;
    },
    setReceiverSendNotificationPopup: (state, { payload }) => {
      const { value } = payload;
      state.sendNotificationPopup.receiver = value;
    },
    setReceiversIdsSendNotificationPopup: (state, { payload }) => {
      const { value } = payload;
      state.sendNotificationPopup.receiversIds = value;
    },
    //
    //
    setsendNotificationPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.sendNotificationPopup = value;
    },
    setDeleteNotificationPopupOpen: (state, { payload }) => {
      const { value, id } = payload;
      if (value) {
        state.deleteNotificationPopup.id = id;
      }
      state.isOpen.deleteNotificationPopup = value;
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder.addCase(
      getSystemNotificationsTableUseCase.fulfilled,
      (state, { payload }) => {
        state.systemNotifications.table.columns = payload.columns;
        state.systemNotifications.table.data = payload.data;
        state.isLoaded.systemNotificationsTable = true;
      },
    );
    //
    builder.addCase(
      getSentNotificationsTableUseCase.fulfilled,
      (state, { payload }) => {
        state.sentNotifications.table.columns = payload.columns;
        state.sentNotifications.table.data = payload.data;
        state.isLoaded.sentNotificationsTable = true;
      },
    );
    //
    builder.addCase(
      getReceiversTableUseCase.fulfilled,
      (state, { payload }) => {
        state.sendNotificationPopup.receiversTable.columns = payload.columns;
        state.sendNotificationPopup.receiversTable.data = payload.data;
      },
    );
    //
    builder.addCase(sendNotificationUseCase.fulfilled, (state) => {
      state.sendNotificationPopup = initialState.sendNotificationPopup;
      state.isOpen.sendNotificationPopup = false;
    });
    //
    builder.addCase(deleteNotificationUseCase.fulfilled, (state) => {
      const currentTab = state.currentTab;
      currentTab == "system"
        ? (state.systemNotifications.table.data =
            state.systemNotifications.table.data.filter(
              (notification) =>
                notification.id != state.deleteNotificationPopup.id,
            ))
        : (state.sentNotifications.table.data =
            state.sentNotifications.table.data.filter(
              (notification) =>
                notification.id != state.deleteNotificationPopup.id,
            ));

      state.isOpen.deleteNotificationPopup = false;
    });
  },
});
//
export const {
  setCurrentTab,
  setDeleteNotificationPopupOpen,
  setMessageSendNotificationPopup,
  setReceiverSendNotificationPopup,
  setReceiversIdsSendNotificationPopup,
  setSentSearchTextField,
  setSentTablePageNumber,
  setSentTablePageSize,
  setSentTableSelectedRowsIds,
  setSystemSearchTextField,
  setSystemTablePageNumber,
  setSystemTablePageSize,
  setSystemTableSelectedRowsIds,
  setTargetSendNotificationPopup,
  setTitleSendNotificationPopup,
  setsendNotificationPopupOpen,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
