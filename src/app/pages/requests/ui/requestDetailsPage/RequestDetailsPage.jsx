import { useDispatch, useSelector } from "react-redux";
import { Icons } from "../../../../../assets/icons";
import PageLayout from "../../../../layouts/pageLayout/PageLayout";
import TextIconButton from "../../../../shared/components/TextIconButton";
import ProblemDetails from "./components/ProblemDetails";
import RejectRequestPopup from "./components/RejectRequestPopup";
import RequestDetailsHeader from "./components/RequestDetailsHeader";
import RequestInfoCard from "./components/RequestInfoCard";
import RequestTimeLine from "./components/RequestTimeLine";
import SolutionDetails from "./components/SolutionDetails";
import UsedMaterials from "./components/UsedMaterials";
import { setRejectRequestPopupOpen } from "../../application/states/requestDetailsState/requestDetailsSlice";
import { acceptRequestUseCase } from "../../application/useCases/acceptRequestUseCase";
import { loadingSelector } from "../../../../shared/states/loadingState/loadingSelector";
import SkeletonLoader from "../../../../shared/components/SkeletonLoader";
import { useEffect } from "react";
import { getRequestDetailsUseCase } from "../../application/useCases/getRequestDetailsUseCase";

export default function RequestDetailsPage() {
  //
  const dispatch = useDispatch();
  //
  const isRequestDetailsLoading = useSelector(
    loadingSelector.requestDetails.isRequestDetailsLoading,
  );
  console.log(isRequestDetailsLoading);
  //
  useEffect(() => {
    dispatch(getRequestDetailsUseCase());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <PageLayout
      title={"تفاصيل طلب"}
      action={
        <>
          <TextIconButton
            className={"bg-red-100 border-none text-red-500"}
            title="رفض الطلب"
            Icon={Icons.Rejected}
            onClick={() => {
              dispatch(setRejectRequestPopupOpen({ value: true }));
            }}
          />
          <TextIconButton
            className={
              "bg-primary-accent border-none text-text-primary-inverse"
            }
            title="تأكيد الطلب"
            Icon={Icons.Accepted}
            onClick={() => {
              dispatch(acceptRequestUseCase());
            }}
          />
        </>
      }
    >
      <div className="w-full min-h-full flex flex-col p-4 gap-4 font-[Cairo]">
        <SkeletonLoader
          isLoading={isRequestDetailsLoading}
          className="w-full h-12"
        >
          <RequestDetailsHeader />
        </SkeletonLoader>
        <div className="w-full grow flex flex-row gap-2.5">
          <div className="flex flex-col gap-2.5 grow">
            <SkeletonLoader
              isLoading={isRequestDetailsLoading}
              className="size-full"
            >
              <RequestInfoCard />
            </SkeletonLoader>
            {/*  */}
            <SkeletonLoader
              isLoading={isRequestDetailsLoading}
              className="size-full"
            >
              <RequestTimeLine />
            </SkeletonLoader>
          </div>
          <div className=" flex flex-col gap-2.5 grow">
            <SkeletonLoader
              isLoading={isRequestDetailsLoading}
              className="size-full"
            >
              <ProblemDetails />
            </SkeletonLoader>
            {/*  */}
            <SkeletonLoader
              isLoading={isRequestDetailsLoading}
              className="size-full"
            >
              <UsedMaterials />
            </SkeletonLoader>
            {/*  */}
            <SkeletonLoader
              isLoading={isRequestDetailsLoading}
              className="size-full"
            >
              <SolutionDetails />
            </SkeletonLoader>
          </div>
        </div>
        <RejectRequestPopup />
      </div>
    </PageLayout>
  );
}
