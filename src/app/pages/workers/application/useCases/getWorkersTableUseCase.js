import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWorkersTableUseCase = createAsyncThunk(
  "workers/getSupervisorsTableUseCase",
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
            header: "اسم عامل الصيانة",
            isVisible: true,
          },
          {
            accessorKey: "phoneNumber",
            header: "الرقم",
            isVisible: true,
          },
          {
            accessorKey: "lastAppearance",
            header: "آخر ظهور",
            isVisible: true,
          },
          {
            accessorKey: "createDate",
            header: "تاريخ الإنشاء",
            isVisible: true,
          },
          {
            accessorKey: "unit",
            header: "الوحدة المسؤول عنها",
            isVisible: true,
          },
          {
            accessorKey: "accountStatus",
            header: "حالة الحساب",
            isVisible: false,
          },
        ],
        data: [
          {
            id: "0",
            name: "بطة",
            phoneNumber: "0951830877",
            lastAppearance: "منذ 4 أيام",
            createDate: "17-10-2025",
            unit: "الأولى",
            accountStatus: true,
          },
          {
            id: "1",
            name: "وزة",
            phoneNumber: "0983183384",
            lastAppearance: "منذ 4 أيام",
            createDate: "17-10-2025",
            unit: "الأولى",
            accountStatus: true,
          },
        ],
      };
    } catch (err) {
      // return rejectWithValue(err.response?.data || "Something went wrong");
      return rejectWithValue(err.response.data.message);
    }
  },
);
