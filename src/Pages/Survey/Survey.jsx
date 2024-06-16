import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSurvay from "../../hooks/useSurvay";

const Survey = () => {
    const [survay, refetch, isLoading] = useSurvay();
    const [filterSurvey, setFilterSurvey] = useState([]);
    const [category, setCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        setFilterSurvey(survay);
    }, [survay]);

    const handleFilterCategory = (e) => {
        const value = e.target.value;
        setCategory(value);

        if (value === '') {
            setFilterSurvey(survay);
        } else {
            const filterValue = survay.filter(item => item.category === value);
            setFilterSurvey(filterValue);
        }
    }
    const handleSort = () => {
        const sortedSurveys = [...filterSurvey].sort((a, b) => {
            const totalVotesA = a.voters.length;
            const totalVotesB = b.voters.length;
            return sortOrder === 'asc' ? totalVotesA - totalVotesB : totalVotesB - totalVotesA;
        });
        setFilterSurvey(sortedSurveys);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }

    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    return (
        <div className="">
            <div className="flex justify-between">
                <div className="py-5 px-5 ">
                    <label className="mr-2 ">Filter by Category:</label>
                    <select value={category} className=' border-[#4A4A4A]' onChange={handleFilterCategory}>
                        <option value="">All</option>
                        <option value="Customer Feedback">Customer Feedback</option>
                        <option value="Employee Feedback">Employee Feedback</option>
                        <option value="Market Research">Market Research</option>
                        <option value="Product Feedback">Product Feedback</option>
                        <option value="Event Feedback">Event Feedback</option>
                    </select>
                </div>
                <div className="py-5 px-5">
                    Sort by Votes :
                    <button
                        type="button"
                        className="btn btn-outline border-[#0E6251] btn-sm"
                        onClick={handleSort}
                    >
                        {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                    </button>
                </div>
            </div>
            <div>

                {filterSurvey.map(item => {
                    const { title, description, voters = [] } = item;
                    refetch()
                    return (
                        <Link to={`/survey/survayDetails/${item._id}`} key={item._id} >
                            <div className="mb-4 shadow-xl font-Josefin font-bold flex justify-between items-center border border-gray-300 p-4 rounded">
                                <div>
                                    <h2 className="text-2xl  font-bold pb-4 text-[#0E6251]">{title}</h2>
                                    <p className="font-Shanti font-light pb-2">{description}</p>
                                    <p><strong>Votes:</strong> {voters.length} </p>
                                </div>
                                <button
                                    type="button"
                                    className="btn bg-[#0E6251] bg-opacity-30 mt-4 inline-block btn-sm rounded-full border-2 border-[#0E6251] px-6  text-base font-medium leading-normal  transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                                >
                                    Vote
                                </button>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Survey;
