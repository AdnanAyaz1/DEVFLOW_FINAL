import { LogInIcon } from "lucide-react";
import Link from "next/link";

import { ROUTES } from "@/constants/Routes";

const SignInLink = () => {
  return (
    <Link
      href={ROUTES.SIGN_IN}
      className="dark:bg-dark-300 bg-light-200 flex h-10.5 w-full cursor-pointer items-center justify-center gap-3 rounded-md px-4 py-3"
    >
      <LogInIcon size={16} color="white" className="invert-colors" />
      <p className="gradient-primary-text p3-semibold max-xl:hidden">Sign In</p>
    </Link>
  );
};

export default SignInLink;
