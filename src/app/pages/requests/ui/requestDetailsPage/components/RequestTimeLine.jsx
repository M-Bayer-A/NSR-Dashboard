import { useSelector } from "react-redux";
import TimeLine from "../../../../../shared/components/TimeLine";
import { requestDetailSelector } from "../../../application/states/requestDetailsState/requestDetailsSelector";

export default function RequestTimeLine() {
  //
  const history = useSelector(requestDetailSelector.history);
  //
  return (
    <div
      className="flex flex-col gap-2.5 p-3
        border border-border-theme rounded-3xl"
    >
      <TimeLine className={"max-h-90"} stages={history} />
    </div>
  );
}
