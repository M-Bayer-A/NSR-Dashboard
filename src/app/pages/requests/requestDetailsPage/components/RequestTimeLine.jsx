import TimeLine from "../../../../shared/components/TimeLine";

export default function RequestTimeLine() {
  return (
    <div
      className="flex flex-col gap-2.5 p-3
        border border-border-theme rounded-3xl"
    >
      <TimeLine
        className={"max-h-90"}
        stages={[
          {
            status: "completed",
            label: "تم إرسال المشكلة",
            time: "اليوم 10:40 صباحاً",
          },
          {
            status: "completed",
            label: "تم قبول الطلب",
            time: "اليوم 12:40 صباحاً",
          },
          {
            status: "completed",
            label: "تم تعيين عامل الصيانة",
            time: "اليوم 1:40 صباحاً",
          },
        ]}
      />
    </div>
  );
}
