import { createAsyncThunk } from "@reduxjs/toolkit";
import requestsRepo from "../../repo/requestsRepo";

export const getFilterOptionsUseCase = createAsyncThunk(
  "requests/getFilterOptionsUseCase",
  async (_, { rejectWithValue }) => {
    console.log("from the use case");
    try {
      const unitOptions = await requestsRepo.getUnitOptions();
      const floorOptions = await requestsRepo.getFloorOptions();
      const suiteOptions = await requestsRepo.getSuiteOptions();
      const roomOptions = await requestsRepo.getRoomOptions();
      const typeOptions = await requestsRepo.getTypeOptions();
      const importanceOptions = await requestsRepo.getImportanceOptions();
      const workerOptions = await requestsRepo.getWorkerOptions();
      const supervisorOptions = await requestsRepo.getSupervisorOptions();
      return {
        unit: unitOptions,
        floor: floorOptions,
        suite: suiteOptions,
        room: roomOptions,
        type: typeOptions,
        importance: importanceOptions,
        worker: workerOptions,
        supervisor: supervisorOptions,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
      //   return rejectWithValue(err.response.data.message);
    }
  },
);
