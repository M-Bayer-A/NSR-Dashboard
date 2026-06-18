import SearchBar from "../../../shared/component/SearchBar";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <SearchBar placeholder="ابحث في الطلبات" />
    </div>
  );
}
