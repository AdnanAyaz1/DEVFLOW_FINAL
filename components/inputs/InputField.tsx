import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

import { cn } from "@/lib/utils";

interface InputFieldProps<T extends FieldValues> {
  label?: string;
  classNameLabel?: string;
  classNameInput?: string;
  name: Path<T>;
  type: HTMLInputTypeAttribute;
  description?: string;
  required?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
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
  errors,
}: InputFieldProps<T>) => {
  return (
    <>
      <label htmlFor={name} className={cn("p2-semibold text-dark-400 dark:text-light-300", classNameLabel)}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div>
        <input
          id={name}
          type={String(type)}
          {...register(name)}
          className={cn(
            "dark:bg-dark-300 bg-light-300 mt-3.5 h-13.25 w-full rounded-md px-3 outline-0",
            classNameInput
          )}
        />
      </div>
      {errors[name]?.message && (
        <span className="p3-semibold my-2 text-red-600">{errors[name]?.message as string}</span>
      )}
      {description && <p className="dark:text-dark-gray text-gray-light mt-2 text-sm">{description}</p>}
    </>
  );
};

export default InputField;
