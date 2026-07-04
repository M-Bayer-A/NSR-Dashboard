import { useDispatch, useSelector } from "react-redux";
import Popup from "../../../../../shared/components/Popup";
import { requestsSelectors } from "../../../application/states/requestsState/requestsSelector";
import { setFilterPopupOpen } from "../../../application/states/requestsState/requestsSlice";

export default function RequestsFilterPopup() {
  //
  const dispatch = useDispatch();
  //
  const isOpen = useSelector(requestsSelectors.isOpen.filterPopup);
  //
  return (
    <Popup
      open={isOpen}
      onClose={() => {
        dispatch(setFilterPopupOpen({ value: false }));
      }}
    ></Popup>
  );
}
