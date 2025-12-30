import { PopularQuestions } from "@/constants/data";

import TopQuestion from "./TopQuestion";

const TopQuestions = () => {
  return (
    <div className="my-6 space-y-7.5">
      {PopularQuestions.map((question, index) => (
        <TopQuestion question={question} key={index} />
      ))}
    </div>
  );
};

export default TopQuestions;
