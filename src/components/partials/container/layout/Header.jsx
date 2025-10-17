import { useRef, useState } from 'react'
import Image from 'next/image'

import ModalContainer from '../ModalContainer'
import AuthForm from '../../../templates/authForm/AuthForm'

import styles from './Header.module.css'
import { useGetUserData } from '../../../../core/services/queries'
import Link from 'next/link'
import DropDownMenu from '../DropDownMenu'

function Header() {

    const [isModal, setIsModal] = useState(false)
    const [open, setOpen] = useState(false);
    const userMenuRef = useRef(null);


    const { data, isPending } = useGetUserData();
    const { data: userData } = data || {};



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
                    <div className={styles.user} >
                        <div className={styles.signIn}>
                            {
                                userData ?
                                    <div onClick={() => setOpen(p => !p)} style={{position:"relative"}}>
                                        <p>{userData.mobile}</p>
                                        <span>
                                            <Image src="/images/arrow-down.webp" width={100} height={100} alt="arrow-down" />
                                        </span>
                                        <DropDownMenu open={open} setOpen={setOpen} ref={userMenuRef} />
                                    </div>
                                    :
                                    <div onClick={() => setIsModal(prev => !prev)}>
                                        <span>
                                            <Image src="/images/profile.webp" width={100} height={100} alt="profile" />
                                        </span>
                                        <p>ورود | ثبت نام</p>
                                    </div>
                            }
                        </div>
                    </div>

                    <div className={styles.logoLogin}  >
                        {
                            userData ?
                                <div className={styles.signInSm}>
                                    <p>{userData.mobile}</p>
                                    <span>
                                        <Image src="/images/arrow-down.webp" width={100} height={100} alt="arrow-down" />
                                    </span>
                                </div>
                                :
                                <Image src="/images/signinLogo.webp" width={100} height={100} alt="profile"
                                    onClick={() => setIsModal(prev => !prev)} />
                        }
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