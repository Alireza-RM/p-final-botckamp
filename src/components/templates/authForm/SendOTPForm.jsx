import Image from 'next/image'

import styles from './SendOTPForm.module.css'

function SendOTPForm({ register, handleSubmit, errors, setStep, setIsModal, submitHandler }) {


    return (
        <>
            <div className={styles.closeButton} onClick={() => setIsModal(prev => !prev)}>
                <Image src="/images/closeBtn.png" width={100} height={100} alt="close-button" />
            </div>
            <div className={styles.title}>
                <p>ورود به تورینو</p>
            </div>

            <form id="form" onSubmit={handleSubmit(submitHandler)}>
                <div className={styles.form}>
                    <label htmlFor="phoneNumber">
                        شماره موبایل خود را وارد کنید
                    </label>
                    <input {...register("mobile")} id="phoneNumber" placeholder="تلفن همراه" />
                    <p className={styles.error} style={{ visibility: `${errors ? "visible" : null}` }}>
                        {errors.mobile?.message} &nbsp;
                    </p>
                </div>
                <div className={styles.button}>
                    <button type="submit">ارسال کد تایید</button>
                </div>
            </form>
        </>
    )
}

export default SendOTPForm