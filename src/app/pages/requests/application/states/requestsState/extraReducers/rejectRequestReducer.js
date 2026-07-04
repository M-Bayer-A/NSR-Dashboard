import { toast } from "react-toastify";
import { rejectRequestUseCase } from "../../../useCases/rejectRequestUseCase";

export const rejectRequestReducer = (builder) => {
  builder
    .addCase(rejectRequestUseCase.pending, (state) => {
      console.log("pending");
      state.isLoading.action = true;
    })
    .addCase(rejectRequestUseCase.fulfilled, (state) => {
      state.isLoading.action = false;
      toast.info("تم رفض الطلب");
    })
    .addCase(rejectRequestUseCase.rejected, (state, { payload }) => {
      console.log(payload);
      state.isLoading.action = false;
    });
};
