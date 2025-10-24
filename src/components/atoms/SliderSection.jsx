import Image from 'next/image'
import styles from './SliderSection.module.css'
import SliderImage from './SliderImage'
import { useState } from 'react';
import { sliderDetails } from '../../core/constant/sliderDetails';

function SliderSection() {
    const [current, setCurrent] = useState(0);

    return (
        <div className={styles.sliderSection}>
            <div className={styles.descriptions}>
                <div className={styles.logo}>
                    <Image src="/images/slider/group6.webp" width={100} height={100} alt='logo' />
                    <p>چرا <span>تورینو</span> ؟</p>
                    <Image src="/images/slider/question.webp" width={100} height={100} alt='logo' />
                </div>
                <div className={styles.text}>
                    <h3>{sliderDetails[current].text}</h3>
                    <p>{sliderDetails[current].description}</p>
                </div>
            </div>
            <div className={styles.sliderImg}>
                <SliderImage current={current} setCurrent={setCurrent} />
            </div>
        </div>
    )
}

export default SliderSection