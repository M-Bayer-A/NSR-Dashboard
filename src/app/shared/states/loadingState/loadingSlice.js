import { createSlice } from "@reduxjs/toolkit";
import {
  acceptRequestReducer,
  getFilterOptionsReducer,
  getRequestDetailsReducer,
  getRequestsTableReducer,
  rejectRequestReducer,
} from "./extraReducers/requestsReducers";

//
const initialState = {
  isActionLoading: false,
  requests: { isTableLoading: false, IsDropDownsOptionsLoading: false },
  requestDetails: { isRequestDetailsLoading: false },
};
//
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  // ==REDUCERS==
  reducers: {},
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    acceptRequestReducer(builder);
    rejectRequestReducer(builder);
    getFilterOptionsReducer(builder);
    getRequestsTableReducer(builder);
    getRequestDetailsReducer(builder);
  },
});
//
// export const {} = actionLoadingSlice.actions;

export default loadingSlice.reducer;
