import PageLayout from "../../../layouts/pageLayout/PageLayout";
import ProblemDetails from "./components/ProblemDetails";
import RequestDetailsHeader from "./components/RequestDetailsHeader";
import RequestInfoCard from "./components/RequestInfoCard";
import RequestTimeLine from "./components/RequestTimeLine";
import SolutionDetails from "./components/SolutionDetails";
import UsedMaterials from "./components/UsedMaterials";

export default function RequestDetailsPage() {
  return (
    <PageLayout title={"تفاصيل طلب"}>
      <div className="w-full flex flex-col p-4 gap-4 font-[Cairo]">
        <RequestDetailsHeader />
        <div className="w-full flex flex-row gap-2.5">
          <div className="flex flex-col gap-2.5 grow">
            <RequestInfoCard />
            <RequestTimeLine />
          </div>
          <div className=" flex flex-col gap-2.5 grow">
            <ProblemDetails />
            <UsedMaterials />
            <SolutionDetails />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
