import { createSlice } from "@reduxjs/toolkit";
import {
  acceptRequestReducer,
  getFilterOptionsReducer,
  getRequestDetailsReducer,
  getRequestsTableReducer,
  rejectRequestReducer,
} from "./extraReducers/requestsReducers";
import {
  addSupervisorReducer,
  deleteSupervisorReducer,
  editSupervisorReducer,
  getSupervisorsTableReducer,
} from "./extraReducers/supervisorsReducers";
import {
  addWorkerReducer,
  deleteWorkerReducer,
  editWorkerReducer,
  getWorkersTableReducer,
} from "./extraReducers/workersReducers";
import {
  deleteReportReducer,
  getReportsTableReducer,
} from "./extraReducers/reportsReducers";
import {
  deleteNotificationReducer,
  getReceiversTableReducer,
  getSentNotificationsTableReducer,
  getSystemNotificationsTableReducer,
  sendNotificationReducer,
} from "./extraReducers/notificationsReducers";

//
const initialState = {
  isActionLoading: false,
  requests: { isTableLoading: false, IsDropDownsOptionsLoading: false },
  requestDetails: { isRequestDetailsLoading: false },
  supervisors: { isTableLoading: false },
  workers: { isTableLoading: false },
  reports: { isTableLoading: false },
  notifications: { isTableLoading: false, isReceiversTableLoading: false },
};
//
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  // ==REDUCERS==
  reducers: {},
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    //
    acceptRequestReducer(builder);
    rejectRequestReducer(builder);
    getFilterOptionsReducer(builder);
    getRequestsTableReducer(builder);
    getRequestDetailsReducer(builder);
    //
    getSupervisorsTableReducer(builder);
    addSupervisorReducer(builder);
    editSupervisorReducer(builder);
    deleteSupervisorReducer(builder);
    //
    getWorkersTableReducer(builder);
    addWorkerReducer(builder);
    editWorkerReducer(builder);
    deleteWorkerReducer(builder);
    //
    getReportsTableReducer(builder);
    deleteReportReducer(builder);
    //
    getSystemNotificationsTableReducer(builder);
    getSentNotificationsTableReducer(builder);
    getReceiversTableReducer(builder);
    sendNotificationReducer(builder);
    deleteNotificationReducer(builder);
  },
});
//
// export const {} = actionLoadingSlice.actions;

export default loadingSlice.reducer;
