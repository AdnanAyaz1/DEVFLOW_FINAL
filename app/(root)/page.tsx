import HomePageFilters from "@/components/filters/HomePageFilters";
import HomeSearch from "@/components/search/HomeSearch";
import QuestionsContent from "@/sections/Home/QuestionsContent";
import QuestionsHeader from "@/sections/Home/QuestionsHeader";

export default function Home() {
  return (
    <div className="space-y-7.5 pr-[3%] max-md:p-6 max-sm:px-1 max-sm:pt-8 lg:pr-0">
      <QuestionsHeader />
      <HomeSearch />
      <HomePageFilters />
      <QuestionsContent />
    </div>
  );
}
