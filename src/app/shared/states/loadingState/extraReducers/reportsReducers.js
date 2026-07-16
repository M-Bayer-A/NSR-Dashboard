import { toast } from "react-toastify";
import { getReportsTableUseCase } from "../../../../pages/reports/application/useCases/getReportsTableUseCase";
import { deleteReportUseCase } from "../../../../pages/reports/application/useCases/deleteReportUseCase";

export const getReportsTableReducer = (builder) => {
  builder
    .addCase(getReportsTableUseCase.pending, (state) => {
      state.reports.isTableLoading = true;
    })
    .addCase(getReportsTableUseCase.fulfilled, (state) => {
      state.reports.isTableLoading = false;
    })
    .addCase(getReportsTableUseCase.rejected, () => {
      toast.error("لم يتم تحميل التقارير");
    });
};
//
export const deleteReportReducer = (builder) => {
  builder
    .addCase(deleteReportUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(deleteReportUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم حذف التقرير");
    })
    .addCase(deleteReportUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
