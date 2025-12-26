import Image from "next/image";

const TopQuestion = ({ question }: { question: string }) => {
  return (
    <div className="flex items-start gap-2.5">
      <Image src={"/icons/question.svg"} alt="question mark" width={20} height={20} className="invert-colors" />
      <p className="p3-regular text-dark-400 dark:text-light-400">{question}</p>
    </div>
  );
};

export default TopQuestion;
