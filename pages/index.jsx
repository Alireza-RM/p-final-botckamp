import axios from "axios";
import HomePage from "../src/components/templates/HomePage";
import api from "../src/core/config/api";
import { serverFetch } from "../src/core/services/http";

export default function Home({ data }) {
  return <div>
    <HomePage data={data} />
  </div>;
}


export async function getServerSideProps(context) {
  const { query } = context
  // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`)
  const data = await serverFetch("/tour", query)
  return {
    props: { data }
  }
}