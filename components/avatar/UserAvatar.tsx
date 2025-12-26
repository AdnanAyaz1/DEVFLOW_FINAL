import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" className="size-10 cursor-pointer rounded-full" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
