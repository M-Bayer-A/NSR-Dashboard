import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteSupervisorUseCase = createAsyncThunk(
  "requests/deleteSupervisorUseCase",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
