import styles from './ModalContainer.module.css'

function ModalContainer({ children, setIsModal }) {
    return (
        <div className={styles.modal} >
            <div className={styles.modalBackground} onClick={() => setIsModal(prev => !prev)}></div>
            <div className={styles.modalCenter}>
                {children}
            </div>
        </div>
    )
}

export default ModalContainer