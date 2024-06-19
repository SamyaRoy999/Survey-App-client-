import { useContext } from "react"
import { AuthContext } from "../../../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CommentedProUser = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: proComments = [] } = useQuery({
        queryKey: ['proComment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/proUser/comment/${user.email}`);
            return res.data
        }
    })
    console.log(proComments);

    // const { title } = proComments;

    return (
        <div>
            <h3 className="text-center font-Josefin font-bold text-2xl text-[#0E6251] py-6">Commented on Various Surveys</h3>
            {proComments.map(commentData => {
                const { _id, comment = [], title, description, } = commentData;
                return (
                    <div key={_id} className="mb-4 mx-11 shadow-xl font-Josefin font-bold flex justify-between items-center border border-gray-300 p-4 rounded">
                        <div>
                            <h2 className="text-2xl  font-bold pb-4 text-[#0E6251]">{title}</h2>
                            <p className="font-Shanti font-light pb-2">{description}</p>

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

                    </div>
                )
            })}
        </div>
    )
}

export default CommentedProUser