import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import AuthForm from '../../../templates/authForm/AuthForm'
import ModalContainer from '../ModalContainer'
import DropDownMenu from '../DropDownMenu'
import HamburgerMenu from '../../../modules/HamburgerMenu'
import { useGetUserData } from '../../../../core/services/queries'
import { e2p } from '../../../../core/utils/replaceNumber'

import styles from './Header.module.css'
import LogoutModal from '../../../atoms/LogoutModal'

function Header() {

    const router = useRouter()

    const [isModal, setIsModal] = useState(false)
    const [isLogoutModal, setIsLogoutModal] = useState(false)
    const [isHamberOpen, setIsHamberOpen] = useState(false)
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
                            <li>
                                <Link href="/">صفحه اصلی</Link>
                            </li>
                            <li>
                                <Link href="/tourServices">خدمات گردشگری</Link>
                            </li>
                            <li>
                                <Link href="/about-us">درباره ما</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">تماس با ما</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.hamburgerLogo} onClick={() => setIsHamberOpen(p => !p)}>
                        <Image src="/images/hbgMenu.webp" width={100} height={100} alt="hamburger-menu" />
                    </div>
                </div>

                <div className={styles.login}>
                    <div className={styles.user} >
                        <div className={styles.signIn}>
                            {
                                userData ?
                                    <div onClick={() => setOpen(p => !p)} style={{ position: "relative" }}>
                                        <div className={styles.phone}>
                                            <p>{e2p(userData.mobile)}</p>
                                            <span className={`${open ? styles.openDrop : ""}`}>
                                                <Image src="/images/arrow-down.webp" width={100} height={100} alt="arrow-down" />
                                            </span>
                                        </div>
                                        <DropDownMenu open={open} setOpen={setOpen} ref={userMenuRef} >
                                            <div className={`${styles.dropDownChild} ${styles.menuItem} ${styles.menuItemFixed}`}>
                                                <div className={styles.avatar_icon}>
                                                    <Image src="/images/profile (2).png" width={100} height={100} alt="profile-logo" />
                                                </div>
                                                <p>{e2p(userData.mobile)}</p>
                                            </div>
                                            <div className={styles.dropDownChild}
                                                onClick={() => router.push("/dashboard/profile")} >
                                                <div>
                                                    <Image src="/images/profile (3).png" width={100} height={100} alt="profile-logo" />
                                                </div>
                                                <div >
                                                    <p>اطلاعات حساب کاربری</p>
                                                </div>
                                            </div>
                                            <div className={styles.dropDownChild} onClick={() => setIsLogoutModal(p => !p)}>
                                                <div>
                                                    <Image src="/images/logout.png" width={100} height={100} alt="profile-logo" />
                                                </div>
                                                <div className={styles.logout}>
                                                    <p>خروج از حساب کاربری</p>
                                                </div>
                                            </div>
                                        </DropDownMenu>
                                    </div>
                                    :
                                    <div className={styles.loginSm} onClick={() => setIsModal(prev => !prev)}>
                                        <span>
                                            <Image src="/images/profile.webp" width={100} height={100} alt="profile" />
                                            <p>ورود | ثبت نام</p>
                                        </span>
                                        <div >
                                            <Image src="/images/signinLogo.webp" width={100} height={100} alt="profile" />
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {isModal &&
                <ModalContainer setIsModal={setIsModal}>
                    <AuthForm setIsModal={setIsModal} />
                </ModalContainer>
            }
            {isLogoutModal &&
                <ModalContainer setIsModal={setIsLogoutModal}>
                    <LogoutModal setIsModal={setIsLogoutModal} />
                </ModalContainer>
            }
            <HamburgerMenu className={styles.hamberMenu} isHamberOpen={isHamberOpen} setIsHamberOpen={setIsHamberOpen} />
        </div>
    )
}
export default Header