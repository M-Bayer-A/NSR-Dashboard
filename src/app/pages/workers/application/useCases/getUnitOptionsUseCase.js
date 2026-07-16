import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUnitOptionsUseCase = createAsyncThunk(
  "workers/getUnitOptionsUseCase",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return [
        { id: 0, name: "كل الوحدات" },
        { id: 1, name: "الوحدة الأولى" },
      ];
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
