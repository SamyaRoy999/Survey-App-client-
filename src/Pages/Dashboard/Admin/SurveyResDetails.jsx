import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const SurveyResDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: SurveyDetail = {} } = useQuery({
        queryKey: ['survaySingleID'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/survaySingle/${id}`);
            return res.data;
        }
    });
    console.log(SurveyDetail);
    const { voters = [] } = SurveyDetail;
    return (
        <div>
            <h3 className="text-center font-Josefin font-bold text-2xl text-[#0E6251] py-6">Detailed Survey Response Overview</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>User Email </th>
                            <th>User Name</th>
                            <th>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {voters
                            .map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td><span className={item.vote === "yes" ?
                                        'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'
                                        : 'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300'}
                                    >{item.vote}</span> </td>
                                </tr>
                            )
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SurveyResDetails