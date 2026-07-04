import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "./app/pages/requests/application/states/requestsState/requestsSlice";
import requestDetailsReducer from "./app/pages/requests/application/states/requestDetailsState/requestDetailsSlice";
import actionLoadingReducer from "./app/shared/states/ActionLoadingState/actionLoadingSlice";

export const store = configureStore({
  reducer: {
    actionLoading: actionLoadingReducer,
    requests: requestsReducer,
    requestDetails: requestDetailsReducer,
  },
});
