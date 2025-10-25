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
import DatePickerRange from './DatePickerRange';
import { convertDateEnToDateFa, convertDateEnToEn } from '../../core/utils/convertDate';
import { date } from 'yup';
import { e2p } from '../../core/utils/replaceNumber';





function SearchForm() {

    const { getQuery } = useQuery();

    const [openBeginning, setOpenBeginning] = useState(false);
    const [openDestination, setOpenDestination] = useState(false);
    const beginningRef = useRef(null);
    const destinationRef = useRef(null);

    const router = useRouter();

    const { handleSubmit, control, reset, watch } = useForm();

    useEffect(() => {
        const originId = getQuery("originId");
        const destinationId = getQuery("destinationId");
        const startDate = getQuery("startDate");
        const endDate = getQuery("endDate");

        if (startDate && endDate) {
            reset({
                date: {
                    from: startDate,
                    to: endDate,
                },
                destinationId,
                originId,
            });
        } else {
            reset({
                originId,
                destinationId,
            });
        }
    }, [router]);


    const submitHandler = (formData) => {
        let newData;
        if (formData?.date?.from && formData?.date?.to) {
            newData = {
                date: {
                    startDate: formData.date.from,
                    endDate: formData.date.to
                }
            }
        }
        if (formData?.originId) {
            newData = {
                ...newData,
                originId: formData.originId,
            }
        }
        if (formData?.destinationId) {
            newData = {
                ...newData,
                destinationId: formData.destinationId,
            }
        }
        if (!newData) return
        const query = QueryString.stringify(flattenObject(newData));
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
                                }} style={{ borderBottom: "2px solid #00000012", display: "flex", gap: "5px", padding: "10px", cursor: "pointer" }}>
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
                                citys.map(i =>
                                    <div key={i.id} onClick={() => {
                                        onChange(i.id);
                                        setOpenDestination(false);
                                    }} style={{ borderBottom: "2px solid #00000012", display: "flex", gap: "5px", padding: "10px", cursor: "pointer" }}>
                                        <Image src="/images/location.png" width={100} height={100} alt="" />
                                        <p>{i.name}</p>
                                    </div>)
                            }
                        </DropDownMenu>
                    )}
                />
            </div>

            <div className={styles.date}>
                <div className={styles.showDate}>
                    {watch("date")?.from && watch("date")?.to ?
                        <p>{e2p(convertDateEnToDateFa(watch("date")?.from))}
                            &nbsp; - &nbsp; {e2p(convertDateEnToDateFa(watch("date")?.to))}</p>
                        :
                        <div className={styles.div}>
                            <span>
                                <Image src="/images/calendar.png" width={100} height={100} alt="" />
                            </span>
                            <p>تاریخ</p>
                        </div>
                    }
                </div>
                <DatePickerRange control={control} />
            </div>


            <button className={styles.button} type="onSubmit">
                <p type="onSubmit">جستجو</p>
            </button>

        </form>
    )
}
export default SearchForm