import { useRouter } from "next/router"
import { useTourId } from "../../src/core/services/queries"
import DetailsTour from "../../src/components/templates/DetailsTour"

function tour() {
  const router = useRouter()
  const { tourid } = router.query

  const { data, isPending } = useTourId(router.query.tourid)

  if (isPending) return <h1 style={{minHeight:"580px"}}>Loading ...</h1>
  if (!isPending && !data) return <h1>Error</h1>

  console.log(data)

  return (
    <>
      <DetailsTour data={data.data} />
    </>
  )
}

export default tour