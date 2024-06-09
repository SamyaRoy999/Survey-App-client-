import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure";


const useSurveyor = () => {
    const { user } = useContext(AuthContext);
    const axiosSecour = useAxiosSecure()
    const { data: isSurveyor } = useQuery({
        queryKey: [user?.email, 'isSurveyor'],
        queryFn: async () => {
            const res = await axiosSecour.get(`/users/survayor/${user.email}`);
            return res.data.surveyor;
        }

    })
    return [isSurveyor]
}

export default useSurveyor