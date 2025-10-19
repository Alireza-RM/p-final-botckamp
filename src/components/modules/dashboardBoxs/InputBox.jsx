import Image from 'next/image'
import styles from './InputBox.module.css'

function InputBox({ setOpen, btn = false }) {
    return (


        <div className={styles.box}>
            <div className={styles.title}>
                <span>
                    <Image src="/images/profile (1).png" width={100} height={100} alt="" />
                </span>
                <p>مشخصات مسافر</p>
            </div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            {/* Button */}
            {
                btn &&
                <div className={styles.buttons}>
                    <button>تایید</button>
                    <button onClick={() => setOpen(p => !p)}>انصراف</button>
                </div>
            }

        </div>
    )
}

export default InputBox