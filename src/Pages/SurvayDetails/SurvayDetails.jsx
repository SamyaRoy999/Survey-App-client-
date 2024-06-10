// import { useQuery } from "@tanstack/react-query";
// // import {   useState } from "react";
// import { useParams } from "react-router-dom";
// import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";
// import { useState } from "react";




// const SurvayDetails = () => {
//     const { id } = useParams()
//     const [vote, setVote] = useState('')
//     // const [result, setResult] = useState({ yes: 1, no: 1 });
//     const axiosPiublic = useAxiosPublicSecour()
//     const { data: survayDetail = [] } = useQuery({
//         queryKey: ['survaySingle'],
//         queryFn: async () => {
//             const res = await axiosPiublic.get(`/survayCreate/${id}`);
//             return res.data
//         }
//     })


// // 
//     const handleVote = async (id) => {

//         // Update fake data with vote

//         if (vote === 'yes') {
//             const res = await axiosPiublic.patch(`/vote/${id}`, { option: vote });
//             console.log(res.data);
//         } else if (vote === 'no') {
//             // setResult({ ...result, no: result.no + 1 });
//             // console.log(result.no);
//         }


//     };
//     const { _id, title, description, options = [], category, deadline, status, timestamp, } = survayDetail;
//     return (
//         <div className="mx-auto flex justify-center items-center ">
//             <div className="card w-full lg:w-6/12 bg-base-100 shadow-xl">
//                 <div className="card-body m-3">
//                     <h3 className="text-2xl font-bold font-Josefin text-[#0E6251]">{title}</h3>
//                     <p className="font-semibold text-lg mt-5 font-Shanti">{description}</p>
//                     {options.map((option, index) => (
//                         <label key={index}>
//                             <input type="radio" name="vote" value={option} onChange={() => setVote(option)} />
//                             {option}
//                         </label>
//                     ))}
//                     <button onClick={() => handleVote(_id)} className="btn bg-[#0E6251] text-white w-24 mt-5">Success</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SurvayDetails


import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";
import { useState } from "react";

const SurvayDetails = () => {
    const { id } = useParams();
    const [vote, setVote] = useState('');
    const axiosPublic = useAxiosPublicSecour();

    const { data: survayDetail = {}, refetch } = useQuery({
        queryKey: ['survaySingle', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/survayCreate/${id}`);
            return res.data;
        }
    });

    const handleVote = async () => {
        if (vote) {
            const res = await axiosPublic.patch(`/vote/${id}`, { option: vote });
            console.log(res.data);
        }
        refetch()
    };

    const { title, description, options = [], votes = {} } = survayDetail;

    return (
        <div className="mx-auto flex justify-center items-center">
            <div className="card w-full lg:w-6/12 bg-base-100 shadow-xl">
                <div className="card-body m-3">
                    <h3 className="text-2xl font-bold font-Josefin text-[#0E6251]">{title}</h3>
                    <p className="font-semibold text-lg mt-5 font-Shanti">{description}</p>
                    {options.map((option, index) => (
                        <label key={index}>
                            <input type="radio" name="vote" value={option} onChange={() => setVote(option)} />
                            {option}
                        </label>
                    ))}
                    <button onClick={handleVote} className="btn bg-[#0E6251] text-white w-24 mt-5">Submit</button>
                    <div>
                        <p><strong>Yes:</strong> {votes ? votes.yes : 0}</p>
                        <p><strong>No:</strong> {votes ? votes.no : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SurvayDetails;
