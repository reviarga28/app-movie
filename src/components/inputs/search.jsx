import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        className="flex px-7 bg-gray-800 border border-slate-400 p-2 w-full placeholder:text-gray-600 text-white"
      />
      <div className="absolute top-1/2 left-1 transform -translate-y-1/2">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
}
