import { useEffect, useState } from 'react'

import styles from './UserInformation.module.css'
import { useEmailForm } from '../../../core/hooks/yupForm/profile/useEmailForm'
import Image from 'next/image'
import { e2p } from '../../../core/utils/replaceNumber'
import { useEditProfile } from '../../../core/services/mutations'
import { useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

function UserInformation({ data = {} }) {
    const { mobile, email } = data

    const [isEdit, setEisEdit] = useState(true)

    const queryClient = useQueryClient()
    const { mutate, isPending } = useEditProfile()

    const { register, handleSubmit, errors, reset, watch } = useEmailForm()

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
                    setEisEdit(p => !p)
                },
                onError: (error) => {
                    toast.error(error.message);
                },
            }
        );
    }
    useEffect(() => {
        reset({ email })

    }, [email])

    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <p>اطلاعات حساب کابری</p>
            </div>
            <div className={styles.mainForm}>
                <div className={styles.oneLineDetail}>
                    <p>شماره موبایل</p>
                    <p>{data?.mobile && e2p(data?.mobile) || "---"}</p>
                </div>
                <div className={styles.oneLineDetail}  >
                    {
                        isEdit ?
                            <>
                                <p>
                                    ایمیل <span>  &nbsp; &nbsp; &nbsp; {email || "---"}</span>
                                </p>
                                <div className={styles.editButton} onClick={() => setEisEdit(p => !p)}>
                                    {/* <span> */}
                                    <Image src="/images/edit-2.png" width={100} height={100} alt="editLogo" />
                                    {/* </span> */}
                                    <p>افزودن</p>
                                </div>
                            </>
                            :
                            <form className={styles.emailForm} onSubmit={handleSubmit(submitHandler)}>
                                <input {...register("email")} />
                                <button type='onSubmit'>تایید</button>
                            </form>
                    }

                </div>
            </div>
        </div>
    )
}

export default UserInformation