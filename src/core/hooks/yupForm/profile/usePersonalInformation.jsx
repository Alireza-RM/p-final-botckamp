import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object({
    // // lastName: yup.string(),
    firstName: yup.string(),
    nationalCode: yup
        .string()
        .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
    birthDate: yup.date(),
    gender: yup.string().oneOf(["male", "female"]),
    // firstName: yup.string(),
    // gender: yup.string(),
    // birthDate: yup.date(),
    // nationalCode: yup.string(),
});


export const usePersonalInformation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    return { register, handleSubmit, errors, control, reset }
}