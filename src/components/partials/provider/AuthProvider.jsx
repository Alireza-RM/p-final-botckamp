import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetUserData } from "../../../core/services/queries";
import Loader from "../../atoms/Loader";

function AuthProvider({ children }) {
    const router = useRouter();

    const { data, isPending } = useGetUserData();

    useEffect(() => {
        if (!isPending && !data?.data) router.push("/");
    }, [isPending]);

    if (isPending) return <Loader />

    return <>{children}</>;
}

export default AuthProvider;