import { useRef, useState } from 'react';

import styles from './HomePage.module.css'
import DropDownMenu from '../partials/container/DropDownMenu';
import Card from '../modules/Card';
import Image from 'next/image';
import SearchForm from '../modules/SearchForm';
import SliderSection from '../atoms/SliderSection';

function HomePage({ data }) {

    // const [openBeginning, setOpenBeginning] = useState(false);
    // const [openDestination, setOpenDestination] = useState(false);
    // const [openDate, setOpenDate] = useState(false);
    // const beginningRef = useRef(null);
    // const destinationRef = useRef(null);
    // const dateRef = useRef(null);

    return (
        <div className={styles.container}>
            <div className={styles.landing}>
                <Image
                    src="/images/landing-b.png"
                    width={1000} height={1000}
                    alt="Landing image" />
            </div>
            <div className={styles.all}>

                {/* //title */}
                <div className={styles.title}>
                    <h1><span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</h1>
                </div>
                {/* //searchBox */}

                <SearchForm />

                <div className={styles.titleTour}>
                    <h2>همه تورها </h2>
                </div>
                {/* //card */}
                <div className={styles.cards}>
                    {data.map(i => <Card key={i.id} data={i} />)}
                </div>
                {/* //person Number */}
                <div className={styles.info}>

                    <div className={styles.character}>
                        <div className={styles.text}>
                            <p> خرید تلفی از <span> تورینو</span> </p>
                            <p>به هرکجا که میخواهید!</p>
                        </div>
                        <div className={styles.img}>
                            <Image src="/images/imgPerson.png" width={100} height={100} alt="character" />
                        </div>
                    </div>

                    <div className={styles.phoneNumber}>
                        <div>
                            <p>021-1840</p>
                            <Image src="/images/call.webp" width={100} height={100} alt="" />
                        </div>
                        <button>اطلاعات بیشتر</button>
                    </div>

                </div>
                {/* Slider Section */}
                <SliderSection />


                {/*  */}
                <div className={styles.footerDetails}>
                    <div>
                        <Image src="/images/Group 16.webp" width={100} height={100} alt="" />
                        <div>
                            <p>بصرفه ترین قیمت</p>
                            <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/Group 17.webp" width={100} height={100} alt="" />
                        <div>
                            <p>پشتیبانی</p>
                            <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/Group 18.webp" width={100} height={100} alt="" />
                        <div>
                            <p>رضایت کاربران</p>
                            <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default HomePage