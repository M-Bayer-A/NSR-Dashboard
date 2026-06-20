import { Icons } from "../../../../assets/icons";
import DropDown from "../../../shared/component/DropDown";
import SearchBar from "../../../shared/component/SearchBar";
import TextIconButton from "../../../shared/component/TextIconButton";
import SelectButton from "../../../shared/component/SelectButton";
import Toggle from "../../../shared/component/Toggle";
import { useState } from "react";

export default function HomePage() {
  const [p, setp] = useState(true);
  const [id, setId] = useState(1);

  //
  return (
    <div className="flex flex-col gap-4 p-4">
      <SearchBar placeholder="ابحث في الطلبات" />
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
    </div>
  );
}
