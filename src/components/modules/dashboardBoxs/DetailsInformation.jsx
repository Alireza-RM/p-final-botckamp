import { useState } from 'react'
import InputBox from './InputBox'

import styles from './DetailsInformation.module.css'
import Image from 'next/image'


function DetailsInformation({ data, title, formInputDescription, register, handleSubmit, errors, control, watch, children }) {
    const [open, setOpen] = useState(true)

    return (
        <div className={styles.box}>
            {
                open ?
                    <>
                        <div className={styles.title} onClick={() => setOpen(p => !p)}>
                            <p>{title}</p>
                            <div className={styles.editButton} >
                                <Image src="/images/edit-2.png" width={100} height={100} alt="logo"/>
                                <p>ویرایش اطلاعات</p>
                            </div>
                        </div>
                        {children}
                    </>
                    :
                    <InputBox data={data} formInputDescription={formInputDescription} register={register} handleSubmit={handleSubmit}
                        errors={errors} watch={watch} control={control} setOpen={setOpen} btn title={title} />
            }

        </div>
    )
}

export default DetailsInformation