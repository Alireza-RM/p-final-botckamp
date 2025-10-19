import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetUserData } from "../../../core/services/queries";

function AuthProvider({ children }) {
    const router = useRouter();

    const { data, isPending } = useGetUserData();

    useEffect(() => {
        if (!isPending && !data?.data) router.push("/");
    }, [isPending]);

    if (isPending) return <p>Loading</p>;

    return <>{children}</>;
}

export default AuthProvider;