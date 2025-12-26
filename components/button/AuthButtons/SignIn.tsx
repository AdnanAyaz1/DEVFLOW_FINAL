import { LogInIcon } from "lucide-react";

import { Button } from "../../ui/button";

const SignIn = () => {
  return (
    <Button className="dark:bg-dark-300 bg-light-200 h-10.5 w-full cursor-pointer rounded-md px-4 py-3">
      <LogInIcon size={24} color="white" className="invert-colors inline-block" />
      <p className="gradient-primary-text">
        <span className="p3-semibold max-xl:hidden">Sign In</span>
      </p>
    </Button>
  );
};

export default SignIn;
