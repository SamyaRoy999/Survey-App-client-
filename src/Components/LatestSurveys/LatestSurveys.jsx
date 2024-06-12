
import useSurvay from "../../hooks/useSurvay";
import { useEffect, useState } from "react";
import VotingCard from "../VotingCard/VotingCard";

const LatestSurveys = () => {
    const [survay, , isLoading] = useSurvay();
    const [latestSurveys, setLatestSurveys] = useState([]);

    useEffect(() => {
        if (survay.length > 0) {
            const sortedSurveys = [...survay].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setLatestSurveys(sortedSurveys.slice(0, 6)); // Get the top 6 most recent surveys
        }
    }, [survay]);

    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    return (
        <div className="my-10 lg:my-20 ">
            <h3 className="text-3xl lg:text-4xl pl-2 my-2 font-sans font-bold font-Josefin">Latest Surveys</h3>
            <p className="text-base lg:text-lg pl-2 my-2 font-Shanti  font-light">Discover the most recently created surveys and <br /> share your valuable feedback.</p>
            <div className="bg-[#0E6251] mx-2 mt-4 w-40 h-[2px] mb-11"></div>
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {latestSurveys.map(item =>  <VotingCard key={item._id} item={item}/>)}
            </div>
        </div>
    );
}

export default LatestSurveys;

