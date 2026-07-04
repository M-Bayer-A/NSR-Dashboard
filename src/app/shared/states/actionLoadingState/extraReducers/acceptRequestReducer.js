import { toast } from "react-toastify";
import { acceptRequestUseCase } from "../../../../pages/requests/application/useCases/acceptRequestUseCase";

export const acceptRequestReducer = (builder) => {
  builder
    .addCase(acceptRequestUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(acceptRequestUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تمت الوافقة على الطلب");
    })
    .addCase(acceptRequestUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
