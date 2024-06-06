import { useForm } from "react-hook-form"

const SurveyCreate = () => {

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (

        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://thumbs.dreamstime.com/b/survey-concept-shot-survey-written-paper-chit-163484143.jpg?w=768')]">
            <div className="rounded-xl w-8/12  bg-opacity-10 px-16 py-10 shadow-2xl backdrop-blur-md max-sm:px-8">
                <div className="">
                    {/* <div className="mb-8 flex flex-col items-center">
                        <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" />
                        <h1 className="mb-2 text-2xl">Instagram</h1>
                        <span className="text-gray-300">Enter Login Details</span>
                    </div> */}

                    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-4  shadow-md rounded">
                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Title</label>
                            <input
                                name="title"
                                {...register("title", { required: true })}
                                required
                                className="rounded-3xl w-full  border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Description</label>
                            <textarea
                                name="description"
                                {...register("description", { required: true })}
                                required
                                className="rounded-3xl w-full border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Category</label>
                            <select
                                name="category"
                                {...register("category", { required: true })}
                                required
                                className="rounded-3xl w-full border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" >
                                <option value="">All</option>
                                <option value="Customer Feedback">Customer Feedback</option>
                                <option value="Employee Feedback">Employee Feedback</option>
                                <option value="Market Research">Market Research</option>
                                <option value="Product Feedback">Product Feedback</option>
                                <option value="Event Feedback">Event Feedback</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                {...register("deadline", { required: true })}
                                required
                                className="rounded-3xl w-full border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Options</label>
                            <div className="flex space-x-4">
                                <input
                                    type="radio"
                                    name="options"
                                    value="yes"
                                    {...register("options", { required: true })}
                                    required
                                    className="rounded-3xl  border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                />
                                <label className="text-white">Yes</label>
                                <input
                                    type="radio"
                                    name="options"
                                    value="no"
                                    {...register("options", { required: true })}
                                    required
                                    className="rounded-3xl  border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                />
                                <label className="text-white">No</label>
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Create Survey
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SurveyCreate