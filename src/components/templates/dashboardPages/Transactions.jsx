import { useGetTransactions } from "../../../core/services/queries";
import { convertDateEnToDateFa } from "../../../core/utils/convertDate";
import { formatTime } from "../../../core/utils/convertTime";
import { e2p, sp } from "../../../core/utils/replaceNumber";
import Loader from "../../atoms/Loader";

import styles from "./Transactions.module.css"

function Transactions() {

  const { data: transactionsData, isPending } = useGetTransactions()
  const { data, status } = transactionsData || {}
  console.log(data)

  if (isPending) return <Loader />
  if (status !== 200) return <h1>Error ...</h1>
  if (data.length === 0) return <h1>هیچ تراکنشی وجود ندارد</h1>


  return (
    <div className={styles.tableContainer}>
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>تاریخ و ساعت</th>
            <th>مبلغ (تومان)</th>
            <th>نوع تراکنش</th>
            <th>شماره سفارش</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((i) => (
            <tr key={i.id}>
              <td>{e2p(formatTime(i.createdAt))} - {convertDateEnToDateFa(i.createdAt)}</td>
              <td>{e2p(sp(i.amount))}</td>
              <td>ثبت نام در تور گردشگری</td>
              <td>سفارش 12054902</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions