export const notificationsSelectors = {
  currentTab: (state) => state.notifications.currentTab,
  systemNotifications: {
    search: {
      textField: (state) =>
        state.notifications.systemNotifications.search.textField,
    },
    table: {
      data: (state) => state.notifications.systemNotifications.table.data,
      columns: (state) => state.notifications.systemNotifications.table.columns,
      selectedRowsIds: (state) =>
        state.notifications.systemNotifications.table.selectedRowsIds,
      pageNumber: (state) =>
        state.notifications.systemNotifications.table.pageNumber,
      pageSize: (state) =>
        state.notifications.systemNotifications.table.pageSize,
    },
  },
  sentNotifications: {
    search: {
      textField: (state) =>
        state.notifications.sentNotifications.search.textField,
    },
    table: {
      data: (state) => state.notifications.sentNotifications.table.data,
      columns: (state) => state.notifications.sentNotifications.table.columns,
      selectedRowsIds: (state) =>
        state.notifications.sentNotifications.table.selectedRowsIds,
      pageNumber: (state) =>
        state.notifications.sentNotifications.table.pageNumber,
      pageSize: (state) => state.notifications.sentNotifications.table.pageSize,
    },
  },
  sendNotificationPopup: {
    target: (state) => state.notifications.sendNotificationPopup.target,
    title: (state) => state.notifications.sendNotificationPopup.title,
    message: (state) => state.notifications.sendNotificationPopup.message,
    receiver: (state) => state.notifications.sendNotificationPopup.receiver,
    receiversIds: (state) =>
      state.notifications.sendNotificationPopup.receiversIds,
    receiversTable: (state) =>
      state.notifications.sendNotificationPopup.receiversTable,
  },
  deleteNotificationPopup: {
    id: (state) => state.notifications.deleteNotificationPopup.id,
  },
  loaded: {
    systemNotificationsTable: (state) =>
      state.notifications.isLoaded.systemNotificationsTable,
    sentNotificationsTable: (state) =>
      state.notifications.isLoaded.sentNotificationsTable,
  },
  isOpen: {
    sendNotificationPopup: (state) =>
      state.notifications.isOpen.sendNotificationPopup,
    deleteNotificationPopup: (state) =>
      state.notifications.isOpen.deleteNotificationPopup,
  },
};
