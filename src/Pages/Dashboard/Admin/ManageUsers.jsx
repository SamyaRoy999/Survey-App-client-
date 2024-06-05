import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { useQuery } from '@tanstack/react-query'

const ManageUsers = () => {

    const axiosSecour = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {

            const res = await axiosSecour.get('/users');
            return res.data
        }

    })

    const hehdelSelect = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className=" lg:mt-16 mx-11">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table
                                className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                                <thead
                                    className="border-b border-neutral-200 bg-[#4A4A4A] font-medium text-white dark:border-white/10">
                                    <tr>
                                        <th scope="col" className=" px-6 py-4">#</th>
                                        <th scope="col" className=" px-6 py-4">Name</th>
                                        <th scope="col" className=" px-6 py-4">Eamil</th>
                                        <th scope="col" className=" px-6 py-4">Role</th>
                                        <th scope="col" className=" px-6 py-4">ManageRole</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={user._id} className="border-b border-neutral-200 font-medium dark:border-white/10">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">{index + 1}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{user.name}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{user.email}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                                            <td className="whitespace-nowrap  px-6 py-4">

                                                <select name="" id="" onChange={hehdelSelect}>
                                                    <option value="" selected>Roles</option>
                                                    <option value="user">user</option>
                                                    <option value="admin">admin</option>
                                                    <option value="pro-user">pro-user</option>
                                                    <option value="surveyor">surveyor</option>
                                                </select>

                                            </td>

                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers