import { useQuery } from "@tanstack/react-query";
import useAxiosPublicSecour from "./useAxiosPublicSecour";

const useSurvay = () => {
    const axiosPiublic = useAxiosPublicSecour();

    const { data: survay = [], refetch, isLoading } = useQuery({
        queryKey: ['survay'],
        queryFn: async () => {
            const res = await axiosPiublic.get('/survayCreate');
            console.log(res.data);
            const surveyData = res.data.filter(item => item.status === "publish")
            return surveyData;
        }
    });

    return [survay, refetch, isLoading];
}

export default useSurvay;
