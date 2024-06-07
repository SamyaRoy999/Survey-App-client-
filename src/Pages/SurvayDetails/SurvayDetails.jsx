import { useQuery } from "@tanstack/react-query";
// import {   useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";




const SurvayDetails = () => {
    const { id } = useParams()
    // const [surveyId, setSurveyId] = useState('');
    const axiosPiublic = useAxiosPublicSecour()
    const { data } = useQuery({
        queryKey: ['survaySingle'],
        queryFn: async () => {
            const res = await axiosPiublic.get(`/survayCreate/${id}`);
            return res.data
        }
    })
    // setSurveyId(data)
    console.log(data.description);


    return (
        <div>
            <h1>{data.description}</h1>
        </div>
    )
}

export default SurvayDetails