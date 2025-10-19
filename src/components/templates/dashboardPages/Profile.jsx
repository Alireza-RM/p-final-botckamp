import DetailsInformation from '../../modules/dashboardBoxs/DetailsInformation'
import UserInformation from '../../modules/dashboardBoxs/userInformation'

import styles from './Profile.module.css'

function Profile() {
    return (
        <div className={styles.container}>
            <UserInformation />
            <DetailsInformation title="اطلاعات شخصی">
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
            <DetailsInformation title="اطلاعات حساب بانکی">
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