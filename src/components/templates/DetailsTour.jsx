import Image from 'next/image'
import styles from './DetailsTour.module.css'
import { e2p, sp } from '../../core/utils/replaceNumber'
import { convertDateToPersian } from '../../core/utils/convertDate'
import { useAddBasket } from '../../core/services/mutations'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { difrentDate } from '../../core/utils/difrentTowDate'
import { convertVehicle } from '../../core/utils/convertVehicle'
import { citysFilterData } from '../../core/constant/citiysData'

function DetailsTour({ data }) {

  const { id, title, image, options, origin, destination, fleetVehicle,
    price, startDate, endDate, availableSeats, insurance } = data
  console.log(data)

  const { day, month, year } = convertDateToPersian(startDate, true)
  const { day: day2, month: month2, year: year2 } = convertDateToPersian(endDate, true)

  const router = useRouter()

  const { mutate, isPending } = useAddBasket()

  const submitHandler = () => {
    if (isPending) return;

    mutate(
      id,
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message)
          router.push("/basket")
        },
        onError: (error) => {
          if (error.message === "Access token required") toast.error("ابتدا وارد حساب کاربریتون شوید")
        }
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.all}>
        <div className={styles.detailBox}>

          <div className={styles.images}>
            <Image src={image} width={1000} height={1000} alt="" />
          </div>

          <div className={styles.name}>
            <div className={styles.dates}>
              <h1>تور هولیر</h1>
              <p>{difrentDate(startDate, endDate)}</p>
            </div>
            <div className={styles.features}>
              <div className={styles.logoName}>
                <Image src="/images/logosDetailsPage/user-tick.png" width={400} height={400} alt="logo" />
                <p>تورلیدر از مبدا</p>
              </div>
              <div className={styles.logoName}>
                <Image src="/images/logosDetailsPage/map.png" width={400} height={400} alt="logo" />
                <p>برنامه سفر</p>
              </div>
              <div className={styles.logoName}>
                <Image src="/images/logosDetailsPage/medal-star.png" width={400} height={400} alt="logo" />
                <p>تضمین کیفیت</p>
              </div>
            </div>
          </div>
          {/* //////////// */}

          <div className={styles.reserve}>
            <button onClick={() => submitHandler()}>رزرو و خرید</button>
            <p>
              <span>{e2p(sp(price))}</span>
              تومان
            </p>
          </div>

          <div className={styles.allDetails}>
            <div style={{ border: "none" }}>
              <div className={styles.logoName} >
                <img src="/images/logosDetailsPage/routing-2.png" alt="logo" />
                <p>مبدا</p>
              </div>
              <div>
                <p>{citysFilterData(+origin.id)}</p>
              </div>
            </div>
            <div>
              <div className={styles.logoName}>
                <img src="/images/logosDetailsPage/calendar (2).png" alt="logo" />
                <p>تاریخ رفت</p>
              </div>
              <div>
                <p style={{ display: "flex", flexDirection: "row-reverse", gap: "5px" }}>
                  <span>{year}</span>
                  <span>{month}</span>
                  <span>{day}</span>
                </p>

              </div>
            </div>
            <div>
              <div className={styles.logoName}>
                <img src="/images/logosDetailsPage/calendar (2).png" alt="logo" />
                <p>تاریخ </p>
              </div>
              <div>
                <p style={{ display: "flex", flexDirection: "row-reverse", gap: "5px" }}>
                  <span>{year2}</span>
                  <span>{month2}</span>
                  <span>{day2}</span>
                </p>

              </div>
            </div>
            <div>
              <div className={styles.logoName}>
                <img src="/images/logosDetailsPage/bus.png" alt="logo" />
                <p>حمل و نقل</p>
              </div>
              <div>
                <p>{convertVehicle(fleetVehicle)}</p>

              </div>
            </div>
            <div>
              <div className={styles.logoName}>
                <img src="/images/logosDetailsPage/profile-2user.png" alt="logo" />
                <p>ظرفیت</p>
              </div>
              <div>
                <p>حداکثر {availableSeats}  نفر</p>

              </div>
            </div>
            <div>
              <div className={styles.logoName}>
                <img src="/images/logosDetailsPage/security.png" alt="logo" />
                <p>بیمه</p>
              </div>
              <div>
                <p>
                  {
                    insurance ? " بیمه 50 هزار دیناری" : "❌"
                  }
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DetailsTour