import  { useState } from 'react';

const surveys = [
    {
        id: 1,
        title: "Customer Satisfaction Survey",
        description: "We value your feedback on our products and services.",
        category: "Customer Feedback",
        votes: 120
    },
    {
        id: 2,
        title: "Employee Engagement Survey",
        description: "Help us improve our workplace environment.",
        category: "Employee Feedback",
        votes: 95
    },
    {
        id: 3,
        title: "Market Research Survey",
        description: "Share your opinions on the latest market trends.",
        category: "Market Research",
        votes: 150
    },
    {
        id: 4,
        title: "Product Feedback Survey",
        description: "Tell us what you think about our new product.",
        category: "Product Feedback",
        votes: 200
    },
    {
        id: 5,
        title: "Event Satisfaction Survey",
        description: "Give us your feedback on the recent event.",
        category: "Event Feedback",
        votes: 75
    }
];

const SurveysPage = () => {
    const [filteredSurveys, setFilteredSurveys] = useState(surveys);
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        if (value === '') {
            setFilteredSurveys(surveys);
        } else {
            setFilteredSurveys(surveys.filter(survey => survey.category === value));
        }
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSort(value);
        if (value === 'votes') {
            setFilteredSurveys([...filteredSurveys].sort((a, b) => b.votes - a.votes));
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Surveys</h1>
            <div className="mb-4">
                <label className="mr-2">Filter by Category:</label>
                <select value={category} onChange={handleFilterChange} className="mr-4">
                    <option value="">All</option>
                    <option value="Customer Feedback">Customer Feedback</option>
                    <option value="Employee Feedback">Employee Feedback</option>
                    <option value="Market Research">Market Research</option>
                    <option value="Product Feedback">Product Feedback</option>
                    <option value="Event Feedback">Event Feedback</option>
                </select>
                <label className="mr-2">Sort by:</label>
                <select value={sort} onChange={handleSortChange}>
                    <option value="">None</option>
                    <option value="votes">Vote Count</option>
                </select>
            </div>
            <div>
                {filteredSurveys.map(survey => (
                    <div key={survey.id} className="mb-4 p-4 border rounded shadow">
                        <h2 className="text-2xl font-bold">{survey.title}</h2>
                        <p>{survey.description}</p>
                        <p><strong>Votes:</strong> {survey.votes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SurveysPage;

