import { Icons } from "../../../../../../assets/icons";
import IconButton from "../../../../../shared/components/IconButton";
import TextIconButton from "../../../../../shared/components/TextIconButton";
import DropDown from "../../../../../shared/components/DropDown";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supervisorAccountSelector } from "../../../application/states/supervisorAccountState/supervisorAccountSelector";
import { setPeriod } from "../../../application/states/supervisorAccountState/supervisorAccountSlice";

export default function SupervisorAccountHeader() {
  //
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const nextID = useSelector(
    supervisorAccountSelector.navigate.nextSupervisorID,
  );
  const previousID = useSelector(
    supervisorAccountSelector.navigate.previousSupervisorID,
  );
  const period = useSelector(supervisorAccountSelector.header.period);
  //
  const handleNavigateNext = () => {
    navigate(`/supervisors/${nextID}`);
  };
  const handleNavigatePrevious = () => {
    navigate(`/supervisors/${previousID}`);
  };
  const handleSetPeriod = (value) => {
    dispatch(setPeriod({ value }));
  };
  //
  return (
    <div className="w-full h-10 flex flex-row justify-between gap-3">
      <div className="h-full flex flex-row gap-2.5">
        <TextIconButton
          title="تصدير"
          Icon={Icons.Reports}
          className={
            "h-full bg-bg-secondary border-border-theme text-primary-accent"
          }
        />
        <DropDown
          className={"h-full"}
          options={[
            { id: "month", name: "هذا الشهر" },
            { id: "day", name: "هذا اليوم" },
          ]}
          value={period}
          onChange={handleSetPeriod}
        />
      </div>
      <div className="flex flex-row gap-6 items-center">
        <p className="text-text-primary font-[Cairo] font-medium">#{id}</p>
        <div className="flex flex-row gap-1">
          <IconButton
            Icon={Icons.ArrowLeft}
            className={
              "bg-bg-secondary border-border-theme p-2 text-primary-accent"
            }
            onClick={handleNavigatePrevious}
          />
          <IconButton
            Icon={Icons.ArrowRight}
            className={
              "bg-bg-secondary border-border-theme p-2 text-primary-accent"
            }
            onClick={handleNavigateNext}
          />
        </div>
      </div>
    </div>
  );
}
