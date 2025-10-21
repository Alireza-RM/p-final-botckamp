import Image from 'next/image'
import styles from './InputBox.module.css'
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from 'zaman';
import api from '../../../core/config/api';
import { useEditProfile } from '../../../core/services/mutations';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';


function InputBox({ data: { mobile }, formInputDescription, register, handleSubmit, errors, control, setOpen, btn = false }) {

    const queryClient = useQueryClient()
    const { mutate, isPending } = useEditProfile()

    const submitHandler = async (form) => {

        if (isPending) return;


        const newData = { mobile, ...form }

        mutate(
            newData,
            {
                onSuccess: (data) => {
                    console.log(data)
                    toast.success("پروفایل با موفقیت آپدیت شد");
                    queryClient.invalidateQueries(["profileUser-data"])
                    setOpen(p => !p)
                },
                onError: (error) => {
                    toast.error(error.message);
                },
            }
        );
    }

    return (
        <form className={styles.box} onSubmit={handleSubmit(submitHandler)}>
            <div className={styles.title}>
                <span>
                    <Image src="/images/profile (1).png" width={100} height={100} alt="" />
                </span>
                <p>مشخصات مسافر</p>
            </div>

            {
                formInputDescription.map(i => {
                    const fieldName =
                        ["shaba_code", "debitCard_code", "accountIdentifier"].includes(i.name)
                            ? `payment.${i.name}`
                            : i.name;

                    if (fieldName === "birthDate") {
                        return (
                            // <div  key={i.name}>
                            <Controller key={i.name}
                                name="birthDate"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <DatePicker
                                        value={value}
                                        onChange={(e) => onChange(e.value)}
                                        accentColor="#28A745"
                                    />
                                )}
                            />
                            // </div>
                        )
                    }

                    return (
                        <input
                            key={i.name}
                            {...register(fieldName)}
                            placeholder={i.placeholder}
                        />
                    );
                })
            }

            {
                btn &&
                <div className={styles.buttons}>
                    <button type='onSubmit'>تایید</button>
                    <button onClick={() => setOpen(p => !p)}>انصراف</button>
                </div>
            }

        </form>
    )
}

export default InputBox