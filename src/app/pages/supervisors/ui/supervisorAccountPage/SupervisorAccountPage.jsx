import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../../../../layouts/pageLayout/PageLayout";
import SelectButton from "../../../../shared/components/SelectButton";
import TextButton from "../../../../shared/components/TextButton";
import MonitoringIndicatorsCard from "./components/MonitoringIndicatorsCard";
import StatisticsTable from "./components/StatisticsTable";
import SupervisorAccountHeader from "./components/SupervisorAccountHeader";
import SupervisorInfo from "./components/SupervisorInfo";
import TicketsRateCard from "./components/TicketsRateCard";
import { supervisorAccountSelector } from "../../application/states/supervisorAccountState/supervisorAccountSelector";
import { setCurrentTab } from "../../application/states/supervisorAccountState/supervisorAccountSlice";

export default function SupervisorAccountPage() {
  //
  const dispatch = useDispatch();
  //
  const currentTab = useSelector(supervisorAccountSelector.header.currentTab);
  //
  const handleChangeTab = (value) => {
    dispatch(setCurrentTab({ value }));
  };
  //
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
        <div className="w-full flex justify-end">
          <SelectButton
            options={[
              { id: "latestActivities", name: "آخر النشاطات" },
              { id: "statistics", name: "الإحصائيات" },
            ]}
            value={currentTab}
            onChange={handleChangeTab}
          />
        </div>
        {currentTab == "statistics" ? (
          <>
            <SupervisorInfo />
            <div className="w-full h-65 flex flex-row gap-3.5 font-[Cairo]">
              <TicketsRateCard />
              <MonitoringIndicatorsCard />
            </div>
          </>
        ) : (
          <StatisticsTable />
        )}
      </div>
    </PageLayout>
  );
}
