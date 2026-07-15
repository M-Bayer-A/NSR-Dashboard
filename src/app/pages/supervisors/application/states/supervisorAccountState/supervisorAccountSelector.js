export const supervisorAccountSelector = {
  navigate: {
    nextSupervisorID: (state) =>
      state.supervisorAccount.navigate.nextSupervisorID,
    previousSupervisorID: (state) =>
      state.supervisorAccount.navigate.previousSupervisorID,
  },
  header: {
    period: (state) => state.supervisorAccount.header.period,
    currentTab: (state) => state.supervisorAccount.header.currentTab,
  },
  supervisorInfo: {
    id: (state) => state.supervisorAccount.supervisorInfo.id,
    name: (state) => state.supervisorAccount.supervisorInfo.name,
    phoneNumber: (state) => state.supervisorAccount.supervisorInfo.phoneNumber,
    unit: (state) => state.supervisorAccount.supervisorInfo.unit,
    createDate: (state) => state.supervisorAccount.supervisorInfo.createDate,
    isAccountActive: (state) =>
      state.supervisorAccount.supervisorInfo.isAccountActive,
    currentTickets: (state) =>
      state.supervisorAccount.supervisorInfo.currentTickets,
    ticketsWatingConfirm: (state) =>
      state.supervisorAccount.supervisorInfo.ticketsWatingConfirm,
  },
  indicators: {
    pendingtickets: (state) =>
      state.supervisorAccount.indicators.pendingtickets,
    confirmationRatio: (state) =>
      state.supervisorAccount.indicators.confirmationRatio,
    averageConfirmationTime: (state) =>
      state.supervisorAccount.indicators.averageConfirmationTime,
  },
  ticketRate: (state) => state.supervisorAccount.ticketRate,
  statisticsTable: {
    columns: (state) => state.supervisorAccount.statisticsTable.columns,
    data: (state) => state.supervisorAccount.statisticsTable.data,
  },
};
