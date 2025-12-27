import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";

import { ROUTES } from "@/constants/Routes";

const SignUpLink = () => {
  return (
    <Link
      href={ROUTES.SIGN_UP}
      className="bg-light-400 text-dark-300 dark:bg-dark-200 ggap-3 flex-center h-10.5 w-full cursor-pointer rounded-md px-4 py-3 dark:text-white"
    >
      <MdAccountCircle size={24} color="white" className="invert-colors mr-2" />
      <p className="p3-semibold max-xl:hidden">Sign Up</p>
    </Link>
  );
};

export default SignUpLink;
