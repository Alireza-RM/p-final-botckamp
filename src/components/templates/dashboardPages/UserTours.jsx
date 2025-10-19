import TourBox from "../../modules/TourBox"

import styles from "./UserTours.module.css"

function UserTours() {
  return (
    <div className={styles.container}>
      <TourBox />
      <TourBox />
      <TourBox />
    </div>
  )
}

export default UserTours