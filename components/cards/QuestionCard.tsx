import { QuestionMetrics } from "@/constants/data";

import UserAvatar from "../avatar/UserAvatar";
import TagBadge from "../badge/TagBadge";
import QuestionMetric from "../QuestionMetric";

interface QuestionCardProps {
  title: string;
  tags: string[];
  author: {
    name: string;
    avatarUrl: string;
  };
  likes: number;
  answers: number;
  views: number;
}

const QuestionCard = ({ title, tags, author, likes, answers, views }: QuestionCardProps) => {
  const numbers = [likes, answers, views];
  return (
    <div className="dark:gradient-dark bg-light-400/10 question-card-drop-shadow rounded-xl sm:px-11 sm:py-9 px-4 py-6 dark:border-0 dark:shadow-none">
      <h1 className="h6-semibold text-dark-100 dark:text-white">{title}</h1>
      <div className="mt-3.5 flex flex-wrap gap-4">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
      <div className="mt-6">
        <div className="flex-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <UserAvatar src={author.avatarUrl} alt={author.name} name={author.name} className="size-5" />

            <p className="p3-medium mt-1">
              {author.name} <span className="p5-regular">• asked 2 mins ago</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {QuestionMetrics.map((question, index) => {
              return (
                <QuestionMetric
                  iconPath={question.iconPath}
                  metric={question.metric}
                  key={index}
                  numbers={numbers[index]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
