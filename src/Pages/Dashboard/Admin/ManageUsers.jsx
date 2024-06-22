import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure"
// import { useQuery } from '@tanstack/react-query'
import useAllUser from "../../../hooks/useAllUser";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
const ManageUsers = () => {

    const axiosSecour = useAxiosSecure();
    const [users, refetch] = useAllUser();
    const [userFilter, setUserFilter] = useState('')
    // console.log(users);
    const hehdelSelect = async (e, user) => {
        const newRole = e.target.value;
        const res = await axiosSecour.patch(`/users/admin/${user._id}`, { role: newRole });
        // console.log(res.data);
        if (res.data.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} role is ${newRole}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        refetch()
    }
    const hendelDelete = async (id) => {
        const res = await axiosSecour.delete(`/user/role/${id}`);
        if (res.data.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `user delete successfull`,
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }
    }
    let filteredUsers = [...users];
    if (userFilter) {
        filteredUsers = users.filter((user) => user.role === userFilter);
    }

    // console.log(userFilter);
    return (
        <div className=" lg:mt-16 mx-11">
            <div className="flex flex-col">
                <label htmlFor="">Filter users by role :
                    <select name="" onChange={(e) => setUserFilter(e.target.value)} id="">
                        <option value="" selected disabled>users Option</option>
                        <option value="">All user</option>
                        <option value="admin">admin</option>
                        <option value="surveyor">Surveyor</option>
                        <option value="pro-user">Pro user</option>
                    </select>
                </label>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table
                                className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                                <thead
                                    className="border-b border-neutral-200 bg-[#0E6251] font-medium text-white dark:border-white/10">
                                    <tr>
                                        <th scope="col" className=" px-6 py-4">Name</th>
                                        <th scope="col" className=" px-6 py-4">Eamil</th>
                                        <th scope="col" className=" px-6 py-4">Role</th>
                                        <th scope="col" className=" px-6 py-4">ManageRole</th>
                                        <th scope="col" className=" px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user) => (
                                        <tr key={user._id} className="border-b border-neutral-200 font-medium dark:border-white/10">
                                            <td className="whitespace-nowrap  px-6 py-4">{user.name}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{user.email}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{user.role ? user.role : 'user'}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">

                                                <select name="" id="" onChange={(e) => hehdelSelect(e, user)}>
                                                    <option value="" selected disabled >Roles</option>
                                                    <option value="admin">admin</option>
                                                    <option value="pro-user">pro-user</option>
                                                    <option value="surveyor">surveyor</option>
                                                </select>

                                            </td>
                                            <td onClick={() => hendelDelete(user._id)}><MdDelete className="text-2xl text-center text-red-600"></MdDelete></td>

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