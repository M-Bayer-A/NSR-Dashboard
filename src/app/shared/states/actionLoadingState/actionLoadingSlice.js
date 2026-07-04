import { createSlice } from "@reduxjs/toolkit";
import { acceptRequestReducer } from "./extraReducers/acceptRequestReducer";
import { rejectRequestReducer } from "./extraReducers/rejectRequestReducer";

//
const initialState = { isActionLoading: false };
//
export const actionLoadingSlice = createSlice({
  name: "actionLoading",
  initialState,
  // ==REDUCERS==
  reducers: {},
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    acceptRequestReducer(builder);
    rejectRequestReducer(builder);
  },
});
//
// export const {} = actionLoadingSlice.actions;

export default actionLoadingSlice.reducer;
