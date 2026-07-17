import { toast } from "react-toastify";
import { getSentNotificationsTableUseCase } from "../../../../pages/notifications/application/useCases/getSentNotificationsTableUseCase";
import { getSystemNotificationsTableUseCase } from "../../../../pages/notifications/application/useCases/getSystemNotificationsTableUseCase";
import { getReceiversTableUseCase } from "../../../../pages/notifications/application/useCases/getReceiversTableUseCase";
import { sendNotificationUseCase } from "../../../../pages/notifications/application/useCases/sendNotificationUseCase";
import { deleteNotificationUseCase } from "../../../../pages/notifications/application/useCases/deleteNotificationUseCase";

export const getSystemNotificationsTableReducer = (builder) => {
  builder
    .addCase(getSystemNotificationsTableUseCase.pending, (state) => {
      state.notifications.isTableLoading = true;
    })
    .addCase(getSystemNotificationsTableUseCase.fulfilled, (state) => {
      state.notifications.isTableLoading = false;
    })
    .addCase(getSystemNotificationsTableUseCase.rejected, () => {
      toast.error("لم يتم تحميل الإشعارات");
    });
};
export const getSentNotificationsTableReducer = (builder) => {
  builder
    .addCase(getSentNotificationsTableUseCase.pending, (state) => {
      state.notifications.isTableLoading = true;
    })
    .addCase(getSentNotificationsTableUseCase.fulfilled, (state) => {
      state.notifications.isTableLoading = false;
    })
    .addCase(getSentNotificationsTableUseCase.rejected, () => {
      toast.error("لم يتم تحميل الإشعارات");
    });
};
//
export const getReceiversTableReducer = (builder) => {
  builder
    .addCase(getReceiversTableUseCase.pending, (state) => {
      state.notifications.isReceiversTableLoading = true;
    })
    .addCase(getReceiversTableUseCase.fulfilled, (state) => {
      state.notifications.isReceiversTableLoading = false;
    })
    .addCase(getReceiversTableUseCase.rejected, () => {
      toast.error("لم يتم تحميل الأشخاص");
    });
};
//
export const sendNotificationReducer = (builder) => {
  builder
    .addCase(sendNotificationUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(sendNotificationUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم إرسال إشعار جديد");
    })
    .addCase(sendNotificationUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
//
export const deleteNotificationReducer = (builder) => {
  builder
    .addCase(deleteNotificationUseCase.pending, (state) => {
      state.isActionLoading = true;
    })
    .addCase(deleteNotificationUseCase.fulfilled, (state) => {
      state.isActionLoading = false;
      toast.success("تم حذف الإشعار");
    })
    .addCase(deleteNotificationUseCase.rejected, (state) => {
      state.isActionLoading = false;
      toast.error("🦄 Wow so easy!");
    });
};
