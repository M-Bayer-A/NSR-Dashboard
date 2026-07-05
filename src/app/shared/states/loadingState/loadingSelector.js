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
};
