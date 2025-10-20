import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object({
    firstName: yup.string(),
    // lastName: yup.string(),
    gender: yup.string().oneOf(["   ", "female"]),
    birthDate: yup.date(),
    nationalCode: yup
        .string()
        .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
});


export const usePersonalInformation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    return { register, handleSubmit, errors, reset }
}