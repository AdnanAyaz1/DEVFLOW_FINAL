import { Search } from "lucide-react";

const HomeSearch = () => {
  return (
    <div className="border-light-400 bg_light_400_dark_gradient flex w-full items-center gap-4 rounded-xl p-4 dark:border-0">
      <Search className="text-gray-dark size-6" />
      <input
        type="text"
        placeholder="Search for Questions here"
        className="dark:text-gray-dark text-gray-light p2-regular placeholder:dark:text-gray-dark placeholder:text-gray-light w-full bg-transparent ring-0 outline-none"
      />
    </div>
  );
};

export default HomeSearch;
