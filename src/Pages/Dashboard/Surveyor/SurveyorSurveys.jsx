import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const SurveyorSurveys = () => {
    const axiosSecurec = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: survayorSurvey = [], isLoading } = useQuery({
        queryKey: ['survay'],
        queryFn: async () => {
            const res = await axiosSecurec.get(`/survayorSurvey/${user.email}`);
            return res.data;
        }
    });
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }
    console.log(survayorSurvey);
    return (
        <div>
            <h3 className="text-center font-Josefin font-bold text-2xl text-[#0E6251] py-6">Survey Responses with Detailed View</h3>
            {survayorSurvey.map((item) => {
                const { title, description, _id, deadline,voters } = item;
                return (

                    <div key={_id} className="mb-4 mx-12 shadow-xl font-Josefin font-bold flex flex-col lg:flex-row  lg:justify-between lg:items-center border border-gray-300 p-4 rounded">
                        <div>
                            <h2 className="text-2xl  font-bold pb-4 text-[#0E6251]">{title}</h2>
                            <p className="font-Shanti font-light pb-2">{description}</p>
                            <p className="font-Shanti font-light pb-2">Deadline : {deadline}</p>
                            <p className="font-Shanti font-light pb-2">total votes : {voters.length}</p>
                        </div>
                        <Link to={`${_id}`}>
                            <button
                                type="button"
                                className="btn bg-[#0E6251] bg-opacity-30 mt-4 inline-block btn-sm rounded-full border-2 border-[#0E6251] px-6  text-base font-medium leading-normal  transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                            >
                                details
                            </button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default SurveyorSurveys