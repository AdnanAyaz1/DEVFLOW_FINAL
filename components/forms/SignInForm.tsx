"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { ROUTES } from "@/constants/Routes";
import { signInFormType, signInSchema } from "@/lib/schemas";

import AuthFormsSubmitButton from "../button/AuthFormsSubmitButton";
import InputField from "../inputs/InputField";

const SignInForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: signInFormType) => {
    console.log("Form submitted:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <InputField
        label="Email Address"
        name="email"
        type="email"
        errors={errors}
        register={register}
        control={control}
      />
      <div className="space-y-2.5">
        <InputField
          label="Password"
          name="password"
          type="password"
          errors={errors}
          register={register}
          control={control}
        />
        <Link href={ROUTES.FORGOT_PASSWORD} className="p3-medium block text-right text-[#1DA1F2]">
          Forgot Password ?
        </Link>
      </div>
      <AuthFormsSubmitButton />
    </form>
  );
};

export default SignInForm;
