import { TopQuestions } from "@/constants/data";

import TopQuestion from "../TopQuestion";
import TopTags from "../TopTags";

const RightSidebar = () => {
  return (
    <main className="bg-light-100 dark:bg-dark-300/70 right-sidebar-drop-shadow custom-scrollbar fixed right-0 h-screen w-full max-w-82.5 overflow-y-auto p-6 max-lg:hidden max-lg:p-4 lg:max-w-[23%] xl:max-w-[22%] dark:border-0 dark:shadow-none">
      <section className="min-h-[45vh]">
        <h2 className="h6-bold text-dark-100 dark:text-white">Hot Network</h2>
        <div className="my-6 space-y-7.5">
          {TopQuestions.map((question, index) => (
            <TopQuestion question={question} key={index} />
          ))}
        </div>
      </section>
      <section className="mt-14 min-h-[50vh]">
        <h2 className="h6-bold text-dark-100 dark:text-white">Popular Tags</h2>
        <TopTags />
      </section>
    </main>
  );
};

export default RightSidebar;
