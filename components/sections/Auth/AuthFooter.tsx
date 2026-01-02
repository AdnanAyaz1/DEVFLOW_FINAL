import Link from "next/link";

import SocialAuthButton from "@/components/button/SocialAuthButton";
import { ROUTES } from "@/constants/Routes";

const AuthFooter = ({ page }: { page: "sign-in" | "sign-up" }) => {
  return (
    <div className="mt-15">
      {page === "sign-in" ? (
        <Link href={ROUTES.SIGN_UP} className="p3-regular block text-center">
          {`Don't have an account?  `}
          <span className="gradient-primary-text font-semibold">Sign Up</span>
        </Link>
      ) : (
        <Link href={ROUTES.SIGN_IN} className="p3-regular block text-center">
          {`Already have an account?  `}
          <span className="gradient-primary-text font-semibold">Sign In</span>
        </Link>
      )}

      <div className="mt-9 flex gap-2.5">
        <SocialAuthButton iconPath="/icons/github.svg" text="Login With Github" />
        <SocialAuthButton iconPath="/icons/google.svg" text="Login with Google" />
      </div>
    </div>
  );
};

export default AuthFooter;
