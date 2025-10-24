import Image from 'next/image'

import { convertVehicle } from '../../core/utils/convertVehicle'
import { convertDateToPersian } from "../../core/utils/convertDate"
import { e2p, sp } from '../../core/utils/replaceNumber'
import { citysFilterData } from '../../core/constant/citiysData'

import styles from './TourBox.module.css'

function TourBox({ data }) {
    console.log(data)
    return (
        <div className={styles.box}>

            <div className={styles.topBox}>
                <div className={styles.upBox}>
                    <div className={styles.badge}>
                        <div className={styles.success}>به اتمام رسیده</div>
                    </div>
                    <div className={styles.date}>
                        <div className={styles.imageLogo}>
                            <Image src="/images/sun-fog.png" width={100} height={100} alt="logo" />
                            {data?.title}
                        </div>
                        <div className={styles.imageLogo}>
                            <Image style={{ width: `${data?.fleetVehicle === "Airplane" && "32px"}`, height: `${data?.fleetVehicle === "Airplane" && "30px"}` }}
                                src={`/images/vehicle/${data?.fleetVehicle}.webp`} width={100} height={100} alt="logo" />
                            سفر با {convertVehicle(data?.fleetVehicle)}
                        </div>
                    </div>
                </div>
                <div className={styles.detailsBox}>
                    <div>
                        <p>{citysFilterData(+data?.origin?.id)} به {citysFilterData(+data?.destination?.id)} </p>
                        <p><span></span>{convertDateToPersian(data.startDate)}</p>
                    </div>
                    <div>
                        <p>تاریخ برگشت</p>
                        <p><span></span>{convertDateToPersian(data.endDate)}</p>
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
                    <p>{e2p(sp(data.price))}  <span>تومان</span> </p>
                </div>
            </div>

        </div>
    )
}

export default TourBox