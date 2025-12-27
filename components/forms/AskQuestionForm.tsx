import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { askQuestionSchema, askQuestionType } from "@/lib/schemas";

const AskQuestionForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<askQuestionType>({
    resolver: zodResolver(askQuestionSchema),
  });

  const onSubmit = (data: askQuestionType) => {
    console.log(data, register, errors);
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};

export default AskQuestionForm;
