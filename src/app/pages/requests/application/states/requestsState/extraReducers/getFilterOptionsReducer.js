import { getFilterOptionsUseCase } from "../../../useCases/getFilterOptionsUseCase";

export const getFilterOptionsReducer = (builder) => {
  builder
    .addCase(getFilterOptionsUseCase.pending, (state) => {
      console.log("pending");
      state.isLoading.dropDowns = true;
    })
    .addCase(getFilterOptionsUseCase.fulfilled, (state, { payload }) => {
      state.isLoading.dropDowns = false;
      state.dropDownsOptions = { ...payload };
      state.isLoaded.dropDowns = true;
    })
    .addCase(getFilterOptionsUseCase.rejected, (state, { payload }) => {
      console.log(payload);
    });
};
