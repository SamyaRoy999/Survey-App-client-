
// import { useParams } from 'react-router-dom'
// import useAxiosPublicSecour from '../../../hooks/useAxiosPublicSecour';
// import { useQuery } from '@tanstack/react-query';

// const SurveyorSurveysDetails = () => {

//     const { id } = useParams();
//     const axiosPublic = useAxiosPublicSecour();

//     const { data: SurveyorDetail = {} } = useQuery({
//         queryKey: ['survaySingle', id],
//         queryFn: async () => {
//             const res = await axiosPublic.get(`/survayCreate/${id}`);
//             return res.data;
//         }
//     });

//     console.log(SurveyorDetail);
//     const { voters = [] } = SurveyorDetail;

//     const voteYes = voters.filter(item => item.vote === "yes");
//     const voteNo = voters.filter(item => item.vote === "no");

//     return (
//         <div>
//             <h3 className="text-center font-Josefin font-bold text-2xl text-[#0E6251] py-6">Detailed Survey Response Overview</h3>
//             <div className='flex justify-center bg-[#0E6251] mx-14 text-white'>
//                 <p className="mx-6"><span className="font-bold  mb-2">Yes:</span> {voteYes ? voteYes.length : 0}</p>
//                 <p className="mx-6"><span className="font-bold  mb-2">No:</span> {voteNo ? voteNo.length : 0}</p>
//             </div>
//             <div className="overflow-x-auto mx-14">
//                 <table className="table ">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>Serial No</th>
//                             <th>User Email </th>
//                             <th>User Name</th>
//                             <th>Vote</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* row 1 */}
//                         {voters
//                             .map((item, index) => (
//                                 <tr key={index}>
//                                     <th>{index + 1}</th>
//                                     <td>{item.email}</td>
//                                     <td>{item.name}</td>
//                                     <td><span className={item.vote === "yes" ?
//                                         'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'
//                                         : 'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300'}
//                                     >{item.vote}</span> </td>
//                                 </tr>
//                             )
//                             )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default SurveyorSurveysDetails


import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublicSecour from '../../../hooks/useAxiosPublicSecour';
import { useQuery } from '@tanstack/react-query';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

const SurveyorSurveysDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublicSecour();

    const { data: SurveyorDetail = {} } = useQuery({
        queryKey: ['survaySingle', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/survayCreate/${id}`);
            return res.data;
        }
    });

    const { voters = [] } = SurveyorDetail;
    const [viewType, setViewType] = useState('table'); // 'table' বা 'chart'

    const voteYes = voters.filter(item => item.vote === "yes");
    const voteNo = voters.filter(item => item.vote === "no");

    // চার্ট ডেটা কনফিগারেশন
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
                data: [voteYes.length, voteNo.length]
            }
        ]
    };

    // চার্ট অপশন কনফিগারেশন
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <h3 className="text-center font-Josefin font-bold text-2xl text-[#0E6251] py-6">Detailed Survey Response Overview</h3>
            
            {/* টগল বোতাম */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setViewType('table')}
                    className={`mr-2 px-4 py-2 rounded ${viewType === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    Table View
                </button>
                <button
                    onClick={() => setViewType('chart')}
                    className={`px-4 py-2 rounded ${viewType === 'chart' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    Chart View
                </button>
            </div>

            {viewType === 'table' ? (
                <div className='flex justify-center bg-[#0E6251] mx-14 text-white'>
                    <p className="mx-6"><span className="font-bold mb-2">Yes:</span> {voteYes.length}</p>
                    <p className="mx-6"><span className="font-bold mb-2">No:</span> {voteNo.length}</p>
                </div>
            ) : (
                <div className="flex justify-center bg-[#0E6251] mx-14 text-white">
                    <p className="mx-6"><span className="font-bold mb-2">Yes:</span> {voteYes.length}</p>
                    <p className="mx-6"><span className="font-bold mb-2">No:</span> {voteNo.length}</p>
                </div>
            )}

            {viewType === 'table' ? (
                <div className="overflow-x-auto mx-14">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>User Email </th>
                                <th>User Name</th>
                                <th>Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {voters.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <span className={item.vote === "yes" ?
                                            'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'
                                            : 'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300'}
                                        >
                                            {item.vote}
                                        </span>
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

