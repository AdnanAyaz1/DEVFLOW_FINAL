import SignInForm from "@/components/forms/SignInForm";
import AuthFooter from "@/components/sections/Auth/AuthFooter";
import AuthHeader from "@/components/sections/Auth/AuthHeader";

const page = () => {
  return (
    <main>
      <AuthHeader heading="Sign In to your account" description="to continue to Devflow" />
      <SignInForm />
      <AuthFooter page="sign-in" />
    </main>
  );
};

export default page;
