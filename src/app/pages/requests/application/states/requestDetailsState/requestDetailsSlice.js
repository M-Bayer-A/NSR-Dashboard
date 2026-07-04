import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  navigate: {
    nextRequestID: 99,
    previousRequestID: 101,
  },
  requestInfo: {
    id: null,
    requestStatus: "rejected",
    createDate: "6-10-2026 10:40 pm",
    lastUpdateDate: "6-11-2026 10:50 pm",
    creator: "هذا النص تجريبي",
    worker: "هذا النص تجريبي",
    importance: "urgent",
    type: "كهربائية",
    unit: "الأولى",
    floor: "الثاني",
    suite: "اليساري",
    room: "17",
  },
  requestHistory: [
    {
      status: "completed",
      label: "تم إرسال المشكلة",
      time: "اليوم 10:40 صباحاً",
    },
    {
      status: "completed",
      label: "تم قبول الطلب",
      time: "اليوم 12:40 صباحاً",
    },
    {
      status: "completed",
      label: "تم تعيين عامل الصيانة",
      time: "اليوم 1:40 صباحاً",
    },
  ],
  problemDetails: {
    title: "فيش الكهربا خربان",
    notes: "تصرفوا شبنا",
    photos: [],
  },
  solutionDetails: {
    notes: "تصرفنا شبنا",
    photos: [],
  },
  rejectRequestPopup: { reasone: "" },
  usedMaterials: [
    { name: "name", number: "cscsc" },
    { name: "name", number: "cscsc" },
    { name: "name", number: "cscsc" },
    { name: "name", number: "cscsc" },
    { name: "name", number: "cscsc" },
    { name: "name", number: "cscsc" },
  ],
  //
  isLoading: {},
  isOpen: {
    rejectRequestPopup: false,
  },
};
//
export const requestDetailsSlice = createSlice({
  name: "requestDetails",
  initialState,
  // ==REDUCERS==
  reducers: {
    setRejectRequestReason: (state, { payload }) => {
      const { value } = payload;
      state.rejectRequestPopup.reasone = value;
    },
    setRejectRequestPopupOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOpen.rejectRequestPopup = value;
    },
  },
  // ==EXTRA REDUCERS==
  // extraReducers(builder) {},
});
//
export const { setRejectRequestPopupOpen, setRejectRequestReason } =
  requestDetailsSlice.actions;

export default requestDetailsSlice.reducer;
