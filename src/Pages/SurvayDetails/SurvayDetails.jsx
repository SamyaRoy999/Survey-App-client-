
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const SurvayDetails = () => {
    const { id } = useParams();
    const [vote, setVote] = useState('');
    const [voting, setVoting] = useState('');
    const axiosPublic = useAxiosPublicSecour();
    const { user } = useContext(AuthContext)

    const { data: survayDetail = {}, refetch } = useQuery({
        queryKey: ['survaySingle', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/survayCreate/${id}`);
            return res.data;
        }
    });

    const handleVote = async () => {
        if (vote && user) {
            const res = await axiosPublic.patch(`/vote/${id}`, { option: vote });
            console.log(res.data);

            if (res.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your vote option ${vote} . count suceefull`,
                    showConfirmButton: false,
                    timer: 1500
                });
                }
            setVoting(res.data.acknowledged)
        }
        refetch()
    };

    const { title, description, options = [], votes = {}, deadline } = survayDetail;

    const survayDeadlineEnd = new Date() > new Date(deadline);

    return (
        <div className="mx-auto flex justify-center items-center">
            <div className="card w-full lg:w-6/12 bg-base-100 shadow-xl">
                <div className="card-body m-3" >
                    <h3 className="text-2xl font-bold font-Josefin text-[#0E6251]">{title}</h3>
                    <p className="font-semibold text-lg mt-5 font-Shanti">{description}</p>
                    {options.map((option, index) => (
                        <label key={index} >
                            <input type="radio" name="vote" value={option} onChange={() => setVote(option)} />
                            {option}
                        </label>
                    ))}
                    <button onClick={handleVote} disabled={!user || voting} className="btn bg-[#0E6251] text-white w-24 mt-5">Submit</button>
                    {survayDeadlineEnd || voting &&
                        <div>
                            <p><span className="font-bold">Yes:</span> {votes ? votes.yes : 0}</p>
                            <p><span className="font-bold">No:</span> {votes ? votes.no : 0}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default SurvayDetails;
