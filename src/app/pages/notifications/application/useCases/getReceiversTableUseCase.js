import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReceiversTableUseCase = createAsyncThunk(
  "notifications/getReceiversTableUseCase",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return {
        columns: [
          {
            accessorKey: "id",
            header: "ID",
            isVisible: false,
          },
          {
            accessorKey: "name",
            header: "الاسم",
            isVisible: true,
          },
        ],
        data: [
          {
            id: "0",
            name: "بطة",
          },
          {
            id: "1",
            name: "وزة",
          },
          {
            id: "2",
            name: "بطة",
          },
          {
            id: "3",
            name: "وزة",
          },
        ],
      };
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
