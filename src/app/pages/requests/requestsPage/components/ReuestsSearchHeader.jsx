import DropDown from "../../../../shared/components/DropDown";
import SearchBar from "../../../../shared/components/SearchBar";

export default function ReuestsSearchHeader() {
  return (
    <div className="w-full flex flex-col gap-4">
      <SearchBar />
      <div className="w-full flex flex-row justify-between gap-5">
        <div className="flex flex-row gap-2.5">
          <DropDown title="منشأة من قبل" />
          <DropDown title="عامل صيانة" />
          <DropDown title="الأهمية" />
          <DropDown title="النوع" />
        </div>
        <div className="flex flex-row gap-2.5">
          <DropDown title="الغرفة" />
          <DropDown title="الجناح" />
          <DropDown title="الطابق" />
          <DropDown title="الوحدة" />
        </div>
      </div>
    </div>
  );
}
