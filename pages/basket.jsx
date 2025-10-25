import { useRouter } from "next/router";
import { useGetBasket, useGetUserData } from "../src/core/services/queries"
import toast from "react-hot-toast";
import { useEffect } from "react";
import BasketPage from "../src/components/templates/BasketPage";
import Loader from "../src/components/atoms/Loader";


function Basket() {

    // const { data, isPending, error } = useGetBasket()
    // console.log(data, error)

    const router = useRouter();

    const { data, isPending } = useGetUserData();

    useEffect(() => {
        if (!isPending && !data?.data) {
            toast.error("ابتدا وارد حساب کاربریتون شوید")
            router.push("/");
        }
    }, [isPending]);

    if (isPending) return <Loader />

    return (
        <>
            <BasketPage data={data} />
        </>
    )
}

export default Basket