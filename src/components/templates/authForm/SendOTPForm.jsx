import Image from 'next/image'
import toast from 'react-hot-toast'

import { useSendOtp } from '../../../core/services/mutations'
import { isValidMobile } from '../../../core/utils/validation'

import styles from './SendOTPForm.module.css'
import { useState } from 'react'

function SendOTPForm({ mobile, setMobile, step, setStep, setIsModal }) {

    const [error, setError] = useState("");

    const { mutate, isPending } = useSendOtp()


    const submitHandler = async (e) => {
        e.preventDefault()

        if (isPending) return;

        if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید");



        mutate(
            { mobile },
            {
                onSuccess: (data) => {
                    toast.success(data?.data?.message);
                    toast(data?.data?.code);
                    setStep(2);
                    console.log(data)
                },
                onError: (error) => {
                    console.log(error);
                },
            }
        );

    }

    return (
        <>
            <div className={styles.closeButton} onClick={() => setIsModal(prev => !prev)}>
                {/* <img src="./images/closeBtn.png" alt="" /> */}
                <Image src="/images/closeBtn.png" width={100} height={100} alt="close-button" />
            </div>
            <div className={styles.title}>
                <p>ورود به تورینو</p>
            </div>
            <form id="form" onSubmit={submitHandler}>
                <div className={styles.form}>
                    <label htmlFor="phoneNumber">
                        شماره موبایل خود را وارد کنید
                    </label>
                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" id="phoneNumber" placeholder="تلفن همراه" />
                    <p className={styles.error} style={{ visibility: `${error ? "visible" : null}` }}>شماره وارد شده اشتباه است !</p>
                </div>
                <div className={styles.button}>
                    <button type="submit">ارسال کد تایید</button>
                </div>
            </form>
        </>
    )
}

export default SendOTPForm