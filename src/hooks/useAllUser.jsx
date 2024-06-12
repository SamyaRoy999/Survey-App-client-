import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllUser = () => {
    const axiosSecour = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {

            const res = await axiosSecour.get('/users');
            return res.data
        }

    })
    return [users, refetch]
}

export default useAllUser