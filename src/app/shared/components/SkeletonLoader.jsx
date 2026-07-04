import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader({
  children,
  className = "",
  count = 1,
  rounded = 12,
  isLoading = false,
}) {
  return isLoading ? (
    <div className={`${className} `}>
      <Skeleton
        count={count}
        width={"100%"}
        height={"100%"}
        baseColor="#e0e0e0"
        highlightColor="#f5f5f5"
        borderRadius={rounded}
      />
    </div>
  ) : (
    children
  );
}
