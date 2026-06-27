import { Icons } from "../../../assets/icons";

const stapConfigs = {
  completed: {
    bgColor: "bg-primary-accent",
    iconColor: "text-white",
    icon: Icons.Accepted,
    continue: true,
  },

  rejected: {
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    icon: Icons.Rejected,
    continue: false,
  },

  canceled: {
    bgColor: "bg-gray-50",
    iconColor: "text-text-primary",
    icon: Icons.Cancelled,
    continue: false,
  },
};

export default function TimeLine({
  className,
  stages = [
    { status: "completed", label: "تم قبول الطلب", time: "اليوم 10:40 صباحاً" },
  ],
}) {
  //
  return (
    <div
      className={`${className} flex flex-col gap-2 font-[Cairo] overflow-auto`}
    >
      {stages.map((s) => {
        const stapConfig = stapConfigs[s.status.toLowerCase()];

        if (!stapConfig) {
          const validStatuses = Object.keys(stapConfigs).join(", ");

          throw new Error(
            `[Tag] Invalid status "${status}". Valid statuses are: ${validStatuses}`,
          );
        }

        const Icon = stapConfig.icon;
        return (
          <div key={s.label + s.time} className="w-full flex flex-row gap-4">
            <div className="h-12 min-w-0 grow flex flex-wrap-reverse justify-center items-center gap-1">
              <p className="text-text-secondary font-medium text-[10px]">
                {s.time}
              </p>
              <p className="text-text-primary font-normal text-[14px] truncate">
                {s.label}
              </p>
            </div>
            <div className="size-fit flex flex-col items-center gap-2">
              <div
                className={`${stapConfig.bgColor} flex justify-center items-center size-12 rounded-full`}
              >
                {Icon && (
                  <Icon className={`${stapConfig.iconColor} size-5.5`} />
                )}
              </div>
              {stapConfig.continue && (
                <div className="h-20 w-0.5 bg-primary-hover" />
              )}
            </div>
          </div>
        );
      })}
      {/*  */}
    </div>
  );
}
