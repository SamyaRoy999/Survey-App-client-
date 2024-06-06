import { useForm } from "react-hook-form"

const SurveyCreationForm = () => {

    // try {
    //   const response = await axios.post('http://localhost:5000/api/surveys', data);
    //   console.log('Survey created successfully:', response.data);
    // } catch (error) {
    //   console.error('Error creating survey:', error);
    // }
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                    name="title"
                    {...register("title", { required: true })}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea
                    name="description"
                    {...register("description", { required: true })}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Options</label>
                <div className="flex space-x-4">
                    <input
                        type="radio"
                        name="options"
                        value="yes"
                        {...register("options", { required: true })}
                        required
                        className="mr-2 leading-tight"
                    />
                    <label className="text-gray-700">Yes</label>
                    <input
                        type="radio"
                        name="options"
                        value="no"
                        {...register("options", { required: true })}
                        required
                        className="mr-2 leading-tight"
                    />
                    <label className="text-gray-700">No</label>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                <select
                    name="category"
                    {...register("category", { required: true })}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="technology">Technology</option>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Deadline</label>
                <input
                    type="date"
                    name="deadline"
                    {...register("deadline", { required: true })}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Create Survey
            </button>
        </form>
    );
};

export default SurveyCreationForm;
