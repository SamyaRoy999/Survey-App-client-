// src/pages/SurveyDetails.js
import  { useState, useContext } from 'react';

import { AuthContext } from './Providers/AuthProvider';

const fakeSurvey = {
    _id: '666904d276dc35dfe08be2ff',
    title: 'New Product Feedback Survey',
    description: 'We would like to hear your thoughts on our new product. Please vote and let us know if you liked it or not.',
    options: ['Yes', 'No'],
    category: 'Product Feedback',
    deadline: '13/06/2024',
    status: 'publish',
    timestamp: '2024-06-12T02:15:46.332+00:00',
    votes: {},
    voters: [],
    comment: [
        {
            comment: 'I recently had the chance to try out your new product, and I must say, it is fantastic!',
            name: 'Samya Roy',
            email: 'samyaroy80@gmail.com',
            photo: 'https://avatars.githubusercontent.com/u/53802153?v=4',
            timestamp: '2024-06-18T12:08:35.734Z',
        },
        {
            comment: 'I found the new product to be extremely user-friendly and innovative.',
            name: 'Samya Roy',
            email: 'samyaroy82@gmail.com',
            photo: 'https://lh3.googleusercontent.com/a/ACg8ocLsN7WLft2dbgTT4e9AG5hC2B3Yyh…',
            timestamp: '2024-06-19T11:53:14.061Z',
        },
    ],
};

const SurveyDetail = () => {
    const { user } = useContext(AuthContext);
    const [reportReason, setReportReason] = useState('');
    const [showReportForm, setShowReportForm] = useState(false);

    const handleReportSubmit = async () => {
        const reportData = {
            surveyId: fakeSurvey._id,
            userEmail: user.email,
            reason: reportReason,
            timestamp: new Date().toISOString(),
        };
        console.log(reportData);
        // try {
        //     await axiosSecure.post('/report/survey', reportData);
        //     alert('Report submitted successfully!');
        //     setShowReportForm(false);
        // } catch (error) {
        //     console.error('Error reporting survey:', error);
        //     alert('Failed to submit report.');
        // }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">{fakeSurvey.title}</h1>
            <p className="mt-4">{fakeSurvey.description}</p>

            <div className="mt-6">
                <h2 className="text-2xl font-bold">Comments</h2>
                {fakeSurvey.comment.map((comData, ind) => (
                    <div key={ind} className="mt-4 p-4 border border-gray-300 rounded shadow">
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 rounded-full"
                                src={comData.photo}
                                alt={comData.name}
                            />
                            <div className="ml-4">
                                <p className="font-semibold">{comData.name}</p>
                                <p className="text-sm text-gray-600">{new Date(comData.timestamp).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <p className="mt-2">{comData.comment}</p>
                    </div>
                ))}
            </div>

            {user && (
                <div className="mt-6">
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded"
                        onClick={() => setShowReportForm(!showReportForm)}
                    >
                        Report
                    </button>
                    {showReportForm && (
                        <div className="mt-4">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded"
                                value={reportReason}
                                onChange={(e) => setReportReason(e.target.value)}
                                placeholder="Reason for reporting"
                            />
                            <button
                                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                                onClick={handleReportSubmit}
                            >
                                Submit Report
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SurveyDetail;
