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
                    .then(res => {
                        console.log(res);
                        const userInfo = {
                            name,
                            email
                        }
                        axiosPublice.post('/users', userInfo)
                            .then(res => {
                                if (res.data) {
                                    console.log("user added database");
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
    // const hendelGoogleSingUp = () => {
    //     googleSingIn()
    //         .then(result => {
    //             const user = result.user
    //             if (user) {
    //                 Swal.fire({
    //                     position: "center",
    //                     icon: "success",
    //                     title: "Login successfull",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }
    //             const userInfo = {
    //                 name: result.user.displayName,
    //                 email: result.user.email
    //             }
    //             axiosPublice.post('/users', userInfo)
    //                 .then(res => {
    //                     if (res.data) {
    //                         console.log("user added database");
    //                     }
    //                 })

    //             setTimeout(() => {
    //                 navigate('/')
    //             }, 2000);
    //         })
    // }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat  bg-[url('https://i.ibb.co/mvd4cyd/sasha-kaunas-67-s-Oi7m-VIk-unsplash.jpg')]" >
       
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

export default Signup

// <a onClick={hendelGoogleSingUp} className="border-white-500 group m-auto my-0 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none">
//     <span>
//     <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
//     </span>
//     <span className="text-sm font-medium text-white">Google</span>
// </a>