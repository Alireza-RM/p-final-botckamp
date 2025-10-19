import styles from './TourBox.module.css'

function TourBox() {
    return (
        <div className={styles.box}>

            <div className={styles.topBox}>
                <div className={styles.upBox}>
                    <div className={styles.badge}>
                        <div className={styles.success}>به اتمام رسیده</div>
                    </div>
                    <div className={styles.date}>
                        <div>
                            <img src="/images/sun-fog.png" alt="logo" />
                            تور اقلیم کردستان
                        </div>
                        <div>
                            <img src="/images/airplane.png" alt="logo" />
                            سفر با هواپیما
                        </div>
                    </div>
                </div>
                <div className={styles.detailsBox}>
                    <div>
                        <p>تهران به سلیمانیه </p>
                        <p><span></span> دوشنبه 15 شهریور 1402</p>
                    </div>
                    <div>
                        <p>تاریخ برگشت</p>
                        <p><span></span>جمعه  19 شهریور 1402</p>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBox}>
                <div>
                    <p>شماره تور</p>
                    <p>102095404</p>
                </div>
                <div>
                    <p>مبلغ پرداخت شده</p>
                    <p>18,000,000 <span>تومان</span> </p>
                </div>
            </div>

        </div>
    )
}

export default TourBox