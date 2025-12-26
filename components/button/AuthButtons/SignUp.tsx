import { MdAccountCircle } from "react-icons/md";

import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <Button className="bg-light-400 text-dark-300 dark:bg-dark-200 h-10.5 w-full cursor-pointer rounded-md px-4 py-3 dark:text-white">
      <MdAccountCircle size={24} color="white" className="invert-colors inline-block" />
      <p className="p3-semibold max-xl:hidden">Sign Up</p>
    </Button>
  );
};

export default SignUp;
