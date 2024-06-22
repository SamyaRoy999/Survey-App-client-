import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {


    const { createUser, updataProfile,  } = useContext(AuthContext);
    const [passwordIcon, setPasswordIcon] = useState(false)
    const navigate = useNavigate();
    const axiosPublice = useAxiosPublicSecour();
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()
    const onSubmit = (data) => {
        const name = data.name
        const photoUrl = data.photoUrl
        const email = data.email
        const password = data.password
        createUser(email, password)
            .then(result => {
                const user = result.user
                updataProfile(name, photoUrl)
                    .then(() => {
                        
                        const userInfo = {
                            name,
                            email
                        }
                        axiosPublice.post('/users', userInfo)
                            .then(res => {
                                if (res.data) {
                                    // console.log("user added database");
                                }
                            })
                    })
                if (user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Singup successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                setTimeout(() => {
                    navigate("/")
                }, 2000);
            })
    }
   
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat  bg-[url('https://i.ibb.co/Qjz4pwC/Adobe-Stock-485095547-Preview.jpg')]" >
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img src="https://i.ibb.co/y6M2n3G/loginer-removebg-preview.png" width="150" alt="" />
                        <h1 className="mb-2 text-2xl">Register</h1>
                        <span className="text-gray-300">Enter Register Details</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="text"
                                name="name"
                                placeholder="Name"
                                {...register("name", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="text"
                                name="name"
                                placeholder="id@email.com"
                                {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="text"
                                name="name"
                                placeholder="PhotoURL"
                                {...register("photoUrl", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mb-4 text-lg">
                            <div className=" relative">

                                <input
                                    className="rounded-3xl border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                    type={passwordIcon ? "text" : "password"}
                                    name="name"
                                    placeholder="*******"
                                    {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                                <div onClick={() => setPasswordIcon(!passwordIcon)} className=" absolute right-3 top-4">
                                    {passwordIcon ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" className="rounded-3xl bg-[#0E6251] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Register</button>
                        </div>
                    </form>
                    <p>Do not have an account   <Link to='/login' className=" text-slate-800 font-bold">Login</Link></p>
                    <p>Back to <Link to='/' className=" text-slate-800 font-bold">Home</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup

