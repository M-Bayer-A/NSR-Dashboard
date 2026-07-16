import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReportsTableUseCase = createAsyncThunk(
  "reports/getReportsTableUseCase",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return {
        columns: [
          {
            accessorKey: "id",
            header: "ID",
            isVisible: true,
          },
          {
            accessorKey: "name",
            header: "اسم الملف",
            isVisible: true,
          },
          {
            accessorKey: "notes",
            header: "ملاحظات",
            isVisible: true,
          },
          {
            accessorKey: "createDate",
            header: "تاريخ الإنشاء",
            isVisible: true,
          },
          {
            accessorKey: "lastUpdate",
            header: "آخر تعديل",
            isVisible: true,
          },
        ],
        data: [
          {
            id: "0",
            name: "شي بخوف",
            notes: "دير بالك",
            createDate: "17-10-2025",
            lastUpdate: "16-2-2026",
          },
          {
            id: "2",
            name: "شي ما بخوف",
            notes: "لا دير بالك",
            createDate: "17-10-2025",
            lastUpdate: "16-2-2026",
          },
        ],
      };
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
