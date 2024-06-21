import { useParams } from "react-router-dom"
import DatePicker from "react-datepicker";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublicSecour from "../../../hooks/useAxiosPublicSecour";
import { useQuery } from "@tanstack/react-query";
const UpdateSingle = () => {
    const { id } = useParams();
    const axiosSecour  = useAxiosSecure()
    const [startDate, setStartDate] = useState(new Date());

    const axiosPublic = useAxiosPublicSecour();

    const { data: SurveyorDetail = {} } = useQuery({
        queryKey: ['survaySingle', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/survayCreate/${id}`);
            return res.data;
        }
    });

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const { title, description, category } = data;
        const surveyCreateData = { title, description, category, deadline: startDate.toLocaleDateString("en-GB") }
        console.log(surveyCreateData);
        const res = await axiosSecour.put(`/survayUpdate/${id}`, surveyCreateData);
        if (res.data.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " Survey update successfull",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }

    }
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://thumbs.dreamstime.com/b/survey-concept-shot-survey-written-paper-chit-163484143.jpg?w=768')]">
            <div className="rounded-xl w-8/12  bg-opacity-10 px-16 py-10 shadow-2xl backdrop-blur-md max-sm:px-8">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-4  shadow-md rounded">
                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Title</label>
                            <input
                                name="title"
                                defaultValue={SurveyorDetail.title}
                                {...register("title", { required: true })}
                                required
                                className="rounded-3xl text-white w-full  border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Description</label>
                            <textarea
                                name="description"
                                defaultValue={SurveyorDetail.description}
                                {...register("description", { required: true })}
                                required
                                className="rounded-3xl text-white w-full border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Category</label>
                            <select
                                name="category"
                                defaultValue={SurveyorDetail.category}
                                {...register("category", { required: true })}
                                required
                                className="rounded-3xl text-white w-full border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" >
                                {/* <option   value="" disabled selected hidden>Category</option> */}
                                <option value="Customer Feedback">Customer Feedback</option>
                                <option value="Employee Feedback">Employee Feedback</option>
                                <option value="Market Research">Market Research</option>
                                <option value="Product Feedback">Product Feedback</option>
                                <option value="Event Feedback">Event Feedback</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-base font-bold mb-2">Deadline</label>
                            <DatePicker selected={startDate} onChange={handleDateChange} />
                        </div>

                        <button type="submit" className=" btn btn-outline hover:bg-[#0E6251] text-white  w-full  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update Survey
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateSingle