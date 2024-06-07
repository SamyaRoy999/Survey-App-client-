import { useState } from "react";
import { Link } from "react-router-dom";
import useSurvay from "../../hooks/useSurvay";

const Survey = () => {
    const [survay] = useSurvay();

    const [filterSurvey, setfilterSurvey] = useState(survay);
    const [category, setCategory] = useState('')
    
    const handleFilterCategory = (e) => {
        const value = e.target.value;
        setCategory(value);

        if (value === '') {
            setfilterSurvey(survay);
        } else {
            const filterValue = survay.filter(item => item.category === value)
            setfilterSurvey(filterValue)
        }

    }
    return (
        <div>
            <div>

                <div className="py-5 px-5 ">
                    <label className="mr-2 ">Filter by Category:</label>
                    <select value={category} className=' border-[#4A4A4A]' onChange={handleFilterCategory} >
                        <option value="">All</option>
                        <option value="Customer Feedback">Customer Feedback</option>
                        <option value="Employee Feedback">Employee Feedback</option>
                        <option value="Market Research">Market Research</option>
                        <option value="Product Feedback">Product Feedback</option>
                        <option value="Event Feedback">Event Feedback</option>
                    </select>
                </div>
                <div>

                </div>
            </div>
            {filterSurvey.map(item => (
                <div key={item._id} className="mb-4 shadow-xl  font-Josefin  font-bold flex justify-between items-center border border-gray-300   p-4  rounded  ">
                    <div>
                        <h2 className="text-2xl text-[#4A4A4A] font-bold pb-4">{item.title}</h2>
                        <p className="font-Shanti font-light pb-2">{item.description}</p>
                        <p><strong>Votes:</strong> {item.votes}</p>
                    </div>
                    <Link to={`/survey/survayDetails/${item._id}`}>
                        <button
                            type="button"
                            className="btn bg-black bg-opacity-30 inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-base font-medium  leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                        >
                            Voteing
                        </button>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default Survey