import { useEffect } from 'react'
import { usePersonalInformation, useProfileForms } from '../../../core/hooks/yupForm/profile/usePersonalInformation'
import { useProfileUser } from '../../../core/services/queries'
import DetailsInformation from '../../modules/dashboardBoxs/DetailsInformation'
import UserInformation from '../../modules/dashboardBoxs/userInformation'

import styles from './Profile.module.css'
import { useBankAccount } from '../../../core/hooks/yupForm/profile/useBankAccount'

const formInputDescription = [
    { name: "firstName", placeholder: "نام و نام خانوادگی" },
    { name: "nationalCode", placeholder: "کدملی" },
    { name: "birthDate", placeholder: "تاریخ تولد" },
    { name: "gender", placeholder: "جنسیت" },
    { name: "shaba_code", placeholder: "شماره شبا" },
    { name: "debitCard_code", placeholder: "شماره کارت" },
    { name: "accountIdentifier", placeholder: "شماره حساب" },
]



function Profile() {

    const { register, handleSubmit, errors, reset } = usePersonalInformation()
    const { register: reg2, handleSubmit: handl2, errors: errors2, reset: reset2 } = useBankAccount()


    const { data, isPending } = useProfileUser()
    console.log(isPending)

    useEffect(() => {
        if (data) {
            console.log(data.data);
        }
    }, [data]);


    return (
        <div className={styles.container}>
            <UserInformation />

            <DetailsInformation title="اطلاعات شخصی" formInputDescription={formInputDescription.slice(0, 4)}
                register={register} handleSubmit={handleSubmit} errors={errors} reset={reset}>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>نام و نام خانوادگی</div>
                        <div>مانیا رحیمی</div>
                    </div>
                    <div className={styles.oneLineDetail}>
                        <div>کد ملی</div>
                        <div>3721156232</div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>جنسیت</div>
                        <div>زن</div>
                    </div>
                    <div className={styles.oneLineDetail}>
                        <div>تاریخ تولد</div>
                        <div>1383/10/17</div>
                    </div>
                </div>
            </DetailsInformation>

            <DetailsInformation title="اطلاعات حساب بانکی" formInputDescription={formInputDescription.slice(4, 7)}
                register={reg2} handleSubmit={handl2} errors={errors2} reset={reset2}>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>شماره شبا</div>
                        <div> --- </div>
                    </div>
                    <div className={styles.oneLineDetail}>
                        <div>شماره کارت</div>
                        <div>6037991752468520</div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>شماره حساب</div>
                        <div> --- </div>
                    </div>
                    <div className={styles.oneLineDetail}>
                        {/* <div>تاریخ تولد</div>
                        <div>1383/10/17</div> */}
                    </div>
                </div>
            </DetailsInformation>
        </div>
    )
}

export default Profile