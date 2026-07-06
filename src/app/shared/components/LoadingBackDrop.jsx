import { AppZIndex } from "../../../constants/zIndex";
import BackDrop from "./BackDrop";

export default function LoadingBackDrop({ open }) {
  return (
    <BackDrop open={open} className={`bg-black/30 ${AppZIndex.Loader}`}>
      <span className="loader" />
    </BackDrop>
  );
}
