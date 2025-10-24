import React, { useState } from "react";
import styles from "./SliderImage.module.css";
import { e2p } from "../../core/utils/replaceNumber";

const images = [
    "/images/slider/car-4260033_1280.png",
    "/images/slider/image_SI3sJmh4_1727080822376_raw.png",
    "/images/slider/rrrrr.png",
    "/images/slider/gggg.png",
];

function SliderImage({ current, setCurrent }) {
    const total = images.length;

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderStack}>
                {images.map((img, index) => {

                    let offset = (index - current + total) % total;

                    if (offset > 3) offset = -1; // بقیه مخفی بشن

                    return (
                        <div
                            key={index}
                            className={`${styles.slide} ${offset === 0 ? styles.active : ""}`}
                            style={{
                                backgroundImage: `url(${img})`,
                                transform:
                                    offset === -1
                                        ? "translateX(-80px) scale(0.8)"
                                        : `translateX(${offset * -40}px) scale(${1 - offset * 0.1})`,
                                zIndex: offset === -1 ? 0 : total - offset,
                                opacity: offset === -1 ? 0 : 1,
                            }}
                        />
                    );
                })}
            </div>

            <div className={styles.sliderControls}>
                <button onClick={nextSlide}> &lt;-</button>
                <span>
                    {e2p(total)} / {e2p(current + 1)}
                </span>
                <button onClick={prevSlide}>-&gt;</button>
            </div>
        </div>
    );
}
export default SliderImage