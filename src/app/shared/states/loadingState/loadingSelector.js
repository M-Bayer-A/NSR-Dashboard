export const loadingSelector = {
  isActionLoading: (state) => state.loading.isActionLoading,
  //
  requests: {
    isTableLoading: (state) => state.loading.requests.isTableLoading,
    IsDropDownsOptionsLoading: (state) =>
      state.loading.requests.IsDropDownsOptionsLoading,
  },
  requestDetails: {
    isRequestDetailsLoading: (state) =>
      state.loading.requestDetails.isRequestDetailsLoading,
  },
  supervisors: {
    isTableLoading: (state) => state.loading.supervisors.isTableLoading,
  },
  workers: {
    isTableLoading: (state) => state.loading.workers.isTableLoading,
  },
  reports: {
    isTableLoading: (state) => state.loading.reports.isTableLoading,
  },
  notifications: {
    isTableLoading: (state) => state.loading.notifications.isTableLoading,
    isReceiversTableLoading: (state) =>
      state.loading.notifications.isReceiversTableLoading,
  },
};
