import { resolveTechTag } from "@/lib/utils";

import { Badge } from "../ui/badge";

interface TagBadgeProps {
  tag: string;
}

const TagBadge = ({ tag }: TagBadgeProps) => {
  const tech = resolveTechTag(tag);
  const { icon: Icon, color, label } = tech;
  return (
    <Badge className="dark:bg-dark-200 bg-light-200 rounded-md px-4 py-2">
      {Icon && <Icon className={`mr-2 inline h-4 w-4 ${color.split(" ")[1]} ${color.split(" ")[0]}`} />}
      <p className="p6-medium dark:text-gray-light">{label}</p>
    </Badge>
  );
};

export default TagBadge;
