import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.all}>


                <div className={styles.bottomFooter}>


                    <div className={styles.links}>
                        <div className={styles}>
                            <ul>
                                <li>تورینو</li>
                                <li>
                                    <Link href="/about-us">درباره ما</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us">تماس با ما</Link>
                                </li>
                                <li>چرا تورینو</li>
                                <li>بیمه مسافرتی</li>
                            </ul>
                        </div>
                        <div className={styles}>
                            <ul>
                                <li>خدمات مشتریان</li>
                                <li>پشتیبانی آنلاین</li>
                                <li>راهنمای خرید</li>
                                <li>راهنمای استرداد</li>
                                <li>پرسش و پاسخ</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.logos}>

                        <div className={styles.logo}>
                            <Image src="/images/logosFooter/state-airline-f45c55b2 1.webp" width={100} height={100} alt='logo' />
                            <Image src="/images/logosFooter/passenger-rights-48368f81 1.webp" width={100} height={100} alt='logo' />
                            <Image src="/images/logosFooter/ecunion-35c3c933.webp" width={100} height={100} alt='logo' />
                            <Image src="/images/logosFooter/samandehi-6e2b448a.webp" width={100} height={100} alt='logo' />
                            <Image src="/images/logosFooter/aira-682b7c43.webp" width={100} height={100} alt='logo' />
                        </div>


                        <div className={styles.phoneNumber}>
                            <div>
                                <Image src="/images/Torino.webp" width={100} height={100} alt="torinoLogo" />
                            </div>
                            <span>
                                <p>تلفن پشتیبانی:</p>
                                <p>021-8574</p>
                            </span>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
            </div>

        </div>
    )
}

export default Footer