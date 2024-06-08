import { useQuery } from "@tanstack/react-query";
// import {   useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";




const SurvayDetails = () => {
    const { id } = useParams()
    const axiosPiublic = useAxiosPublicSecour()
    const { data: survayDetail = [] } = useQuery({
        queryKey: ['survaySingle'],
        queryFn: async () => {
            const res = await axiosPiublic.get(`/survayCreate/${id}`);
            return res.data
        }
    })
    console.log(survayDetail);
    const { title, description, options, category, deadline, status, timestamp, } = survayDetail;
    return (
        <div className="mx-auto flex justify-center">
            <div className="card w-full lg:w-6/12 bg-base-100 shadow-xl">
                <div className="card-body m-3">
                    <h3 className="text-2xl font-bold font-Josefin text-[#0E6251]">{title}</h3>
                    <p className="font-semibold text-lg mt-5 font-Shanti">{description}</p>
                    {survayDetail.options.map((option, index) => (
                        <label key={index}>
                            <input type="radio" name="vote" value={option} onChange={(e) => console.log(e.target.value)} />
                            {option}
                        </label>
                    ))}

                    <button className="btn bg-[#0E6251] text-white w-24 mt-5">Success</button>
                </div>
            </div>
        </div>
    )
}

export default SurvayDetails