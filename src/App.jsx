import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublicSecour from '../../../hooks/useAxiosPublicSecour';
import { useQuery } from '@tanstack/react-query';
import { Bar } from 'react-chartjs-2'; // Importing Bar chart from Chart.js

const SurveyorSurveysDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublicSecour();

    // Fetch survey details including voters' responses
    const { data: surveyDetail = {} } = useQuery({
        queryKey: ['surveySingle', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/surveyCreate/${id}`);
            return res.data;
        }
    });

    const { voters = [] } = surveyDetail;

    // State to toggle between table and chart view
    const [viewType, setViewType] = useState('table'); // 'table' or 'chart'

    // Calculate counts for chart data
    const yesVotes = voters.filter(item => item.vote === 'yes').length;
    const noVotes = voters.filter(item => item.vote === 'no').length;

    // Chart data configuration
    const chartData = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                label: 'Votes',
                backgroundColor: ['#34D399', '#F87171'],
                borderColor: ['#34D399', '#F87171'],
                borderWidth: 1,
                hoverBackgroundColor: ['#4ADE80', '#F87171'],
                hoverBorderColor: ['#4ADE80', '#F87171'],
                data: [yesVotes, noVotes]
            }
        ]
    };

    // Chart options configuration
    const chartOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    return (
        <div>
            <h3 className="text-center font-Josefin font-bold text-2xl text-[#0E6251] py-6">
                Detailed Survey Response Overview
            </h3>
            {/* Toggle button for table/chart view */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setViewType('table')}
                    className={`mr-2 px-4 py-2 rounded ${
                        viewType === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    Table View
                </button>
                <button
                    onClick={() => setViewType('chart')}
                    className={`px-4 py-2 rounded ${
                        viewType === 'chart' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    Chart View
                </button>
            </div>

            {/* Conditional rendering based on viewType state */}
            {viewType === 'table' ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                        <thead className="border-b border-neutral-200 bg-[#0E6251] font-medium text-white dark:border-white/10">
                            <tr>
                                <th scope="col" className="px-6 py-4">
                                    Serial No
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    User Email
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    User Name
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Vote
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {voters.map((item, index) => (
                                <tr key={index} className="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span
                                            className={
                                                item.vote === 'yes'
                                                    ? 'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'
                                                    : 'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300'
                                            }
                                        >
                                            {item.vote}
                                        </span>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SurveyorSurveysDetails;

