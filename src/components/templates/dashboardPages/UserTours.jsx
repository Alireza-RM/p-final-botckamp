import { useGetUserTours } from "../../../core/services/queries"
import TourBox from "../../modules/TourBox"

import styles from "./UserTours.module.css"

function UserTours() {

  const { data: tourData, isPending } = useGetUserTours()
  const { data, status } = tourData || {}

  if (isPending) return <h1>Loading ...</h1>
  if (status !== 200) return <h1>Error ...</h1>
  if (data.length === 0) return <h1>هیچ توری وجود ندارد</h1>


  return (
    <div className={styles.container}>
      {
        data && data.map(i => <TourBox key={i.id} data={i} />)
      }
    </div>
  )
}

export default UserTours