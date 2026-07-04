import { createAsyncThunk } from "@reduxjs/toolkit";
import requestsRepo from "../../repo/requestsRepo";

export const acceptRequestUseCase = createAsyncThunk(
  "requests/acceptRequestUseCase",
  async (id, { rejectWithValue }) => {
    console.log("from the use case");
    try {
      const response = await requestsRepo.postRejectRequest(id);
      return response;
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
