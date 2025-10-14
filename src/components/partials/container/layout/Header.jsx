import { useState } from 'react'
import Image from 'next/image'

import ModalContainer from '../ModalContainer'
import AuthForm from '../../../templates/authForm/authForm'

import styles from './Header.module.css'

function Header() {

    const [isModal, setIsModal] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.all}>

                <div className={styles.navbar}>
                    <div className={styles.navList}>
                        <div>
                            <Image src="/images/Torino.webp" width={100} height={100} alt="torino-logo" />
                        </div>
                        <ul>
                            <li>صفحه اصلی</li>
                            <li>خدمات گردشگری</li>
                            <li>درباره ما</li>
                            <li>تماس با ما</li>
                        </ul>
                    </div>

                    <div className={styles.hamburgerLogo}>
                        <Image src="/images/hbgMenu.webp" width={100} height={100} alt="hamburger-menu" />
                    </div>
                </div>

                <div className={styles.login}>
                    <div className={styles.user} onClick={() => setIsModal(prev => !prev)}>
                        <div className={styles.signIn}>
                            <span>
                                <Image src="/images/profile.webp" width={100} height={100} alt="profile" />
                            </span>
                            <p>ورود | ثبت نام</p>
                            {/* <div>
                                <p>09224526847</p>
                                <span>
                                    <Image src="/images/arrow-down.webp" width={100} height={100} alt="arrow-down" />
                                </span>
                            </div> */}
                        </div>
                    </div>
                    <div className={styles.logoLogin} onClick={() => setIsModal(prev => !prev)} >
                        <Image src="/images/signinLogo.webp" width={100} height={100} alt="profile" />
                    </div>
                </div>
            </div>
            {isModal &&
                <ModalContainer setIsModal={setIsModal}>
                    <AuthForm setIsModal={setIsModal} />
                </ModalContainer>
            }
        </div>
    )
}
export default Header