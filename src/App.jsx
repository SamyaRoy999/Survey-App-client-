import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SurvayStatus = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allSurvey = [], refetch } = useQuery({
        queryKey: ["allSurvey"],
        queryFn: async () => {
            const res = await axiosSecure.get('/allSurvey');
            return res.data;
        }
    });

    const handleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === "publish" ? "unpublish" : "publish";
        try {
            await axiosSecure.put(`/surveys/${id}/status`, { status: newStatus });
            refetch();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <div>
            {allSurvey.map(item => {
                const { _id, title, description, voters = [], deadline, status } = item;
                return (
                    <div key={_id} className="mb-4 mx-12 shadow-xl font-Josefin font-bold flex justify-between items-center border border-gray-300 p-4 rounded">
                        <div>
                            <h2 className="text-2xl font-bold pb-4 text-[#0E6251]">{title}</h2>
                            <p className="font-Shanti font-light pb-2">{description}</p>
                            <p className="font-Shanti font-light pb-2">Deadline: {deadline}</p>
                            <p><strong>Votes:</strong> {voters.length}</p>
                        </div>
                        <button
                            type="button"
                            className="btn bg-[#0E6251] bg-opacity-30 mt-4 inline-block btn-sm rounded-full border-2 border-[#0E6251] px-6 text-base font-medium leading-normal transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                            onClick={() => handleStatus(_id, status)}
                        >
                            {status === "publish" ? "Unpublish" : "Publish"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default SurvayStatus;
