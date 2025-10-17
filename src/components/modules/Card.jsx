import Image from 'next/image'
import styles from './Card.module.css'

function Card({ data }) {
    const { id, image, title, price, options } = data
    console.log(data)
    return (
        <div className={styles.card}>
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
                <button>رزرو</button>
                <p>
                    <span>{price}</span>
                    تومان
                </p>
            </div>
        </div>
    )
}

export default Card