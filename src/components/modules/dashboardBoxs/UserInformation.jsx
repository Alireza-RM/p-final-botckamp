import { useState } from 'react'

import styles from './UserInformation.module.css'
import { useEmailForm } from '../../../core/hooks/yupForm/profile/useEmailForm'
import Image from 'next/image'

function UserInformation() {
    const [isEdit, setEisEdit] = useState(true)

    const { register, handleSubmit, errors } = useEmailForm()

    const submitHandler = (data) => {
        console.log(data)
        console.log("first")
    }

    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <p>اطلاعات حساب کابری</p>
            </div>
            <div className={styles.mainForm}>
                <div className={styles.oneLineDetail}>
                    <p>شماره موبایل</p>
                    <p>09224521125</p>
                </div>
                <div className={styles.oneLineDetail}  >
                    {
                        isEdit ?
                            <>
                                <p>ایمیل <span>  &nbsp; &nbsp; &nbsp; ---</span></p>
                                <div className={styles.editButton} onClick={() => setEisEdit(p => !p)}>
                                    {/* <span> */}
                                    <Image src="/images/edit-2.png" width={100} height={100} alt="editLogo"/>
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