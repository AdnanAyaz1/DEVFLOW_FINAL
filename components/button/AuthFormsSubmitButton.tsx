import { Button } from "../ui/button";

const AuthFormsSubmitButton = ({ text = "Continue" }: { text?: string }) => {
  return (
    <Button className="gradient-primary p2-semibold block h-11 w-full cursor-pointer rounded-lg py-3 text-center">
      {text}
    </Button>
  );
};

export default AuthFormsSubmitButton;
