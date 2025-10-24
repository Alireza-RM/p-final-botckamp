import Image from 'next/image'
import DropDownMenu from '../partials/container/DropDownMenu'
import styles from './SearchForm.module.css'
import { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "zaman";
import QueryString from "qs";
import { useRouter } from 'next/router';
import { flattenObject } from '../../core/utils/helpers';
import useQuery from '../../core/hooks/queryURL';
import { citys, citysFilterData } from '../../core/constant/citiysData';





function SearchForm() {

    const [openBeginning, setOpenBeginning] = useState(false);
    const [openDestination, setOpenDestination] = useState(false);
    // const [openDate, setOpenDate] = useState(false);
    const beginningRef = useRef(null);
    const destinationRef = useRef(null);
    // const dateRef = useRef(null);

    const router = useRouter();

    const { register, handleSubmit, control, reset, watch } = useForm();
    const { getQuery } = useQuery();


    useEffect(() => {
        const originId = getQuery("originId");
        const destinationId = getQuery("destinationId");

        if (originId && destinationId) {
            reset({ originId, destinationId })
        } else if (originId) {
            reset({ originId })
        } else if (destinationId) {
            reset({ destinationId })
        }
    }, []);

    const submitHandler = (formData) => {
        console.log(formData)
        const query = QueryString.stringify(flattenObject(formData));
        router.push(`/?${query}`);
    }

    return (
        <form className={styles.searchBox} onSubmit={handleSubmit(submitHandler)}>

            <div className={styles.beginning} >
                <div className={styles.div} onClick={() => setOpenBeginning(p => !p)}>
                    <span>
                        <Image src="/images/location.png" width={100} height={100} alt="" />
                    </span>
                    <p>
                        {
                            citysFilterData(+watch("originId")) || "مبدا"
                        }
                    </p>
                </div>
                <Controller
                    name="originId"
                    control={control}
                    render={({ field: { onChange } }) => (
                        <DropDownMenu open={openBeginning} setOpen={setOpenBeginning} ref={beginningRef} >
                            {
                                citys.map(i => <div key={i.id} onClick={() => {
                                    onChange(i.id);
                                    setOpenBeginning(false);
                                }} style={{ borderBottom: "1px solid #000", display: "flex", padding: "10px", cursor: "pointer" }}>
                                    <Image src="/images/location.png" width={100} height={100} alt="" />
                                    <p>{i.name}</p>
                                </div>)
                            }
                        </DropDownMenu>
                    )}
                />
            </div>



            <div className={styles.destination} >
                <div className={styles.div} onClick={() => setOpenDestination(p => !p)}>
                    <span>
                        <Image src="/images/global-search.png" width={100} height={100} alt="" />
                    </span>
                    <p>
                        {
                            citysFilterData(+watch("destinationId")) || "مقصد"
                        }
                    </p>
                </div>
                <Controller
                    name="destinationId"
                    control={control}
                    render={({ field: { onChange } }) => (
                        <DropDownMenu open={openDestination} setOpen={setOpenDestination} ref={destinationRef} >
                            {
                                citys.map(i => <div key={i.id} onClick={() => {
                                    onChange(i.id);
                                    setOpenDestination(false);
                                }} style={{ borderBottom: "1px solid #000", display: "flex", padding: "10px", cursor: "pointer" }}>
                                    <Image src="/images/location.png" width={100} height={100} alt="" />
                                    <p>{i.name}</p>
                                </div>)
                            }
                        </DropDownMenu>
                    )}
                />
            </div>






            <div className={styles.date}>
                {/* <div className={styles.div} onClick={() => setOpenDate(p => !p)}>

                    <span>
                        <Image src="/images/calendar.png" width={100} height={100} alt="" />
                    </span>
                    <p>تاریخ</p>
                </div> */}
                {/* <DropDownMenu open={openDate} setOpen={setOpenDate} ref={dateRef} /> */}
                <Controller
                    control={control}
                    name="date"
                    render={({ field: { onChange } }) => (
                        <DatePicker
                            onChange={(e) => onChange({ startDate: e.from, endDate: e.to })}
                            range
                            accentColor='#28A745'
                        />
                    )}
                />
            </div>


            <button className={styles.button} type="onSubmit">
                <p type="onSubmit">جستجو</p>
            </button>

        </form>
    )
}
export default SearchForm