import { PopularTags } from "@/constants/data";

import TagBadge from "../../../components/badge/TagBadge";

const TopTags = () => {
  return (
    <div className="mt-6 space-y-4">
      {PopularTags.map((tag, index) => (
        <div className="flex-between" key={index}>
          <TagBadge tag={tag.tag} key={index} />
          <p className="p5-regular dark:text-light-400">{tag.count}+</p>
        </div>
      ))}
    </div>
  );
};

export default TopTags;
