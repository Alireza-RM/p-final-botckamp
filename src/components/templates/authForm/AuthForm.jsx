import SendOTPForm from './SendOTPForm'
import CheckOTPForm from './CheckOTPForm'

import { useState } from 'react'
import { usePhoneForm } from '../../../core/hooks/yupForm/usePhoneForm'

import styles from './AuthForm.module.css'

function AuthForm({ setIsModal }) {

    const [step, setStep] = useState(1)

    const { register, handleSubmit, errors, watch } = usePhoneForm()

    return (
        <div className={styles.container}>
            {step === 1
                ?
                <SendOTPForm register={register} handleSubmit={handleSubmit} errors={errors}
                    setStep={setStep} setIsModal={setIsModal} />
                :
                <CheckOTPForm watch={watch} setStep={setStep} setIsModal={setIsModal} />
            }
        </div>
    )
}

export default AuthForm