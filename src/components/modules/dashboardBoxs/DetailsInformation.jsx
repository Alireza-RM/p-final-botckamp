import { Children, useState } from 'react'
import styles from './DetailsInformation.module.css'
import InputBox from './InputBox'

function DetailsInformation({ title, children }) {
    const [open, setOpen] = useState(true)

    return (
        <div className={styles.box}>
            {
                open ?
                    <>
                        <div className={styles.title} onClick={() => setOpen(p => !p)}>
                            <p>{title}</p>
                            <div className={styles.editButton} >
                                <img src="/images/edit-2.png" alt="" />
                                <p>ویرایش اطلاعات</p>
                            </div>
                        </div>
                        {children}
                    </>
                    :
                    <InputBox setOpen={setOpen} btn />
            }

        </div>
    )
}

export default DetailsInformation