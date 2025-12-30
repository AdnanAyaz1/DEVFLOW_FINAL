import QuestionCard from "@/components/cards/QuestionCard";

const QuestionsContent = () => {
  // TODO: Replace with actual fetched questions
  const questions = [
    {
      id: 1,
      title:
        "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
      tags: ["Javascript", "React", "Next.js", "TailwindCSS"],
      author: { name: "John Doe", avatarUrl: "/avatar.jpg" },
      likes: 10000,
      answers: 5000,
      views: 10000000,
    },
  ];

  return (
    <div className="mt-20 space-y-5">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          title={question.title}
          tags={question.tags}
          author={question.author}
          likes={question.likes}
          answers={question.answers}
          views={question.views}
        />
      ))}
    </div>
  );
};

export default QuestionsContent;
