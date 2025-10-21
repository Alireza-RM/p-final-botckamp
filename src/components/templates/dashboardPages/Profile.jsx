import { useEffect } from 'react'
import { usePersonalInformation, useProfileForms } from '../../../core/hooks/yupForm/profile/usePersonalInformation'
import { useProfileUser } from '../../../core/services/queries'
import DetailsInformation from '../../modules/dashboardBoxs/DetailsInformation'
import UserInformation from '../../modules/dashboardBoxs/userInformation'

import styles from './Profile.module.css'
import { useBankAccount } from '../../../core/hooks/yupForm/profile/useBankAccount'
import { convertDateEnToDateFa } from '../../../core/utils/convertDate'
import { e2p } from '../../../core/utils/replaceNumber'

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

    const { register, handleSubmit, errors, control, reset } = usePersonalInformation()
    const { register: reg2, handleSubmit: handel2, errors: errors2, reset: reset2 } = useBankAccount()


    const { data, isPending } = useProfileUser()
    console.log(isPending)

    useEffect(() => {
        if (data) {
            console.log(data.data);
            reset({
                firstName: data.data.firstName,
                nationalCode: data.data.nationalCode,
                birthDate: data.data.birthDate,
                gender: data.data.gender,
            })
            reset2({
                payment: {
                    shaba_code: data.data.payment.shaba_code,
                    debitCard_code: data.data.payment.debitCard_code,
                    accountIdentifier: data.data.payment.accountIdentifier,
                }
            })
        }
    }, [data]);


    return (
        <div className={styles.container}>
            <UserInformation data={data?.data} />

            <DetailsInformation data={data?.data} title="اطلاعات شخصی" formInputDescription={formInputDescription.slice(0, 4)}
                register={register} handleSubmit={handleSubmit} errors={errors} control={control} reset={reset}>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>نام و نام خانوادگی</div>
                        <div>{data?.data?.firstName || "---"}</div>
                    </div>
                    <div className={styles.oneLineDetail}>
                        <div>کد ملی</div>
                        <div>{(data?.data?.nationalCode && e2p(data?.data?.nationalCode)) || "---"}</div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>جنسیت</div>
                        <div>زن</div>
                    </div>
                    <div className={styles.oneLineDetail}>
                        <div>تاریخ تولد</div>
                        <div>{(data?.data?.birthDate && convertDateEnToDateFa(data?.data?.birthDate)) || "---"}</div>
                    </div>
                </div>
            </DetailsInformation>

            <DetailsInformation data={data?.data} title="اطلاعات حساب بانکی" formInputDescription={formInputDescription.slice(4, 7)}
                register={reg2} handleSubmit={handel2} errors={errors2} control={{}} reset={reset2}>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>شماره شبا</div>
                        <div>
                            {(data?.data?.payment?.shaba_code && e2p(data?.data?.payment?.shaba_code)) || "---"}
                        </div>
                    </div>
                    <div className={styles.oneLineDetail}>
                        <div>شماره کارت</div>
                        <div>{(data?.data?.payment?.debitCard_code && e2p(data?.data?.payment?.debitCard_code)) || "---"}</div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.oneLineDetail}>
                        <div>شماره حساب</div>
                        <div> {(data?.data?.payment?.accountIdentifier && e2p(data?.data?.payment?.accountIdentifier)) || "---"} </div>
                    </div>
                    <div className={styles.oneLineDetail}>

                    </div>
                </div>
            </DetailsInformation>
        </div>
    )
}

export default Profile