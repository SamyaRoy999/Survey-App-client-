// import { Link } from "react-router-dom";
import useSurvay from "../../hooks/useSurvay";
import { useEffect, useState } from "react";
import VotingCard from "../VotingCard/VotingCard";


const FeaturedSurveys = () => {
    const [survay, , isLoading] = useSurvay();
    const [featuredSort, setFeaturedSort] = useState([])
    // console.log(survay);

    useEffect(() => {
        const mostVoteSurvay = [...survay].sort((a, b) => {
            const totalVotesA = (a.votes?.yes || 0) + (a.votes?.no || 0);
            const totalVotesB = (b.votes?.yes || 0) + (b.votes?.no || 0);
            return totalVotesB - totalVotesA;
        })
        setFeaturedSort(mostVoteSurvay.slice(0, 6));
    }, [survay])


    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    return (
        <div className="my-10 lg:my-20 ">
            <h3 className="text-3xl lg:text-4xl font-Josefin  pl-2 my-2  font-sans font-bold ">Most Voted Featured Surveys</h3>
            <p className="text-base lg:text-lg pl-2 my-2 font-Shanti font-light">Check out the most popular surveys <br /> voted by our users.</p>
            <div className="bg-[#0E6251] mx-2 mt-4 w-40 h-[2px] mb-11"></div>
            <div className="w-full   mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5  ">
                {featuredSort.map(item => <VotingCard key={item._id} item={ item } /> )}
            </div>
        </div>
    )
}

export default FeaturedSurveys