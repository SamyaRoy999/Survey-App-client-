// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";
// import { useState } from "react";

// const SurveyDetails = () => {
//   const { id } = useParams();
//   const { user, isProUser } = useContext(AuthContext); // Assuming you have AuthContext to manage user state
//   const [vote, setVote] = useState('');
//   const axiosPublic = useAxiosPublicSecour();

//   const { data: surveyDetail = {}, refetch, isLoading } = useQuery({
//     queryKey: ['surveySingle', id],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/surveyCreate/${id}`);
//       return res.data;
//     }
//   });

//   const handleVote = async () => {
//     if (vote && user) {
//       const res = await axiosPublic.patch(`/vote/${id}`, { option: vote });
//       refetch(); // Refetch the survey details after voting
//       console.log(res.data);
//     }
//   };

//   const { title, description, options = [], votes, deadline, status } = surveyDetail;

//    console.log(new Date(deadline));
//   if (isLoading) {
//     return <span className="loading loading-bars loading-lg"></span>;
//   }

//   return (
//     <div className="mx-auto flex justify-center items-center">
//       <div className="card w-full lg:w-6/12 bg-base-100 shadow-xl">
//         <div className="card-body m-3">
//           <h3 className="text-2xl font-bold font-Josefin text-[#0E6251]">{title}</h3>
//           <p className="font-semibold text-lg mt-5 font-Shanti">{description}</p>
//           {options.map((option, index) => (
//             <label key={index}>
//               <input type="radio" name="vote" value={option} onChange={() => setVote(option)} />
//               {option}
//             </label>
//           ))}
//           {user ? (
//             <button onClick={handleVote} className="btn bg-[#0E6251] text-white w-24 mt-5">Submit</button>
//           ) : (
//             <p className="text-red-500">Please log in to vote.</p>
//           )}
//           <div>
//             <p><strong>Yes:</strong> {votes ? votes.yes : 0}</p>
//             <p><strong>No:</strong> {votes ? votes.no : 0}</p>
//           </div>
//           {isProUser && (
//             <div>
//               <h4>Add Comment:</h4>
//               <textarea className="w-full border rounded p-2"></textarea>
//               <button className="btn bg-[#0E6251] text-white w-24 mt-5">Submit</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SurveyDetails;
