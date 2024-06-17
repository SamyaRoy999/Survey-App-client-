import { useQuery } from "@tanstack/react-query";
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const AlreadyParticipate = () => {
    const axiosPublic = useAxiosPublicSecour();
    const { user } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/participate/surveys/${user.email}`);
            return res.data
        }

    })

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className="uppercase">
                        <tr>
                            <th>email</th>
                            <th>title</th>
                            <th>description</th>
                            <th>your vote</th>
                            <th>total votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map(voterInfo => {
                            const {_id, title, description, voters,}  = voterInfo;
                            const userinformation = voters.filter(userInfo => userInfo.email === user.email);
                            refetch()
                            return (
                                <tr key={_id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    {userinformation.map((item, ind) => <img key={ind} src={item.photo} />)}
                                              
                                                </div>
                                            </div>
                                            <div>
                                            {userinformation.map((item, ind) => <div key={ind} className="text-sm opacity-50"> {item.email} </div>)}
                                               
                                            </div>
                                        </div>
                                    </td>
                                    <td>{title}</td>
                                    <td>
                                       
                                        <span className="badge badge-ghost badge-sm">{description}</span>
                                    </td>
                                    <th>
                                        {userinformation.map((item, ind) => <div key={ind}className="btn btn-ghost btn-xs"> {item.vote} </div>)}
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{voters.length}</button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AlreadyParticipate