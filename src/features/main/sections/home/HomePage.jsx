import { Icons } from "../../../../assets/icons";
import DropDown from "../../../shared/components/DropDown";
import SearchField from "../../../shared/components/SearchField";
import TextIconButton from "../../../shared/components/TextIconButton";
import SelectButton from "../../../shared/components/SelectButton";
import Toggle from "../../../shared/components/Toggle";
import { useState } from "react";
import InputField from "../../../shared/components/InputField";

export default function HomePage() {
  const [p, setp] = useState(true);
  const [id, setId] = useState(1);

  //
  return (
    <div className="flex flex-col gap-4 p-4">
      <SearchField placeholder="ابحث في الطلبات" />
      <DropDown
        title={"h"}
        value={id}
        onChange={(value) => setId(value)}
        options={[
          { id: 1, name: "scscs" },
          { id: 2, name: "ccc" },
          { id: 3, name: "ff" },
          { id: 4, name: "f" },
          { id: 5, name: "j" },
        ]}
      />
      <TextIconButton title="تجربة" Icon={Icons.Categories} iconFirst={true} />
      <SelectButton
        value={id}
        onChange={(value) => setId(value)}
        options={[
          { id: 1, name: "من اليمين لليسار" },
          { id: 2, name: "من اليسار لليمين" },
        ]}
      />
      <Toggle value={p} onChange={() => setp(!p)} />
      <InputField
        placeholder={"scscs"}
        header={"العنوان"}
        error={{ value: false, message: "هذا الحقل مطلوب" }}
        disabled
      />
    </div>
  );
}
