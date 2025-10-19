import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import styles from './DashboardLayout.module.css'



function DashboardLayout({ children }) {
    const router = useRouter()
    const { dashboardSection } = router.query


    if (dashboardSection &&
        dashboardSection !== "profile" &&
        dashboardSection !== "userTours" &&
        dashboardSection !== "transactions") router.replace("/404")



    return (
        <div className={styles.container}>
            <div className={styles.all}>
                <div>
                    <div className={styles.navProfile}>
                        <Link href="/dashboard/profile" className={`${styles.link} ${dashboardSection === "profile" && styles.active}`}>
                            <div className={styles.logoName}>
                                <Image src="/images/logosDetailsPage/user-tick.png" width={100} height={100} alt="logo" />
                                <p>پروفایل</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/userTours" className={`${styles.link} ${dashboardSection === "userTours" && styles.active}`}>
                            <div className={styles.logoName}>
                                <Image src="/images/logosDetailsPage/map.png" width={100} height={100} alt="logo" />
                                <p>تور های من</p>
                            </div>
                        </Link>
                        <Link href="/dashboard/transactions" className={`${styles.link} ${dashboardSection === "transactions" && styles.active}`}>
                            <div className={styles.logoName}>
                                <Image src="/images/logosDetailsPage/medal-star.png" width={100} height={100} alt="logo" />
                                <p>تراکنش ها</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div >
    )
}

export default DashboardLayout