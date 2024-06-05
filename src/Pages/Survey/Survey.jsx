import { useState } from "react";
import { Link } from "react-router-dom";

const surveys = [
    {
        _id: 1,
        title: "Customer Satisfaction Survey",
        description: "We value your feedback on our products and services.",
        category: "Customer Feedback",
        votes: 120
    },
    {
        _id: 2,
        title: "Employee Engagement Survey",
        description: "Help us improve our workplace environment.",
        category: "Employee Feedback",
        votes: 95
    },
    {
        _id: 3,
        title: "Market Research Survey",
        description: "Share your opinions on the latest market trends.",
        category: "Market Research",
        votes: 150
    },
    {
        _id: 4,
        title: "Product Feedback Survey",
        description: "Tell us what you think about our new product.",
        category: "Product Feedback",
        votes: 200
    },
    {
        _id: 5,
        title: "Event Satisfaction Survey",
        description: "Give us your feedback on the recent event.",
        category: "Event Feedback",
        votes: 75
    }
];


const Survey = () => {
    const [filterSurvey, setfilterSurvey] = useState(surveys);
    const [category, setCategory] = useState('')

    const handleFilterCategory = (e) => {
        const value = e.target.value;
        setCategory(value);

        if (value === '') {
            setfilterSurvey(surveys);
        } else {
            const filterValue = surveys.filter(item => item.category === value)
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
                <div key={item._id} className="mb-4 font-Josefin  font-bold flex justify-between items-center  p-4 border rounded shadow ">
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