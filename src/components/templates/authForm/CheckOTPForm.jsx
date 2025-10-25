import { useEffect, useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';
import { Controller } from "react-hook-form";

import { useCheckOtp } from '../../../core/services/mutations';
import { useOtpForm } from '../../../core/hooks/yupForm/useOtpForm';

import { formatTime } from '../../../core/utils/formatTime';

import styles from './CheckOTPForm.module.css'

function CheckOTPForm({ watch, setStep, setIsModal, submitHandler: resendCode }) {

    const { isPending, mutate } = useCheckOtp();

    const { control, handleSubmit, errors } = useOtpForm();

    const [timeLeft, setTimeLeft] = useState(90); // 1 دقیقه و 30 ثانیه
    const [isResendAvailable, setIsResendAvailable] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsResendAvailable(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const submitHandler = ({ code }) => {

        if (isPending) return;

        mutate(
            { mobile: watch("mobile"), code },
            {
                onSuccess: (data) => {
                    setIsModal(false);
                    toast.success("ورود به حساب کاربری");
                },
                onError: (error) => {
                    toast.error(error.message);
                },
            }
        );
    }


    return (
        <>
            <div className={styles.backButton} onClick={(e) => setStep(1)}  >
                <Image src="/images/back.png" width={100} height={100} alt="backLogo" />
            </div>
            <div className={styles.title}>
                <p>کد تایید را وارد کنید.</p>
            </div>
            <form id="form" onSubmit={handleSubmit(submitHandler)}>
                <div className={styles.form}>
                    <p>
                        کد تایید به شماره {watch("mobile")} ارسال شد
                    </p>

                    <Controller
                        name="code"
                        control={control}
                        render={({ field }) => (
                            <OTPInput
                                value={field.value}
                                onChange={field.onChange}
                                numInputs={6}
                                containerStyle={{ padding: "0", display: "flex", flexDirection: "row-reverse", justifyContent: "center", gap: "5px" }}
                                inputStyle={styles.otpInput}
                                renderInput={(props) =>
                                    <input
                                        {...props}
                                        style={{
                                            padding: "0",
                                            width: "35px ",
                                            height: "45px ",
                                            maxWidth: "37px",
                                            maxHeight: "35px",
                                        }}
                                    />
                                }
                            />
                        )}
                    />


                    {!isResendAvailable ? (
                        <p>{formatTime(timeLeft)} تا ارسال مجدد کد</p>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {
                                setTimeLeft(90)
                                setIsResendAvailable(false)
                                resendCode()
                            }}
                            className={styles.resendButton}
                        >
                            ارسال مجدد کد
                        </button>
                    )}


                    {
                        <p className={styles.error} style={{ visibility: `${errors.code && errors ? "visible" : null}` }}>
                            {errors.code?.message} &nbsp;
                        </p>
                    }

                </div>
                <div className={styles.button}>
                    <button type="submit">ورود به تورینو</button>
                </div>
            </form >
        </>
    )
}

export default CheckOTPForm