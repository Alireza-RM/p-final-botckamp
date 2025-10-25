import { useRouter } from 'next/router'
import { clearAllCookies } from '../../core/utils/cookie'
import styles from './LogoutModal.module.css'

function LogoutModal({ setIsModal }) {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <p>آیا میخواهید از حساب کاربری خارج شوی ؟</p>
            <div className={styles.buttons}>
                <button onClick={() => {
                    clearAllCookies()
                    setIsModal(false)
                    router.reload()
                }}>تایید</button>
                <button onClick={() => setIsModal(false)}>انصراف</button>
            </div>
        </div>
    )
}

export default LogoutModal