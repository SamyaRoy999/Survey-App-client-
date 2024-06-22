import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSecour = useAxiosSecure()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecour.get(`/users/admin/${user.email}`)
            return res.data.admin
        }
    })
    // console.log(isAdmin);
    return [isAdmin, isAdminLoading]
}

export default useAdmin
