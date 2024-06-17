import { useEffect, useState } from "react";


const surveysData = [
    {
        "_id": "60c72b2f5f1b2c001fef1234",
        "title": "Market Trend Analysis Survey",
        "description": "Help us understand the latest market trends.",
        "options": ["Yes", "No"],
        "category": "Market Research",
        "deadline": "2024-08-07",
        "status": "publish",
        "timestamp": "2024-06-07T11:03:09.534Z",
        "votes": {
            "yes": 10,
            "no": 3
        },
        "voters": [
            {
                "vote": "yes",
                "name": "John Doe",
                "email": "john.doe@example.com",
                "photo": "https://example.com/photos/john.jpg"
            },
            {
                "vote": "no",
                "name": "Jane Smith",
                "email": "jane.smith@example.com",
                "photo": "https://example.com/photos/jane.jpg"
            }
        ]
    },
    {
        "_id": "60c72b2f5f1b2c001fef5678",
        "title": "Customer Satisfaction Survey",
        "description": "We value your feedback. Please let us know how satisfied you are with our services.",
        "options": ["Satisfied", "Neutral", "Dissatisfied"],
        "category": "Customer Feedback",
        "deadline": "2024-07-30",
        "status": "publish",
        "timestamp": "2024-06-10T09:15:23.123Z",
        "votes": {
            "satisfied": 15,
            "neutral": 5,
            "dissatisfied": 2
        },
        "voters": [
            {
                "vote": "satisfied",
                "name": "Alice Brown",
                "email": "alice.brown@example.com",
                "photo": "https://example.com/photos/alice.jpg"
            },
            {
                "vote": "neutral",
                "name": "Bob Johnson",
                "email": "bob.johnson@example.com",
                "photo": "https://example.com/photos/bob.jpg"
            }
        ]
    },
    {
        "_id": "60c72b2f5f1b2c001fef9012",
        "title": "Product Feedback Survey",
        "description": "Let us know what you think about our latest product.",
        "options": ["Excellent", "Good", "Fair", "Poor"],
        "category": "Product Feedback",
        "deadline": "2024-08-15",
        "status": "publish",
        "timestamp": "2024-06-15T14:20:45.678Z",
        "votes": {
            "excellent": 8,
            "good": 12,
            "fair": 6,
            "poor": 1
        },
        "voters": [
            {
                "vote": "good",
                "name": "Charlie Davis",
                "email": "charlie.davis@example.com",
                "photo": "https://example.com/photos/charlie.jpg"
            },
            {
                "vote": "fair",
                "name": "Diana Evans",
                "email": "diana.evans@example.com",
                "photo": "https://example.com/photos/diana.jpg"
            }
        ]
    }
];

const UserDashboard = () => {
    const [surveys, setSurveys] = useState([]);
    const user = {
        name: "Current User",
        email: "current.user@example.com",
        photo: "https://example.com/photos/current.jpg"
    };

    useEffect(() => {
        setSurveys(surveysData);
    }, []);

    const handleVote = (surveyId, option) => {
        const voteData = {
            vote: option,
            name: user.name,
            email: user.email,
            photo: user.photo
        };

        setSurveys(surveys.map(survey => {
            if (survey._id === surveyId) {
                return {
                    ...survey,
                    voters: [...survey.voters, voteData],
                    votes: {
                        ...survey.votes,
                        [option.toLowerCase()]: (survey.votes[option.toLowerCase()] || 0) + 1
                    }
                };
            }
            return survey;
        }));
    };

    return (
        <div>
            <h1>User Dashboard</h1>
            <h2>Participate in Surveys</h2>
            <div>
                {surveys.map(survey => (
                    <div key={survey._id} className="survey-card">
                        <h3>{survey.title}</h3>
                        <p>{survey.description}</p>
                        <div>
                            {survey.options.map(option => (
                                <button
                                    key={option}
                                    onClick={() => handleVote(survey._id, option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <p>Votes: {Object.values(survey.votes).reduce((acc, val) => acc + val, 0)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;
