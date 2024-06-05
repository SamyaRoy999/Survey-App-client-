

import { Link } from 'react-router-dom'

import { CiLogin } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { signOutUser, user, Name, photo, } = useContext(AuthContext);


    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localthem = localStorage.getItem('theme')
        document.querySelector('html').setAttribute("data-theme", localthem)
    }, [theme])

    const hendelThems = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const navlink = <div className='gap-3 flex font-Josefin text-base'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/survey'><li>Survey</li></Link>
        <Link to='/dashboard'><li>Deshboard</li></Link>
    </div>
    return (
        <div className="navbar fixed   w-full z-10 bg-stone-700  bg-opacity-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SurveyScape</a>
            </div>
            <div className="navbar-center hidden  lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <><a className="flex gap-1 items-center font-bold  text-sm lg:text-lg font-montserrat cursor-pointer  text-[#90B0B7] " onClick={() => signOutUser()}> <FiLogOut className='text-xl ' /> Logout</a>
                    <div className="">
                        <div className="group relative cursor-pointer  px-4">

                            <div className="flex items-center  justify-between space-x-5 p-1  ">
                                <a className="menu-hover  " onClick="">
                                    <div className="avatar border-4 rounded-full  border-[#90B0B7] p-1">
                                        <div className="w-7   rounded-full">
                                            <img src={user.photoURL || photo} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="invisible absolute z-50 flex w-28  right-0 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                                <a className="my-2 block border-b    w-full border-gray-100  font-semibold text-gray-500 hover:text-black ">
                                    {user.displayName || Name}
                                </a>

                            </div>
                        </div>
                    </div></> : <Link to='./login'><button className='flex gap-1 items-center font-bold text-base lg:text-lg font-montserrat btn-md  btn btn-outline text-[#90B0B7] '><CiLogin className='text-xl' /> Login</button></Link>}
                <label className="swap swap-rotate mr-5">

                    <input type="checkbox" onChange={hendelThems} className="theme-controller" />

                    <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    )
}

export default Navbar