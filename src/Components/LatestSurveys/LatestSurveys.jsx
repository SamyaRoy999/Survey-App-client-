
import useSurvay from "../../hooks/useSurvay";
import { useEffect, useState } from "react";
import VotingCard from "../VotingCard/VotingCard";
import { Typewriter } from 'react-simple-typewriter'
import Loading from "../Loading/Loading";

const LatestSurveys = () => {
    const [survay, , isLoading] = useSurvay();
    const [latestSurveys, setLatestSurveys] = useState([]);

    // type right code 


    useEffect(() => {
        if (survay.length > 0) {
            const sortedSurveys = [...survay].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setLatestSurveys(sortedSurveys.slice(0, 6)); // Get the top 6 most recent surveys
        }
    }, [survay]);

    // if (isLoading) {
    //     return <span className="loading loading-bars loading-lg"></span>;
    // }

    return (
        <div className="my-10 lg:my-20 ">
            <h3 className="text-3xl lg:text-4xl font-Josefin     pl-2 my-5  font-sans font-bold "><span className="border-[#0E6251] px-2 border-l-4"></span> <Typewriter
                words={['Recently Created ', 'Surveys']}
                cursor
                cursorStyle='_'
                loop={1005}
            /></h3>
            <p className="text-sm lg:text-base pl-2 my-2 font-Shanti  font-light">Discover the most recently created surveys and <br /> share your valuable feedback.</p>
            {isLoading ?
                <div className="h-[70vh] flex items-center justify-center w-12/12"><Loading /></div>
                : <>
                    <div className="bg-[#0E6251] mx-2 mt-4 w-40 h-[2px] mb-11"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       {latestSurveys.map(item => <VotingCard key={item._id} item={item} />)}
                    </div>
                </>
            }
        </div>
    );
}

export default LatestSurveys;



