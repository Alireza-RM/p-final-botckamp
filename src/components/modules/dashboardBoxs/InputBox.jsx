import Image from 'next/image'
import styles from './InputBox.module.css'
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from 'zaman';
import api from '../../../core/config/api';
import { useEditProfile } from '../../../core/services/mutations';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { convertDateEnToDateFa, convertDateEnToEn } from '../../../core/utils/convertDate';
import { e2p } from '../../../core/utils/replaceNumber';
import DropDownMenu from '../../partials/container/DropDownMenu';
import { useRef, useState } from 'react';
import { genderData } from '../../../core/constant/genderData';



function InputBox({ data, formInputDescription, register, handleSubmit,
    errors, control, watch, setOpen = () => { }, title, btn = false }) {

    const { mobile } = data || {}

    const [openGender, setOpenGender] = useState(false);
    const genderRef = useRef(null);

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
    const onInvalid = (data) => {
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
                            <div key={i.name} className={styles.dateContainer}>

                                <div className={styles.showDate}>
                                    {watch("birthDate") ?
                                        <p>{e2p(convertDateEnToDateFa(watch("birthDate")))}</p>
                                        :
                                        <div className={styles.div}>
                                            <span>
                                                <Image src="/images/calendar.png" width={100} height={100} alt="" />
                                            </span>
                                            <p>تاریخ تولد</p>
                                        </div>
                                    }
                                </div>
                                <Controller
                                    name="birthDate"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <DatePicker
                                            value={value}
                                            onChange={(e) => onChange(e.value)}
                                            accentColor="#28A745"
                                            inputClass="rr"
                                        />
                                    )}
                                />
                            </div>
                        )
                    }

                    if (fieldName === "gender") {
                        return (
                            <div key={i.name} className={styles.destination} >
                                <div className={styles.div} onClick={() => setOpenGender(p => !p)}>
                                    <p>
                                        {console.log(watch("gender"))}
                                        {/* {watch("gender") && watch(("gender") == "male" ? "مرد" : "زن")} */}
                                        {watch("gender") ? watch("gender") === "female" ? "زن" : "مرد" : ""}
                                    </p>
                                    <span>
                                        <Image src="/images/arrow-down-black.webp" width={20} height={20} alt="" />
                                    </span>
                                </div>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field: { onChange } }) => (
                                        <DropDownMenu open={openGender}
                                            setOpen={setOpenGender} ref={genderRef} >
                                            {
                                                genderData.map(i =>
                                                    <div key={i.nameEn} onClick={() => {
                                                        console.log(i.nameEn)
                                                        onChange(i.nameEn);
                                                        setOpenGender(false);
                                                    }} style={{ borderBottom: "2px solid #00000012", display: "flex", gap: "5px", padding: "10px", cursor: "pointer" }}>
                                                        <p>{i.nameFa}</p>
                                                    </div>)
                                            }
                                        </DropDownMenu>
                                    )}
                                />
                            </div>

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