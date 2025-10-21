import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object({
    email: yup
        .string()
        .email("ایمیل معتبر نیست")
    // .required("ایمیل الزامی است"),
});


export const useEmailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm({
        resolver: yupResolver(schema),
    });

    return { register, handleSubmit, errors, reset, watch }
}