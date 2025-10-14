
import SendOTPForm from './SendOTPForm'
import CheckOTPForm from './CheckOTPForm'

import styles from './AuthForm.module.css'
import { useState } from 'react'


function AuthForm({ setIsModal }) {

    const [step, setStep] = useState(1)
    const [mobile, setMobile] = useState("")



    return (
        <div className={styles.container}>
            {step === 1
                ?
                <SendOTPForm mobile={mobile} setMobile={setMobile} step={step} setStep={setStep} setIsModal={setIsModal} />
                :
                <CheckOTPForm mobile={mobile} setStep={setStep} setIsModal={setIsModal}/>
            }

            {/* <CheckOTPForm /> */}
            {/* <SendOTPForm /> */}

            {/* {step === 2 && <CheckOTPForm setStep={setStep} />} */}
        </div>
    )
}

export default AuthForm