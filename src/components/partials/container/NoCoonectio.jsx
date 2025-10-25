import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './NoConnections.module.css'

function NoConnection({ notFound = false }) {
    const router = useRouter()
    return (
        <div className={styles.container}>
            {
                notFound
                    ?
                    <div className={styles.text}>
                        <p>صفحه مورد نظر یافت نشد!</p>
                        <button onClick={() => router.push("/")}>بازگشت به صفحه اصلی</button>
                    </div>
                    :
                    <div className={styles.text}>
                        <p>اتصال با سرور برقرار نیست!</p>
                        <p className={styles.pSm}>لطفا بعدا دوباره امتحان کنید.</p>
                    </div>

            }

            <div className={styles.image}>
                {
                    notFound
                        ?
                        <Image src="/images/Error TV.webp" width={700} height={700} alt='error' />
                        :
                        <Image src="/images/Error Lamp Robot.webp" width={700} height={700} alt='error' />

                }
            </div>
        </div>
    )
}

export default NoConnection