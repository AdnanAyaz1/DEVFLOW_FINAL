import LogOut from "./LogOut";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthButtons = () => {
  const isUser = true; // Replace with actual user authentication logic
  return isUser ? (
    <div className="space-y-4">
      <SignIn />
      <SignUp />
    </div>
  ) : (
    <LogOut />
  );
};

export default AuthButtons;
