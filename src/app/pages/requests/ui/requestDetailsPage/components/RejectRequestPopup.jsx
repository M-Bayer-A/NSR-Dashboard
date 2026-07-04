import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../shared/components/InputField";
import Popup from "../../../../../shared/components/Popup";
import TextButton from "../../../../../shared/components/TextButton";
import { requestDetailSelector } from "../../../application/states/requestDetailsState/requestDetailsSelector";
import {
  setRejectRequestPopupOpen,
  setRejectRequestReason,
} from "../../../application/states/requestDetailsState/requestDetailsSlice";

export default function RejectRequestPopup() {
  //
  const dispatch = useDispatch();
  //
  const reason = useSelector(requestDetailSelector.rejectRequestPopup.reason);
  const isOpen = useSelector(requestDetailSelector.isOpen.rejectRequestPopup);
  //
  return (
    <Popup
      open={isOpen}
      title="رفض الطلب"
      actions={
        <>
          <TextButton
            className={
              "bg-bg-secondary border-border-theme text-primary-accent"
            }
            title="تراجع"
            onClick={() => {
              dispatch(setRejectRequestPopupOpen({ value: false }));
            }}
          />
          <TextButton
            className={"bg-red-100 border-none text-red-500"}
            title="تأكيد رفض الطلب"
          />
        </>
      }
    >
      <InputField
        header={"سبب الرفض"}
        value={reason}
        onChange={(value) => {
          dispatch(setRejectRequestReason({ value }));
        }}
      />
    </Popup>
  );
}
