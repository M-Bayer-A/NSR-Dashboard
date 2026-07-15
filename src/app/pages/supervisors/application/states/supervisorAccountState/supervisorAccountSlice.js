import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  navigate: {
    nextSupervisorID: 99,
    previousSupervisorID: 101,
  },
  header: { period: "month", currentTab: "statistics" },
  supervisorInfo: {
    id: 8512,
    name: "سارة أحمد",
    phoneNumber: "+93999999999",
    unit: "الوحدة أ",
    createDate: "منذ يناير 2025",
    isAccountActive: true,
    currentTickets: 4,
    ticketsWatingConfirm: 2,
  },
  indicators: {
    pendingtickets: { value: 2, note: "أقدمها 2 ساعة" },
    confirmationRatio: { value: "84%", note: "+6% ارتفعت" },
    averageConfirmationTime: { value: "1.4 س", note: "أفضل من 20%" },
  },
  ticketRate: [
    { day: "س", value: 15 },
    { day: "ج", value: 35 },
    { day: "خ", value: 50 },
    { day: "أر", value: 80 },
    { day: "ث", value: 130 },
    { day: "أث", value: 55 },
    { day: "أح", value: 72 },
  ],
  statisticsTable: {
    columns: [
      {
        accessorKey: "id",
        header: "ID",
        isVisible: true,
      },
      {
        accessorKey: "title",
        header: "عنوان الطلب",
        isVisible: true,
      },
      {
        accessorKey: "applicant",
        header: "مقدم الطلب",
        isVisible: true,
      },
      {
        accessorKey: "worker",
        header: "العامل المسؤول",
        isVisible: true,
      },
      {
        accessorKey: "type",
        header: "نوع الطلب",
        isVisible: true,
      },
      {
        accessorKey: "status",
        header: "حالة الطلب",
        isVisible: true,
      },
      {
        accessorKey: "importance",
        header: "أهمية الطلب",
        isVisible: true,
      },
    ],
    data: [
      {
        id: 12,
        title: "حنفية معطلة",
        applicant: "نص تجريبي",
        worker: "نص تجريبي",
        type: "electricity",
        status: "waitingForApprovement",
        importance: "urgent",
      },
    ],
  },
  //
  isOpen: {
    // rejectRequestPopup: false,
  },
};
//
export const supervisorAccountSlice = createSlice({
  name: "supervisorAccount",
  initialState,
  // ==REDUCERS==
  reducers: {
    setPeriod: (state, { payload }) => {
      const { value } = payload;
      state.header.period = value;
    },
    setCurrentTab: (state, { payload }) => {
      const { value } = payload;
      state.header.currentTab = value;
    },
  },
  // ==EXTRA REDUCERS==
  // extraReducers(builder) {},
});
//
export const { setCurrentTab, setPeriod } = supervisorAccountSlice.actions;

export default supervisorAccountSlice.reducer;
