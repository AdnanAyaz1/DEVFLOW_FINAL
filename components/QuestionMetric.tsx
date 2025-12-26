import Image from "next/image";

import { formatNumber } from "@/lib/utils";

interface QuestionMetricProps {
  iconPath: string;
  numbers: number;
  metric: string;
}

const QuestionMetric = ({ iconPath, numbers, metric }: QuestionMetricProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={iconPath} alt={metric} width={16} height={16} />
      <p className="p5-medium">
        {formatNumber(numbers)} <span className="p5-regular capitalize">{metric}</span>
      </p>
    </div>
  );
};

export default QuestionMetric;
