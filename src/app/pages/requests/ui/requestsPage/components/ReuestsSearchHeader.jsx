import { useDispatch, useSelector } from "react-redux";
import DropDown from "../../../../../shared/components/DropDown";
import SearchBar from "../../../../../shared/components/SearchBar";
import { requestsSelectors } from "../../../application/states/requestsState/requestsSelector";
import {
  setFilterPopupOpen,
  setSearchFloor,
  setSearchImportance,
  setSearchRoom,
  setSearchSuit,
  setSearchSupervisor,
  setSearchTextField,
  setSearchType,
  setSearchUnit,
  setSearchWorker,
} from "../../../application/states/requestsState/requestsSlice";
import SkeletonLoader from "../../../../../shared/components/SkeletonLoader";
import { getRequestsTableUseCase } from "../../../application/useCases/getRequestsTableUseCase";

export default function ReuestsSearchHeader() {
  //
  const dispatch = useDispatch();
  //
  const isOptionsLoading = useSelector(requestsSelectors.loading.dropDowns);
  //
  const unitOptions = useSelector(requestsSelectors.dropDownsOptions.unit);
  const floorOptions = useSelector(requestsSelectors.dropDownsOptions.floor);
  const suiteOptions = useSelector(requestsSelectors.dropDownsOptions.suite);
  const roomOptions = useSelector(requestsSelectors.dropDownsOptions.room);
  const typeOptions = useSelector(requestsSelectors.dropDownsOptions.type);
  const importanceOptions = useSelector(
    requestsSelectors.dropDownsOptions.importance,
  );
  const workerOptions = useSelector(requestsSelectors.dropDownsOptions.worker);
  const supervisorOptions = useSelector(
    requestsSelectors.dropDownsOptions.supervisor,
  );
  //
  const textField = useSelector(requestsSelectors.search.textField);
  const unit = useSelector(requestsSelectors.search.unit);
  const floor = useSelector(requestsSelectors.search.floor);
  const suite = useSelector(requestsSelectors.search.suite);
  const room = useSelector(requestsSelectors.search.room);
  const type = useSelector(requestsSelectors.search.type);
  const importance = useSelector(requestsSelectors.search.importance);
  const worker = useSelector(requestsSelectors.search.worker);
  const supervisor = useSelector(requestsSelectors.search.supervisor);
  //
  return (
    <div className="w-full flex flex-col gap-4">
      <SearchBar
        placeholder={"ابحث في الطلبات"}
        value={textField}
        onChange={(value) => {
          dispatch(setSearchTextField({ value }));
        }}
        onSubmit={() => {
          dispatch(getRequestsTableUseCase());
        }}
        openFilter={() => {
          dispatch(setFilterPopupOpen({ value: true }));
        }}
      />

      <div className="w-full flex flex-row justify-between gap-5">
        <SkeletonLoader isLoading={isOptionsLoading} className="w-1/2 h-9">
          <div className="flex flex-row gap-2.5">
            <DropDown
              title="منشأة من قبل"
              options={supervisorOptions}
              value={supervisor}
              onChange={(value) => {
                dispatch(setSearchSupervisor({ value }));
              }}
            />
            <DropDown
              title="عامل صيانة"
              options={workerOptions}
              value={worker}
              onChange={(value) => {
                dispatch(setSearchWorker({ value }));
              }}
            />
            <DropDown
              title="الأهمية"
              options={importanceOptions}
              value={importance}
              onChange={(value) => {
                dispatch(setSearchImportance({ value }));
              }}
            />
            <DropDown
              title="النوع"
              options={typeOptions}
              value={type}
              onChange={(value) => {
                dispatch(setSearchType({ value }));
              }}
            />
          </div>
        </SkeletonLoader>
        <SkeletonLoader isLoading={isOptionsLoading} className="w-1/2 h-9">
          <div className="flex flex-row gap-2.5">
            <DropDown
              title="الغرفة"
              options={roomOptions}
              value={room}
              onChange={(value) => {
                dispatch(setSearchRoom({ value }));
              }}
            />
            <DropDown
              title="الجناح"
              options={suiteOptions}
              value={suite}
              onChange={(value) => {
                dispatch(setSearchSuit({ value }));
              }}
            />
            <DropDown
              title="الطابق"
              options={floorOptions}
              value={floor}
              onChange={(value) => {
                dispatch(setSearchFloor({ value }));
              }}
            />
            <DropDown
              title="الوحدة"
              options={unitOptions}
              value={unit}
              onChange={(value) => {
                dispatch(setSearchUnit({ value }));
              }}
            />
          </div>
        </SkeletonLoader>
      </div>
    </div>
  );
}
