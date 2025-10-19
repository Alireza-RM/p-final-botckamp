import Image from 'next/image'
import styles from './Card.module.css'
import { e2p, sp } from '../../core/utils/replaceNumber'
import { useRouter } from 'next/router'

function Card({ data }) {

    const router = useRouter()

    const { id, image, title, price, options } = data
    // console.log(data)
    return (
        <div className={styles.card} onClick={() => router.push(`/tour/${id}`)}>
            <div className={styles.image}>
                {/* <img src="/images/tour-1.png" alt="تور" /> */}
                <Image src={image} width={1000} height={1000} alt="تور" />
                {/* <img src="/images/tour.png" alt="تور" /> */}
            </div>
            <div className={styles.name}>
                <h2>{title}</h2>
                <p>{options.join(" , ")}</p>
            </div>
            <div className={styles.reserve}>
                <button onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/basket/${id}`)
                }}>رزرو</button>
                <p>
                    <span>{e2p(sp(price))}</span>
                    تومان
                </p>
            </div>
        </div>
    )
}

export default Card