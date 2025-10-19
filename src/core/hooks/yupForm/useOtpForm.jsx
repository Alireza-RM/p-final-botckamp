import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  code: yup
    .string()
    .matches(/^\d{6}$/, "کد تایید باید ۶ رقم باشد")
    .required("وارد کردن کد الزامی است"),
});

export const useOtpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { code: "" },
    mode: "onTouched", // یا 'onSubmit' بسته به نیاز
  });

  return { control, handleSubmit, errors };
};