import SendOTPForm from './SendOTPForm'
import CheckOTPForm from './CheckOTPForm'

import { useState } from 'react'
import { usePhoneForm } from '../../../core/hooks/yupForm/usePhoneForm'

import styles from './AuthForm.module.css'
import { useSendOtp } from '../../../core/services/mutations'
import toast from 'react-hot-toast'

function AuthForm({ setIsModal }) {

    const [step, setStep] = useState(1)

    const { register, handleSubmit, errors, watch } = usePhoneForm()
    const { mutate, isPending } = useSendOtp()


    const submitHandler = () => {

        const mobile = watch("mobile")

        if (isPending) return;

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
                    toast.error("مشکلی در ارسال اطلاعات پیش آمده است")
                    console.log(error);
                },
            }
        );
    }

    return (
        <div className={styles.container}>
            {step === 1
                ?
                <SendOTPForm register={register} handleSubmit={handleSubmit} errors={errors}
                    setStep={setStep} setIsModal={setIsModal} submitHandler={submitHandler} />
                :
                <CheckOTPForm watch={watch} setStep={setStep} setIsModal={setIsModal} submitHandler={submitHandler} />
            }
        </div>
    )
}

export default AuthForm