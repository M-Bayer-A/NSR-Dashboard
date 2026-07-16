import { toast } from "react-toastify";
import { getWorkersTableUseCase } from "../../../../pages/workers/application/useCases/getWorkersTableUseCase";
import { addWorkerUseCase } from "../../../../pages/workers/application/useCases/addWorkerUseCase";
import { editWorkerUseCase } from "../../../../pages/workers/application/useCases/editWorkerUseCase";
import { deleteWorkerUseCase } from "../../../../pages/workers/application/useCases/deleteWorkerUseCase";

export const getWorkersTableReducer = (builder) => {
  builder
    .addCase(getWorkersTableUseCase.pending, (state) => {
      state.workers.isTableLoading = true;
    })
    .addCase(getWorkersTableUseCase.fulfilled, (state) => {
      state.workers.isTableLoading = false;
    })
    .addCase(getWorkersTableUseCase.rejected, () => {
      toast.error("لم يتم تحميل العمال");
    });
};
//
export const addWorkerReducer = (builder) => {
  builder
    .addCase(addWorkerUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(addWorkerUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم إضافة مشرف");
    })
    .addCase(addWorkerUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
//
export const editWorkerReducer = (builder) => {
  builder
    .addCase(editWorkerUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(editWorkerUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم تعديل معلومات المشرف");
    })
    .addCase(editWorkerUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
//
export const deleteWorkerReducer = (builder) => {
  builder
    .addCase(deleteWorkerUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(deleteWorkerUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم حذف المشرف");
    })
    .addCase(deleteWorkerUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
