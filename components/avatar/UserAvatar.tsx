import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { extractNameInitials } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
}

const UserAvatar = ({
  src = "https://github.com/shadcn.png",
  alt = "User Image",
  name = "Test User",
  className,
}: UserAvatarProps) => {
  const nameInitials = extractNameInitials(name || "");
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} className={`size-10 cursor-pointer rounded-full ${className}`} />
      <AvatarFallback className="gradient-primary rounded-full p-1.5 text-xs text-white">{nameInitials}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
