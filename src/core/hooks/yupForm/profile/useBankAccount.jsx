import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object({
    payment: yup.object({
        shaba_code: yup.string().nullable(),
        debitCard_code: yup.string().nullable(),
        accountIdentifier: yup.string().nullable(),
    }),
});


export const useBankAccount = () => {
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