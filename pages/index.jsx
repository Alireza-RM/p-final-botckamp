import HomePage from "../src/components/templates/HomePage";
import { serverFetch } from "../src/core/services/http";


export default function Home({ data }) {
  return (
    <div>
      <HomePage data={data} />
    </div>
  )
}


export async function getServerSideProps(context) {
  const { query } = context
  const data = await serverFetch("/tour", query)

  return {
    props: { data }
  }
}