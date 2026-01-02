import { HTMLInputTypeAttribute } from "react";
import { Control, Controller, FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

import { cn } from "@/lib/utils";

import { AskAQuestionEditor } from "../editor/AskQuestionEditor";

interface InputFieldProps<T extends FieldValues> {
  label?: string;
  classNameLabel?: string;
  classNameInput?: string;
  name: Path<T>;
  type: HTMLInputTypeAttribute;
  description?: string;
  required?: boolean;
  register: UseFormRegister<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  isMdx?: boolean;
}

const InputField = <T extends FieldValues>({
  label,
  classNameLabel,
  classNameInput,
  name,
  type,
  description,
  required = false,
  register,
  control,
  errors,
  isMdx = false,
}: InputFieldProps<T>) => {
  return (
    <div>
      <label htmlFor={name} className={cn("p2-semibold text-dark-400 dark:text-light-300", classNameLabel)}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return !isMdx ? (
              <input
                id={name}
                type={String(type)}
                {...register(name)}
                className={cn(
                  "dark:bg-dark-200 bg-light-300 mt-3.5 h-13.25 w-full rounded-md px-3 outline-0",
                  classNameInput
                )}
              />
            ) : (
              <AskAQuestionEditor value={field.value} onChange={field.onChange} />
            );
          }}
        />
      </div>
      {errors[name]?.message && <span className="p5-medium my-2 text-red-600">{errors[name]?.message as string}</span>}
      {description && <p className="dark:text-dark-gray text-gray-light p3-regular mt-2">{description}</p>}
    </div>
  );
};

export default InputField;
