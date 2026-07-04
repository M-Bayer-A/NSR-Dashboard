import { useEffect } from "react";
import PageLayout from "../../../../layouts/pageLayout/PageLayout";
import ReuestsSearchHeader from "./components/ReuestsSearchHeader";
import { useDispatch, useSelector } from "react-redux";
import { getRequestsTableUseCase } from "../../application/useCases/getRequestsTableUseCase";

import RequestsTable from "./components/RequestsTable";
import { getFilterOptionsUseCase } from "../../application/useCases/getFilterOptionsUseCase";
import RequestsFilterPopup from "./components/RequestsFilterPopup";
import { requestsSelectors } from "../../application/states/requestsState/requestsSelector";

export default function RequestsPage() {
  //
  const dispatch = useDispatch();
  const isTableLoaded = useSelector(requestsSelectors.loaded.table);
  const isFilterOptionsLoaded = useSelector(requestsSelectors.loaded.dropDowns);

  //
  useEffect(() => {
    if (!isTableLoaded) {
      dispatch(getRequestsTableUseCase());
    }
    if (!isFilterOptionsLoaded) {
      dispatch(getFilterOptionsUseCase());
    }
  }, [dispatch, isFilterOptionsLoaded, isTableLoaded]);
  //
  return (
    <PageLayout title={"الطلبات"}>
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <ReuestsSearchHeader />
        <RequestsTable />
        <RequestsFilterPopup />
      </div>
    </PageLayout>
  );
}
