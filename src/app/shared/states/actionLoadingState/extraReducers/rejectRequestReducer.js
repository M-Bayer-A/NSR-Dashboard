import { toast } from "react-toastify";
import { rejectRequestUseCase } from "../../../../pages/requests/application/useCases/rejectRequestUseCase";

export const rejectRequestReducer = (builder) => {
  builder
    .addCase(rejectRequestUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(rejectRequestUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.info("تم رفض على الطلب");
    })
    .addCase(rejectRequestUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
