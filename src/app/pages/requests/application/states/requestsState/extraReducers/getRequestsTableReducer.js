import { getRequestsTableUseCase } from "../../../useCases/getRequestsTableUseCase";

export const getRequestsTableReducer = (builder) => {
  builder
    .addCase(getRequestsTableUseCase.pending, (state) => {
      console.log("pending");
      state.isLoading.table = true;
    })
    .addCase(getRequestsTableUseCase.fulfilled, (state, { payload }) => {
      state.isLoading.table = false;
      state.table = { ...payload };
      state.isLoaded.table = true;
    })
    .addCase(getRequestsTableUseCase.rejected, (state, { payload }) => {
      console.log(payload);
    });
};
