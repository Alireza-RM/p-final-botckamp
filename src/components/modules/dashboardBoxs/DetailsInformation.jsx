import { useState } from 'react'
import InputBox from './InputBox'

import styles from './DetailsInformation.module.css'


function DetailsInformation({ title, formInputDescription, register, handleSubmit, errors, children }) {
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
                    <InputBox formInputDescription={formInputDescription} register={register} handleSubmit={handleSubmit} errors={errors} setOpen={setOpen} btn />
            }

        </div>
    )
}

export default DetailsInformation