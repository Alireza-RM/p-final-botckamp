import styles from './Loader.module.css'

function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loaderCircle}></div>
            <div className={styles.loaderCircle}></div>
            <div className={styles.loaderCircle}></div>
        </div>
    );
}

export default Loader