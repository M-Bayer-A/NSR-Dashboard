import { toast } from "react-toastify";
import { acceptRequestUseCase } from "../../../useCases/acceptRequestUseCase";

export const acceptRequestReducer = (builder) => {
  builder
    .addCase(acceptRequestUseCase.pending, (state) => {
      //
      state.isLoading.action = true;
      //
    })
    .addCase(acceptRequestUseCase.fulfilled, (state, { payload }) => {
      state.dropDownsOptions = { ...payload };
      //
      state.isLoading.action = false;
      toast.success("تمت الوافقة على الطلب");
      //
    })
    .addCase(acceptRequestUseCase.rejected, (state, { payload }) => {
      console.log(payload);
      //
      state.isLoading.action = false;
      toast.error("🦄 Wow so easy!");
      //
    });
};
