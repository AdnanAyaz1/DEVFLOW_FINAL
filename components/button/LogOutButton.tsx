import { LogOutIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const LogOutButton = () => {
  return (
    <Button className="mt-4 flex h-10.5 w-full cursor-pointer xl:justify-start gap-4 bg-transparent py-3">
      <LogOutIcon size={24} color="white" className="invert-colors" />
      <p className="p1-medium text-black max-xl:hidden dark:text-white">Log Out</p>
    </Button>
  );
};

export default LogOutButton;
