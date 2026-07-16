import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "./app/pages/requests/application/states/requestsState/requestsSlice";
import requestDetailsReducer from "./app/pages/requests/application/states/requestDetailsState/requestDetailsSlice";
import loadingReducer from "./app/shared/states/loadingState/loadingSlice";
import supervisorsReducer from "./app/pages/supervisors/application/states/supervisorsState/supervisorsSlice";
import supervisorAccountReducer from "./app/pages/supervisors/application/states/supervisorAccountState/supervisorAccountSlice";
import workersReducer from "./app/pages/workers/application/state/workersSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    requests: requestsReducer,
    requestDetails: requestDetailsReducer,
    supervisors: supervisorsReducer,
    supervisorAccount: supervisorAccountReducer,
    workers: workersReducer,
  },
});
