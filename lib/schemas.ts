import z from "zod";

export const askQuestionSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  tags: z
    .array(z.string())
    .min(3, { message: "Select at least 3 tags" })
    .max(5, { message: "You can select at most 5 tags" }),
});

export const signInSchema = z.object({
  email: z.email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z.object({
  email: z.email().min(1, "Email is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type askQuestionType = z.infer<typeof askQuestionSchema>;
export type signInFormType = z.infer<typeof signInSchema>;
export type signUpFormType = z.infer<typeof signUpSchema>;
