import { useRouter } from "next/router"
import { useTourId } from "../../src/core/services/queries"
import DetailsTour from "../../src/components/templates/DetailsTour"
import { serverFetch } from "../../src/core/services/http";

function tour(data) {
  // const router = useRouter()
  // const { tourid } = router.query

  // const { data, isPending } = useTourId(router.query.tourid)

  // if (isPending) return <h1 style={{ minHeight: "580px" }}>Loading ...</h1>
  // if (!isPending && !data) return <h1>Error</h1>


  return (
    <>
      <DetailsTour data={data.data} />
    </>
  )
}

export default tour

export async function getServerSideProps(context) {
  const { params: { tourid } } = context
  const data = await serverFetch(`/tour/${tourid}`)

  return {
    props: { data }
  }
}