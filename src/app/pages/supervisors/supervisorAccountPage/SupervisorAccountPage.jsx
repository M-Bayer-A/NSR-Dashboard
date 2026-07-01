import PageLayout from "../../../layouts/pageLayout/PageLayout";
import TextButton from "../../../shared/components/TextButton";
import MonitoringIndicatorsCard from "./components/MonitoringIndicatorsCard";
import SupervisorAccountHeader from "./components/SupervisorAccountHeader";
import SupervisorInfo from "./components/SupervisorInfo";
import TicketRateCard from "./components/TicketRateCard";

export default function SupervisorAccountPage() {
  return (
    <PageLayout
      title={"حساب المشرف"}
      action={
        <>
          <TextButton
            className={"border-none bg-red-100 text-red-500"}
            title="حذف"
          />
          <TextButton
            className={
              "border-none bg-primary-accent text-text-primary-inverse"
            }
            title="إعادة تعيين كلمة السر"
          />
          <TextButton
            className={
              "border-none bg-primary-accent text-text-primary-inverse"
            }
            title="تعديل"
          />
        </>
      }
    >
      <div className="w-fit min-w-full h-full flex flex-col p-4 gap-4">
        <SupervisorAccountHeader />
        <SupervisorInfo />
        <div className="w-full h-65 flex flex-row gap-3.5 font-[Cairo]">
          <TicketRateCard />
          <MonitoringIndicatorsCard />
        </div>
      </div>
    </PageLayout>
  );
}
