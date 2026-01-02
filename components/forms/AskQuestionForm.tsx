"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { askQuestionSchema, askQuestionType } from "@/lib/schemas";

import AskQuestionButton from "../button/AskQuestionButton";
import InputField from "../inputs/InputField";
import { TagInputField } from "../inputs/TagInputField";

const AskQuestionForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<askQuestionType>({
    resolver: zodResolver(askQuestionSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
  });

  const onSubmit = (data: askQuestionType) => {
    console.log("Form submitted:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
      <InputField
        name="title"
        label="Title"
        errors={errors}
        register={register}
        control={control}
        type="text"
        required
        description="Be specific and imagine you’re asking a question to another person."
      />

      <InputField
        name="description"
        label="Description"
        errors={errors}
        register={register}
        control={control}
        type=""
        required
        description="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        isMdx
      />

      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <TagInputField value={field.value || []} onChange={field.onChange} errorMessage={errors.tags?.message} />
        )}
      />

      <div className="mt-4 flex justify-end">
        <AskQuestionButton />
      </div>
    </form>
  );
};

export default AskQuestionForm;
