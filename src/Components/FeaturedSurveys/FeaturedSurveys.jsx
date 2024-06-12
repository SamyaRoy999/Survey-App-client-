import { Link } from "react-router-dom";
import useSurvay from "../../hooks/useSurvay";
import { useEffect, useState } from "react";


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
            <h3 className="text-3xl lg:text-3xl  pl-2 my-2  font-sans font-bold ">Featured Surveys</h3>
            <div className="bg-[#0E6251] mx-2 mt-4 w-40 h-[2px] mb-11"></div>
            <div className="w-full   mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5  ">
                {featuredSort.map(item => {
                    const totalVotes = (item.votes?.yes || 0) + (item.votes?.no || 0);

                    return (
                        <Link to={`/survey/survayDetails/${item._id}`} key={item._id} >

                            <div className='bg-white rounded-lg shadow-2xl h-96 flex flex-col items-center px-10'>
                                <div className="w-28">
                                    <img src="https://i.ibb.co/4Zh2hXb/voting-paper-and-ballot-box-outline-icon-vector-illustration.jpg" alt="" />
                                </div>
                                <div className="text-center">
                                    <div>
                                        <h2 className="text-2xl  font-bold pb-4 text-[#0E6251]">{item.title}</h2>
                                        <p className="font-Shanti font-light pb-2">{item.description}</p>
                                        <p><strong>Votes:</strong> {totalVotes}</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn bg-[#0E6251] bg-opacity-30 mt-4 inline-block btn-sm rounded-full border-2 border-[#0E6251] px-6  text-base font-medium leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                                    >
                                        Vote
                                    </button>
                                </div>
                            </div>

                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default FeaturedSurveys