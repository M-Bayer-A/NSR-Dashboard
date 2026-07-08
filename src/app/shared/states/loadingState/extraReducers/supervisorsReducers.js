import { toast } from "react-toastify";
import { getSupervisorsTableUseCase } from "../../../../pages/supervisors/application/useCases/getSupervisorsTableUseCase";
import { addSupervisorUseCase } from "../../../../pages/supervisors/application/useCases/addSupervisorUseCase";
import { editSupervisorUseCase } from "../../../../pages/supervisors/application/useCases/editSupervisorUseCase";
import { deleteSupervisorUseCase } from "../../../../pages/supervisors/application/useCases/deleteSupervisorUseCase";

export const getSupervisorsTableReducer = (builder) => {
  builder
    .addCase(getSupervisorsTableUseCase.pending, (state) => {
      state.supervisors.isTableLoading = true;
    })
    .addCase(getSupervisorsTableUseCase.fulfilled, (state) => {
      state.supervisors.isTableLoading = false;
    })
    .addCase(getSupervisorsTableUseCase.rejected, () => {
      toast.error("لم يتم تحميل الطلبات");
    });
};
//
export const addSupervisorReducer = (builder) => {
  builder
    .addCase(addSupervisorUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(addSupervisorUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم إضافة مشرف");
    })
    .addCase(addSupervisorUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
//
export const editSupervisorReducer = (builder) => {
  builder
    .addCase(editSupervisorUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(editSupervisorUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم تعديل معلومات المشرف");
    })
    .addCase(editSupervisorUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
//
export const deleteSupervisorReducer = (builder) => {
  builder
    .addCase(deleteSupervisorUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(deleteSupervisorUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم حذف المشرف");
    })
    .addCase(deleteSupervisorUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
