import SignUpForm from "@/components/forms/SignUpForm";
import AuthFooter from "@/components/sections/Auth/AuthFooter";
import AuthHeader from "@/components/sections/Auth/AuthHeader";

const page = () => {
  return (
    <main>
      <AuthHeader heading="Sign Up for an account" description="to continue to Devflow" />
      <SignUpForm />
      <AuthFooter page="sign-up" />
    </main>
  );
};

export default page;
