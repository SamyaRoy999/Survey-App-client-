import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"

const useProUser = () => {
    const { user } = useContext(AuthContext)
    const axiosSecour = useAxiosSecure()
    const { data: isProUser, isPending: isProUserLoading } = useQuery({
        queryKey: [user?.email, 'isProUser'],
        queryFn: async()=>{
            const res = await axiosSecour.get(`/users/proUser/${user.email}`)
            return res.data.proUser
        }
    })

    return [isProUser, isProUserLoading]
}


export default useProUser