import { useState } from 'react';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';

import { useCheckOtp } from '../../../core/services/mutations';

import styles from './CheckOTPForm.module.css'

function CheckOTPForm({ setStep, mobile, setIsModal }) {

    const [code, setCode] = useState("");

    const { isPending, mutate } = useCheckOtp();


    const submitHandler = (event) => {
        event.preventDefault();

        if (isPending) return;

        mutate(
            { mobile, code },
            {
                onSuccess: (data) => {
                    console.log("first")
                    setIsModal(false);
                    toast.success("ورود به حساب کاربری");
                },
                onError: (error) => {
                    console.log(error);
                },
            }
        );

        console.log(code);
    };


    return (
        <>
            <div className={styles.backButton} onClick={(e) => setStep(1)}  >
                <img src="./images/back.png" alt="" />
            </div>
            <div className={styles.title}>
                <p>کد تایید را وارد کنید.</p>
            </div>
            <form id="form" onSubmit={submitHandler}>
                <div className={styles.form}>
                    <p>
                        کد تایید به شماره 09224526847 ارسال شد
                    </p>
                    <OTPInput
                        containerStyle={{ padding: "0", display: "flex", flexDirection: "row-reverse", justifyContent: "center", gap: "5px" }}
                        inputStyle={styles.otpInput}
                        value={code}
                        onChange={setCode}
                        numInputs={6}
                        renderInput={(props) =>
                            <input
                                {...props}
                                style={{
                                    padding: "0",
                                    width: "35px ",
                                    height: "45px ",
                                    maxWidth: "37px",
                                    maxHeight: "35px"
                                }}
                            />
                        }
                    />
                    <p>1:25 تا ارسال مجدد کد</p>
                </div>
                <div className={styles.button}>
                    <button type="submit">ورود به تورینو</button>
                </div>
            </form >
        </>
    )
}

export default CheckOTPForm