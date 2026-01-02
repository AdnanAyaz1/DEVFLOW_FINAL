import Image from "next/image";

import { Button } from "../ui/button";

interface SocailAuthButtonProps {
  iconPath: string;
  text: string;
}

const SocialAuthButton = ({ iconPath, text }: SocailAuthButtonProps) => {
  return (
    <Button className="flex-center dark:bg-dark-300 bg-light-300 bg h-12 gap-2 rounded-md px-9 py-3.5 cursor-pointer">
      <Image src={iconPath} alt="Social Auth Button" height={20} width={20} className="invert-colors" />
      <p className="p3-medium">{text}</p>
    </Button>
  );
};

export default SocialAuthButton;
