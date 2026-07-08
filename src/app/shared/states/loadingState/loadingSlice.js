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

//
const initialState = {
  isActionLoading: false,
  requests: { isTableLoading: false, IsDropDownsOptionsLoading: false },
  requestDetails: { isRequestDetailsLoading: false },
  supervisors: { isTableLoading: false },
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
  },
});
//
// export const {} = actionLoadingSlice.actions;

export default loadingSlice.reducer;
