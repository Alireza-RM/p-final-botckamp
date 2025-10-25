import { useEffect } from 'react'
import { usePersonalInformation } from '../../core/hooks/yupForm/profile/usePersonalInformation'
import InputBox from '../modules/dashboardBoxs/InputBox'
import styles from './BasketPage.module.css'
import { useGetBasket } from '../../core/services/queries'
import { e2p, sp } from '../../core/utils/replaceNumber'
import { difrentDate } from '../../core/utils/difrentTowDate'
import { convertDateEnToEn } from '../../core/utils/convertDate'
import { useSendOrder } from '../../core/services/mutations'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Loader from '../atoms/Loader'


const formInputDescription = [
  { name: "firstName", placeholder: "نام و نام خانوادگی" },
  { name: "nationalCode", placeholder: "کدملی" },
  { name: "birthDate", placeholder: "تاریخ تولد" },
  { name: "gender", placeholder: "جنسیت" },
]


function BasketPage({ data }) {

  const router = useRouter()

  const { data: basketData, isPending, error, isError } = useGetBasket()

  const { mutate } = useSendOrder()

  const { register, handleSubmit, errors, control, reset, watch } = usePersonalInformation()


  useEffect(() => {
    if (data) {
      reset({
        firstName: data.data.firstName,
        nationalCode: data.data.nationalCode,
        birthDate: data.data.birthDate,
        gender: data.data.gender,
      })
    }
  }, [data]);

  if (isPending && !basketData) <Loader />
  if (error?.message === "خطا در دریافت سبد خرید.") return <h1>❌ سبد خرید خالی است ❌</h1>
  if (isError && error?.message !== "خطا در دریافت سبد خرید.") return <h1>❌ خطا در گرفتن دیتا ❌</h1>

  const orderHandler = async () => {
    const newData = {
      nationalCode: watch("nationalCode"),
      gender: watch("gender"),
      fullName: watch("firstName"),
      birthDate: convertDateEnToEn(watch("birthDate")),
    }
    if (!newData.nationalCode || !newData.gender || !newData.fullName || !newData.birthDate) {
      return toast.error("لطفا تمامی فیلد ها رو کامل کنید")
    }


    mutate(
      newData,
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message)
          router.push("/dashboard/userTours")
        },
        onError: (error) => {
          toast.error("خطا در خرید تور")
        }
      }
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.all}>
        <InputBox data={data?.data} title="اطلاعات شخصی" formInputDescription={formInputDescription}
          register={register} handleSubmit={handleSubmit} errors={errors} control={control} watch={watch} reset={reset} />
        <div className={styles.priceBox}>
          <div className={styles.details}>
            <h2>{basketData?.data?.title}</h2>
            {/* <p>5 روز و 4 شب</p> */}
            <p>{difrentDate(basketData?.data?.startDate, basketData?.data?.endDate)}</p>
          </div>
          <div className={styles.price}>
            <div>
              <p>قیمت نهایی</p>
              <p>
                <span>{basketData?.data?.price && e2p(sp(basketData?.data?.price))}</span>
                تومان
              </p>
            </div>
            <button onClick={() => orderHandler()}>ثبت و خرید نهایی</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketPage