import AskQuestionLink from "@/components/navigation/AskQuestionLink";

const QuestionsHeader = () => {
  return (
    <div className="flex-between flex-wrap gap-4">
      <h1 className="h1-bold">All Questions</h1>
      <AskQuestionLink />
    </div>
  );
};

export default QuestionsHeader;
