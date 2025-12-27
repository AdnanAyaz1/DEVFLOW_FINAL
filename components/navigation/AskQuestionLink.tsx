import Link from "next/link";

import { ROUTES } from "@/constants/Routes";

const AskQuestionLink = () => {
  return (
    <Link
      href={ROUTES.ASK_QUESTION}
      className="gradient-primary flex-center p2-semibold h-11.25 w-43 cursor-pointer rounded-lg px-4 py-3 text-white"
    >
      Ask Question
    </Link>
  );
};

export default AskQuestionLink;
