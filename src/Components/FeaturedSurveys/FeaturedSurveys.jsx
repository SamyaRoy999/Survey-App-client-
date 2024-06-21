// import { Link } from "react-router-dom";
import useSurvay from "../../hooks/useSurvay";
import { useEffect, useState } from "react";
import VotingCard from "../VotingCard/VotingCard";
import { Typewriter } from 'react-simple-typewriter'
import Loading from "../Loading/Loading";

const FeaturedSurveys = () => {
    const [survay, , isLoading] = useSurvay();
    const [featuredSort, setFeaturedSort] = useState([])



    useEffect(() => {
        const mostVoteSurvay = [...survay].sort((a, b) => {
            const totalVotesA = Array.isArray(a.voters) ? a.voters.length : 0;
            const totalVotesB = Array.isArray(b.voters) ? b.voters.length : 0;
            return totalVotesB - totalVotesA;
        })
        setFeaturedSort(mostVoteSurvay.slice(0, 6));
    }, [survay])


    return (
        <div className="my-10 lg:my-20 w-full">
            <h3 className="text-3xl lg:text-4xl font-Josefin   pl-2 my-5  font-sans font-bold "><span className="border-[#0E6251] px-2 border-l-4"></span> <Typewriter
                words={['Most Voted', 'Featured Surveys ']}
                cursor
                cursorStyle='_'
                loop={1005}
            /></h3>
            <p className="text-sm lg:text-base pl-2 my-2 font-Shanti font-light">Check out the most popular surveys <br /> voted by our users.</p>
            {isLoading ?
                <div className=""><Loading /></div>
                : <>
                    <div className="bg-[#0E6251] mx-2 mt-4 w-40 h-[2px] mb-11"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredSort.map(item => <VotingCard key={item._id} item={item} />)}
                    </div>
                </>
            }
        </div>
    )
}

export default FeaturedSurveys