import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "../../../../../../assets/icons";
import IconButton from "../../../../../shared/components/IconButton";
import Tag from "../../../../../shared/components/Tag";
import TextIconButton from "../../../../../shared/components/TextIconButton";
import { useSelector } from "react-redux";
import { requestDetailSelector } from "../../../application/states/requestDetailsState/requestDetailsSelector";

export default function RequestDetailsHeader() {
  //
  const { id } = useParams();
  const navigate = useNavigate();
  //
  const nextRequestID = useSelector(requestDetailSelector.navigate.nextID);
  const previousRequestID = useSelector(
    requestDetailSelector.navigate.previousID,
  );
  const requestStatus = useSelector(requestDetailSelector.info.status);
  //
  return (
    <div className="w-full flex flex-row justify-between gap-3">
      <TextIconButton
        title="تصدير"
        Icon={Icons.Reports}
        className={"bg-bg-secondary border-border-theme text-primary-accent"}
      />
      <div className="flex flex-row gap-6 items-center">
        <Tag status={requestStatus} />
        <p className="text-text-primary font-medium">#{id}</p>
        <div className="flex flex-row gap-1">
          <IconButton
            Icon={Icons.ArrowLeft}
            className={
              "p-2 bg-bg-secondary border-border-theme text-primary-accent"
            }
            onClick={() => {
              navigate(`/requests/${previousRequestID}`);
            }}
          />
          <IconButton
            Icon={Icons.ArrowRight}
            className={
              "p-2 bg-bg-secondary border-border-theme text-primary-accent"
            }
            onClick={() => {
              navigate(`/requests/${nextRequestID}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}
