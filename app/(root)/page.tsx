import AskQuestion from "@/components/button/AskQuestion";
import QuestionCard from "@/components/cards/QuestionCard";
import HomePageFilters from "@/components/filters/HomePageFilters";
import HomeSearch from "@/components/search/HomeSearch";

export default function Home() {
  return (
    <div className="space-y-7.5 pr-[3%] max-md:p-6 max-sm:px-1 max-sm:pt-8 lg:pr-0">
      <div className="flex-between flex-wrap gap-4">
        <h1 className="h1-bold">All Questions</h1>
        <AskQuestion />
      </div>
      <HomeSearch />
      <HomePageFilters />
      <div className="mt-20">
        <QuestionCard
          title="The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this"
          tags={["Javascript", "React", "Next.js", " TailwindCSS"]}
          author={{ name: "John Doe", avatarUrl: "/avatar.jpg" }}
          likes={10000}
          answers={5000}
          views={10000000}
        />
      </div>
    </div>
  );
}
