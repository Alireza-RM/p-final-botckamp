import { useState } from 'react'

import styles from './UserInformation.module.css'

function UserInformation() {
    const [isEdit, setEisEdit] = useState(true)
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <p>اطلاعات حساب کابری</p>
            </div>
            <div className={styles.mainForm}>
                <div className={styles.oneLineDetail}>
                    <p>شماره موبایل</p>
                    <p>09224521125</p>
                </div>
                <div className={styles.oneLineDetail}  >
                    {
                        isEdit ?
                            <>
                                <p>ایمیل <span>  &nbsp; &nbsp; &nbsp; ---</span></p>
                                <div className={styles.editButton} onClick={() => setEisEdit(p => !p)}>
                                    {/* <span> */}
                                        <img src="/images/edit-2.png" alt="" />
                                    {/* </span> */}
                                    <p>افزودن</p>
                                </div>
                            </>
                            :
                            <div className={styles.emailForm}>
                                <input type="text" />
                                <button>تایید</button>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default UserInformation