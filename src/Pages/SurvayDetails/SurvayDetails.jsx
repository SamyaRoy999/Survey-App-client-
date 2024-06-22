
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import useProUser from "../../hooks/useProUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaRegCommentDots } from "react-icons/fa";
import { VscReport } from "react-icons/vsc";

const SurvayDetails = () => {
    const { id } = useParams();
    const [vote, setVote] = useState('');
    const [voting, setVoting] = useState('');
    const axiosPublic = useAxiosPublicSecour();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [isProUser] = useProUser();
    const [comments, setComments] = useState('');
    const [reportReason, setReportReason] = useState('')


    const { data: survayDetail = {}, refetch } = useQuery({
        queryKey: ['survaySingle', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/survayCreate/${id}`);
            return res.data;
        }
    });

    const handleVote = async () => {
        if (vote && user) {
            const votes = {
                vote: vote,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            const res = await axiosPublic.patch(`/vote/${id}`, votes);
            // console.log(res.data);

            if (res.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your vote option ${vote} . count suceefull`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            setVoting(res.data.acknowledged)
        }
        refetch();
    };
    const handleComment = async () => {
        if (comments && isProUser) {
            const newComment = {
                comment: comments,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                timestamp: new Date()
            };
            const res = await axiosSecure.patch(`/proUser/comment/${id}`, newComment);
            // console.log(res.data);

            if (res.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your comment has been added",
                    showConfirmButton: false,
                    timer: 1500
                });
                setComments('');
                refetch();
            }
        }
    };

    // hendel report 

    const handleReportSubmit = async () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, report it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const reportData = {
                    surveyId: id,
                    userEmail: user.email,
                    reason: reportReason,
                    timestamp: new Date()
                };

                const res = await axiosPublic.patch(`/user/report/${id}`, reportData);
                // console.log(res.data);

                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Survey reported successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setReportReason('');
                    refetch();
                }
            }
        });

    }

    function parseDateString(dateString) {
        if (!dateString) return new Date('Invalid Date');
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    }

    const { title, description, options = [], deadline, voters = [], status, category, comment = [] } = survayDetail;
    const voteYes = voters.filter(item => item.vote === "yes");
    const voteNo = voters.filter(item => item.vote === "no");


    const parsedDeadline = parseDateString(deadline);
    const survayDeadlineEnd = new Date().toLocaleDateString("en-GB") > parsedDeadline.toLocaleDateString("en-GB");

    // console.log(parsedDeadline);
    // console.log(new Date().toLocaleDateString("en-GB"));
    return (
        <>
            <div className="mx-auto flex justify-center items-center">
                <div className="card w-full lg:w-6/12 bg-base-100 shadow-xl">
                    <div className="card-body m-3" >
                        <h3 className="text-2xl font-bold font-Josefin text-[#0E6251]">{title}</h3>
                        <p className="font-semibold text-lg mt-5 font-Shanti">{description}</p>
                        {options.map((option, index) => (
                            <label key={index} >
                                <input type="radio" name="vote" value={option} onChange={() => setVote(option)} />
                                {option}
                            </label>
                        ))}
                        <div className="flex items-center justify-between">

                            <button onClick={handleVote} disabled={!user || voting} className="btn bg-[#0E6251] text-white w-24 mt-5">Submit</button>
                            <div>
                                {isProUser && (
                                    <>
                                        <button className="btn mt-5 mr-2" onClick={() => document.getElementById('my_modal_1').showModal()}>Comment <FaRegCommentDots className="text-xl text-[#0E6251]" /></button>
                                        <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <div className="mt-5">
                                                    <h4 className="text-xl font-bold mb-5">Add a Comment</h4>
                                                    <textarea
                                                        className="textarea textarea-bordered w-full"
                                                        value={comments}
                                                        onChange={(e) => setComments(e.target.value)}
                                                        placeholder="Write your comment here..."
                                                    />
                                                </div>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button onClick={handleComment} className="btn bg-[#0E6251] text-white mt-3">Submit Comment</button>
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </>
                                )}


                                {
                                    user && (
                                        <>
                                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn mt-5 " onClick={() => document.getElementById('my_modal_2').showModal()}>Report  <VscReport className="text-xl text-red-500" ></VscReport></button>
                                            <dialog id="my_modal_2" className="modal">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg mb-4">Report a Survey</h3>
                                                    <textarea
                                                        className="textarea textarea-bordered w-full"
                                                        value={reportReason}
                                                        onChange={(e) => setReportReason(e.target.value)}
                                                        placeholder="Reason for reporting"
                                                    />
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button
                                                                className="mt-2 bg-[#0E6251] text-white py-2 px-4 rounded"
                                                                onClick={handleReportSubmit}
                                                            >
                                                                Submit Report
                                                            </button>
                                                            <button className="btn">Close</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                        {(survayDeadlineEnd || voting) && (
                            <div>
                                <h2 className=" font-Josefin font-bold text-2xl">Result :</h2>
                                <p className="mx-6"><span className="font-bold  mb-2">Total:</span> {voters.length}</p>
                                <p className="mx-6"><span className="font-bold  mb-2">Yes:</span> {voteYes ? voteYes.length : 0}</p>
                                <p className="mx-6"><span className="font-bold  mb-2">No:</span> {voteNo ? voteNo.length : 0}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mx-6 mt-4 lg:mx-14">
                <p><span className="font-bold pr-2  ">category:</span> {category}</p>
                <p><span className="font-bold pr-2  ">deadline:</span> {deadline}</p>
                <p><span className="font-bold pr-2  ">status</span> {status}</p>
            </div>
            <div>
                {comment.map((comData, ind) => (
                    <article key={ind} className="pt-14 mb-3 text-base lg:mx-14 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                    <img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src={comData.photo}
                                        alt={comData.name}
                                    />{comData.name}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time>{new Date(comData.timestamp).toLocaleDateString()}</time></p>
                            </div>
                            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            <div id="dropdownComment3" className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">{comData.comment}</p>
                    </article>
                ))}
            </div>
        </>
    );
}

export default SurvayDetails;
