import { useSelector } from "react-redux";
import { Icons } from "../../../../../../assets/icons";
import { requestDetailSelector } from "../../../application/states/requestDetailsState/requestDetailsSelector";
import Carousel from "../../../../../shared/components/Carousel";

export default function ProblemDetails() {
  //
  const title = useSelector(requestDetailSelector.problem.title);
  const notes = useSelector(requestDetailSelector.problem.notes);
  // const photos = useSelector(requestDetailSelector.problem.photos);

  //
  return (
    <div
      className="flex flex-col gap-2.5 p-3
         border border-border-theme rounded-2xl"
    >
      <div className="w-full flex flex-row-reverse items-center gap-2.5">
        <Icons.Document />
        <span className="text-[16px] font-bold">تفاصيل المشكلة</span>
      </div>
      <div className="w-full flex flex-row gap-3">
        {/* Problem Photos */}
        <div className="flex flex-col">
          <div className="w-full flex flex-row-reverse items-center gap-2.5">
            <Icons.Photo />
            <span className="text-[16px] font-bold">صور الطلب</span>
          </div>
          <Carousel
            className="h-56.25 w-87.5 bg-gray-500"
            images={[
              { src: "/photos/Attack on Titan.jpg" },
              { src: "/photos/Levi Ackerman.jpg" },
              { src: "/photos/Rise Up.jpg" },
              { src: "/photos/thorfinn.jpg" },
              {
                src: "https://static.wikia.nocookie.net/typemoon/images/2/27/Fate_strange_Fake_TV_Key_Visual_2.jpeg/revision/latest?cb=20240722043247",
              },
            ]}
          />
        </div>
        {/* Problem info */}
        <div className="w-full flex flex-col gap-2 text-right">
          <p className="font-bold">عنوان المشكلة</p>
          <span>{title}</span>
          <p className="font-bold">ملاحظات إضافية</p>
          <span>{notes}</span>
        </div>
        {/* ==Problem Info== */}
      </div>
    </div>
  );
}
