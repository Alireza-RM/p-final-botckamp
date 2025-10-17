import axios from "axios";
import HomePage from "../src/components/templates/HomePage";
import api from "../src/core/config/api";

export default function Home({ data }) {
  console.log(data)
  return <div>
    <HomePage data={data} />
  </div>;
}


export async function getServerSideProps(context) {
  const { query } = context
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`)
  return {
    props: { data }
  }
}