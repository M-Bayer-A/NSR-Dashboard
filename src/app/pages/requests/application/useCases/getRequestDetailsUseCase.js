import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRequestDetailsUseCase = createAsyncThunk(
  "requests/getRequestDetailsUseCase",
  async () => {
    console.log("from the use case");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      console.log(err.response.data.message);
    }
  },
);
