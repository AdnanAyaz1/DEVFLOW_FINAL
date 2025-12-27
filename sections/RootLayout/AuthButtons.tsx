import LogOutButton from "@/components/button/LogOutButton";
import SignInLink from "@/components/navigation/SignInLink";
import SignUpLink from "@/components/navigation/SignUpLink";

const AuthButtons = () => {
  const isUser = true; // Replace with actual user authentication logic
  return isUser ? (
    <div className="space-y-4">
      <SignInLink />
      <SignUpLink />
    </div>
  ) : (
    <LogOutButton />
  );
};

export default AuthButtons;
