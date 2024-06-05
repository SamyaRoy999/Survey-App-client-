import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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


const SurvayDetails = () => {
    const { id } = useParams()
    const [surveyId, setSurveyId] = useState('');
    useEffect(() => {
        const findId = surveys.find(item => item._id == id);
        setSurveyId(findId)
    }, [])
    console.log(surveyId);


    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{surveyId.title}</h1>
            <p className="mb-4">{surveyId.description}</p>
            <p className="mb-4"><strong>Category:</strong> {surveyId.category}</p>
            <div className="mb-4">
                <h2 className="text-2xl font-bold">Questions</h2>
             
                    <div  className="mb-4">
                        <p className="mb-2">index</p>
                       
                            <label className="block">
                                <input
                                    type="radio"
                                    
                                    value='option'
                                    
                                    // onChange={() => handleOptionChange(question.id, option)}
                                    className="mr-2"
                                />
                                {/* {option} */}
                            </label>
                       
                    </div>
              
            </div>
            <button
                // onClick={handleSubmit}
                className="btn btn-primary"
            >
                Submit
            </button>
        </div>
    )
}

export default SurvayDetails