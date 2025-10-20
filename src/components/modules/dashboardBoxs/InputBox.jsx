import Image from 'next/image'
import styles from './InputBox.module.css'

function InputBox({ formInputDescription, register, handleSubmit, errors, setOpen, btn = false }) {


    const submitHandler = (data) => {
        console.log(data)
        console.log("data")
    }

    return (
        <form className={styles.box} onSubmit={handleSubmit(submitHandler)}>
            {/* // <form className={styles.box} onSubmit={submitHandler}> */}
            <div className={styles.title}>
                <span>
                    <Image src="/images/profile (1).png" width={100} height={100} alt="" />
                </span>
                <p>مشخصات مسافر</p>
            </div>

            {
                formInputDescription.map(i =>
                    <input key={i.name} {...register(i.name)} placeholder={i.placeholder} />
                )
            }
            {/* <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" /> */}
            {/* Button */}
            {
                btn &&
                <div className={styles.buttons}>
                    <button type='onSubmit'>تایید</button>
                    <button onClick={() => setOpen(p => !p)}>انصراف</button>
                </div>
            }

        </form>
    )
}

export default InputBox