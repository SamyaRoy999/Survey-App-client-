
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const { emailBaseLogin, userUpdateProfile, setName, setPhotoURl } = useContext(AuthContext)

    const [passwordIcon, setPasswordIcon] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, photoUrl, name } = data

        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            toast.error('Password must have at least 6 characters, including uppercase and lowercase letters.')
            return;
        }
        setName(name)
        setPhotoURl(photoUrl)
        console.log(email, password, photoUrl, name);

        emailBaseLogin(email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
                userUpdateProfile(name, photoUrl).then(() => {
                    if (userCredential.user) {
                        toast.success("Registration Successful!")
                        setTimeout(() => {
                            navigate(from)
                        }, 2000);
                    }
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error("User is Alrady Exgist")
            });


        // user profileUpdate

    }

    return (


        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat  bg-[url('https://i.ibb.co/mvd4cyd/sasha-kaunas-67-s-Oi7m-VIk-unsplash.jpg')]" >
            <ToastContainer />
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
                                className="rounded-3xl border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="text"
                                name="name"
                                placeholder="Name"
                                {...register("name", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="text"
                                name="name"
                                placeholder="id@email.com"
                                {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="text"
                                name="name"
                                placeholder="PhotoURL"
                                {...register("photoUrl", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mb-4 text-lg">
                            <div className=" relative">

                                <input
                                    className="rounded-3xl border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
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
                            <button type="submit" className="rounded-3xl bg-[#90B0B7] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Register</button>
                        </div>
                    </form>
                    <p>Do not have an account   <Link to='/login' className=" text-[#90B0B7]">Login</Link></p>
                </div>
            </div>
        </div>

    )

}

export default Register
