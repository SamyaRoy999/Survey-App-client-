import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from "sweetalert2";



const SurvayStatus = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allSurvey = [], refetch } = useQuery({
        queryKey: ["allSurvey"],
        queryFn: async () => {
            const res = await axiosSecure.get('/allSurvey');
            return res.data
        }
    })
    const hendelStatus = async (id, status) => {

        const newStatus = status === "publish" ? "unpublish" : "publish";
        const res = await axiosSecure.patch(`/survayStatus/${id}`, { status: newStatus });
        if (res.data.acknowledged) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: ` successfull ${newStatus} survey`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        refetch()
    }

    return (
        <div>
            {allSurvey.map(item => {
                const { title, description, voters = [], deadline, status, _id } = item;
                refetch()
                return (
                    <div key={item._id} className="mb-4 mx-12 shadow-xl font-Josefin font-bold flex justify-between items-center border border-gray-300 p-4 rounded">
                        <div>
                            <h2 className="text-2xl  font-bold pb-4 text-[#0E6251]">{title}</h2>
                            <p className="font-Shanti font-light pb-2">{description}</p>
                            <p className="font-Shanti font-light pb-2">deadline: {deadline}</p>
                            <p><strong>Votes:</strong> {voters.length} </p>
                        </div>
                        <button
                            type="button"
                            className="btn bg-[#0E6251] bg-opacity-30 mt-4 inline-block btn-sm rounded-full border-2 border-[#0E6251] px-6  text-base font-medium leading-normal  transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                            onClick={() => hendelStatus(_id, status)}
                        >
                            {status === "publish" ? "unpublish" : "publish"}
                        </button>
                    </div>

                );
            })}
        </div>
    )
}

export default SurvayStatus