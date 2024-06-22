import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublicSecour from "../../../hooks/useAxiosPublicSecour";
import { useQuery } from "@tanstack/react-query";


const Reportedsurveys = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublicSecour()
    const { data: userReport = [] } = useQuery({
        queryKey: ['userReport'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/report/${user.email}`);
            return res.data
        }
    })
    // console.log(userReport);

    return (
        <div>
            <h3 className="text-center font-Josefin font-bold text-2xl text-[#0E6251] py-6">Report on Various Surveys</h3>
            {userReport.map(reportData => {
                const { _id, reports = [], title, description, timestamp } = reportData;
                return (
                    <div key={_id} className="mb-4 mx-11 shadow-xl font-Josefin font-bold flex justify-between items-center border border-gray-300 p-4 rounded">
                        <div>
                            <h2 className="text-2xl  font-bold pb-4 text-[#0E6251]">{title}</h2>
                            <p className="font-Shanti font-light pb-2">{description}</p>

                            {reports.map((comData, ind) => (
                                <>
                                    <div className="flex mt-4">
                                        <div className="badge badge-ghost">Report resone</div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(timestamp).toLocaleDateString()}</p>
                                    </div>
                                    <article key={ind} className="pt-5 mb-3 text-base lg:mx-14 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">

                                        <p className="text-gray-500 dark:text-gray-400">{comData.reason}</p>
                                    </article>
                                </>
                            ))}
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Reportedsurveys