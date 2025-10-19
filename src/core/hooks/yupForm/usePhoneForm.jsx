import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object({
    mobile: yup
        .string()
        .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
        .required(),
    // password: yup
    //     .string()
    //     .min(6, "رمز باید حداقل 6 رقم باشد")
    //     .max(6, "رمز باید حداقل 6 رقم باشد")
    //     .required("رمز عبور الزامی است"),
});


export const usePhoneForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), // اینجا yup رو وصل کردیم
    });

    return { register, handleSubmit, errors, watch }
}