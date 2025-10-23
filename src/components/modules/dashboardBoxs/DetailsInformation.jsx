import { useState } from 'react'
import InputBox from './InputBox'

import styles from './DetailsInformation.module.css'


function DetailsInformation({ data, title, formInputDescription, register, handleSubmit, errors, control, children }) {
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
                    <InputBox data={data} formInputDescription={formInputDescription} register={register} handleSubmit={handleSubmit}
                        errors={errors} control={control} setOpen={setOpen} btn title={title} />
            }

        </div>
    )
}

export default DetailsInformation