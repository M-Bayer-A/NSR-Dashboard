import { createAsyncThunk } from "@reduxjs/toolkit";
import requestsRepo from "../../repo/requestsRepo";

export const getRequestsTableUseCase = createAsyncThunk(
  "requests/getRequestsTableUseCase",
  async (_, { rejectWithValue }) => {
    console.log("from the use case");
    try {
      const response = await requestsRepo.getRequestsTable(1);
      return response;
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
