import { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { FaGithub } from "react-icons/fa";


import { IoLogoGoogle } from "react-icons/io";
import useAxiosPublicSecour from '../../hooks/useAxiosPublicSecour';

const Login = () => {


    const { googleSingIn, signInUser, githubSingIn } = useContext(AuthContext)
    const axiosPublice = useAxiosPublicSecour();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;
        // console.log(email, password);

        signInUser(email, password)
            .then((user) => {

                if (user.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(() => {
                        navigate(from)
                    }, 2000);
                }

            })
            .catch(() => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "The email and password do not match our records. Please try again",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    const hendelSocial = (socialLogin) => {
        socialLogin()
            .then(result => {

                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                // console.log(userInfo);
                axiosPublice.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
                            if (result.data) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Login successfull",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            // console.log("user added database");
                        }
                    })

                setTimeout(() => {
                    navigate(from, { replace: true })
                }, 2000);

            })
    }

    return (

        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://i.ibb.co/gv6cYhX/Adobe-Stock-243413980-Preview.jpg')]">
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img src="https://i.ibb.co/y6M2n3G/loginer-removebg-preview.png" width="150" alt="" />
                        <h1 className="mb-2 text-2xl">Login</h1>
                        <span className="text-gray-300">Enter Login Details</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 text-lg">
                            <input type="email"
                                name="name"
                                className="rounded-3xl border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" placeholder="id@email.com"
                                {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className="mb-4 text-lg">
                            <input
                                type="password"
                                name="password"
                                className="rounded-3xl border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" placeholder="*********"
                                {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" className="rounded-3xl bg-[#0E6251] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                        </div>
                        {/*  Divider  */}
                        <div
                            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                            <p
                                className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>
                    </form>
                    <p>Continue with</p>
                    <div className=' flex justify-center gap-3'>
                        <a
                            className="rounded-3xl  flex items-center gap-2 border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"

                            onClick={() => hendelSocial(googleSingIn)}
                            role="button"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            {/*  Facebook  */}
                            <IoLogoGoogle className=" text-2xl "
                            />
                            Google
                        </a>
                        <a
                            className="rounded-3xl  flex items-center gap-2 border-none bg-[#0E6251] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"

                            onClick={() => hendelSocial(githubSingIn)}
                            role="button"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            {/*  Facebook  */}
                            <FaGithub className=" text-2xl "
                            />
                            Github
                        </a>
                    </div>
                    <p>Do not have an account   <Link to='/signup' className=" text-slate-800 font-bold">Register</Link></p>
                    <p>back to    <Link to='/' className=" text-slate-800 font-bold">Home</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login