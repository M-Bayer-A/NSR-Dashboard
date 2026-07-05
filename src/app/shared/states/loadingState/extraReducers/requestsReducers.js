import { toast } from "react-toastify";
import { getRequestsTableUseCase } from "../../../../pages/requests/application/useCases/getRequestsTableUseCase";
import { getFilterOptionsUseCase } from "../../../../pages/requests/application/useCases/getFilterOptionsUseCase";
import { acceptRequestUseCase } from "../../../../pages/requests/application/useCases/acceptRequestUseCase";
import { rejectRequestUseCase } from "../../../../pages/requests/application/useCases/rejectRequestUseCase";
import { getRequestDetailsUseCase } from "../../../../pages/requests/application/useCases/getRequestDetailsUseCase";

export const getRequestsTableReducer = (builder) => {
  builder
    .addCase(getRequestsTableUseCase.pending, (state) => {
      state.requests.isTableLoading = true;
    })
    .addCase(getRequestsTableUseCase.fulfilled, (state) => {
      state.requests.isTableLoading = false;
    })
    .addCase(getRequestsTableUseCase.rejected, () => {
      toast.error("لم يتم تحميل الطلبات");
    });
};
//
export const getFilterOptionsReducer = (builder) => {
  builder
    .addCase(getFilterOptionsUseCase.pending, (state) => {
      state.requests.IsDropDownsOptionsLoading = true;
    })
    .addCase(getFilterOptionsUseCase.fulfilled, (state) => {
      state.requests.IsDropDownsOptionsLoading = false;
    })
    .addCase(getFilterOptionsUseCase.rejected, () => {
      toast.error("لم يتم تحميل الطلبات");
    });
};
//
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
//
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
//
export const getRequestDetailsReducer = (builder) => {
  builder
    .addCase(getRequestDetailsUseCase.pending, (state) => {
      state.requestDetails.isRequestDetailsLoading = true;
    })
    .addCase(getRequestDetailsUseCase.fulfilled, (state) => {
      state.requestDetails.isRequestDetailsLoading = false;
    })
    .addCase(getRequestDetailsUseCase.rejected, () => {
      toast.error("لم يتم الحصول على معلومات");
    });
};
