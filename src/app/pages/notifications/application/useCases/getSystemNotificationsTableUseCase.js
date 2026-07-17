import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSystemNotificationsTableUseCase = createAsyncThunk(
  "notifications/getSystemNotificationsTableUseCase",
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
            accessorKey: "title",
            header: "العنوان",
            isVisible: true,
          },
          {
            accessorKey: "message",
            header: "الموضوع",
            isVisible: true,
          },
          {
            accessorKey: "target",
            header: "مرسلة إلى",
            isVisible: true,
          },
          {
            accessorKey: "createDate",
            header: "تاريخ الإنشاء",
            isVisible: true,
          },
        ],
        data: [
          {
            id: "0",
            title: "بطة",
            message: "0951830877",
            target: "منذ 4 أيام",
            createDate: "17-10-2025",
          },
          {
            id: "1",
            title: "وزة",
            message: "0983183384",
            target: "منذ 4 أيام",
            createDate: "17-10-2025",
          },
        ],
      };
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
