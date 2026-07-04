import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "./app/pages/requests/application/states/requestsState/requestsSlice";

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
  },
});
