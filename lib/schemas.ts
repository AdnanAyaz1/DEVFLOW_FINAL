import z from "zod";

export const askQuestionSchema = z.object({
  title: z.string().min(3, "Title is required"),
});

export type askQuestionType = z.infer<typeof askQuestionSchema>;
