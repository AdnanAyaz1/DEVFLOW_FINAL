"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signUpFormType, signUpSchema } from "@/lib/schemas";

import AuthFormsSubmitButton from "../button/AuthFormsSubmitButton";
import InputField from "../inputs/InputField";

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: signUpFormType) => {
    console.log("Form submitted:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <InputField
        label="Username"
        name="username"
        type="username"
        errors={errors}
        register={register}
        control={control}
      />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        errors={errors}
        register={register}
        control={control}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        errors={errors}
        register={register}
        control={control}
      />
      <AuthFormsSubmitButton />
    </form>
  );
};

export default SignUpForm;
