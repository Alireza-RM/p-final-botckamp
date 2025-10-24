import Image from 'next/image'
import styles from './InputBox.module.css'
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from 'zaman';
import api from '../../../core/config/api';
import { useEditProfile } from '../../../core/services/mutations';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { convertDateEnToEn } from '../../../core/utils/convertDate';


function InputBox({ data, formInputDescription, register, handleSubmit,
    errors, control, setOpen = () => { }, title, btn = false }) {

    const { mobile } = data || {}

    const queryClient = useQueryClient()
    const { mutate, isPending } = useEditProfile()

    const submitHandler = async (form) => {

        if (isPending) return;


        let newData = { mobile, ...form }
        if (newData.birthDate) {
            newData = {
                ...newData,
                birthDate: convertDateEnToEn(newData.birthDate)
            }
        }

        if (newData.firstName && !newData.firstName.trim()) return toast.error("لطفا نام کاربری معتبر وارد کنید")

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
    const onInvalid = () => {
        toast.error("لطفا تمامی فیلد ها رو پر کنید")
        if (errors?.nationalCode?.message) toast.error(errors?.nationalCode?.message)
    }


    return (
        <form className={`${styles.box} ${!btn && styles.borderBox}`}
            onSubmit={handleSubmit(submitHandler, onInvalid)}>

            <div className={styles.title}>
                <span>
                    <Image src="/images/profile (1).png" width={100} height={100} alt="" />
                </span>
                <p>{title}</p>
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