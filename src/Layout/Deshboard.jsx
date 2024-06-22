import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import useSurveyor from "../hooks/useSurveyor";
import useProUser from "../hooks/useProUser";

import { MdManageAccounts } from "react-icons/md";
import { RiSurveyFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { AiFillBulb } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { GrUpdate } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
import { SiSurveymonkey } from "react-icons/si";

const Deshboard = () => {
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
    const [isProUser] = useProUser();
    return (

        <div className="flex flex-col lg:flex-row ">
            <div className="lg:h-screen lg:fixed w-full lg:w-64 bg-[#0E6251] ">
                <div className=" flex items-center">
                    <div className="w-20 ">
                        <img src="https://i.ibb.co/JB9YGTB/tripod-logo-stock-illustration-design-260nw-1828569623-prev-ui.png" alt="" />
                    </div>
                    <a className=" lg:text-2xl font-Shanti font-bold text-white ">Survey<span className='text-[#2B3440] '>scape</span></a>
                </div>
                <div className="divider"></div>
                {isAdmin ? (
                    <ul className="menu text-white uppercase">
                        <li><NavLink to='/dashboard/admin/users'> <MdManageAccounts className="text-white text-xl " /> Manage Users Roles</NavLink></li>
                        <li><NavLink to='/dashboard/admin/surveys'><RiSurveyFill className="text-white text-xl " />  Manage surveys</NavLink></li>
                        <li><NavLink to='/dashboard/admin/payments'> <MdPayments className="text-white text-xl " /> Payment History</NavLink></li>
                        <li><NavLink to='/dashboard/admin/surveys-responses'><AiFillBulb className="text-white text-xl " /> surveys responses</NavLink></li>
                    </ul>
                ) : isSurveyor ? (
                    <ul className="menu text-white uppercase">
                        <li><NavLink to='/dashboard/surveyor/create'> <IoCreateOutline className="text-white text-xl " /> Survey Create</NavLink></li>
                        <li><NavLink to='/dashboard/surveyor/surveys'> <GrUserManager className="text-white text-xl " /> survey  Responses</NavLink></li>
                        <li><NavLink to='/dashboard/surveyor/update'> <GrUpdate className="text-white text-xl " /> survey update</NavLink></li>
                    </ul>
                ) : (

                    <ul className="menu text-white uppercase">
                        <li><NavLink to='/dashboard/user/surveys'> <FaUserAlt className="text-white text-xl " /> Participate User</NavLink></li>
                        <li><NavLink to='/dashboard/user/my-reports'> <MdOutlineReportProblem className="text-white text-xl " /> My Reports</NavLink></li>
                        {isProUser &&
                            <li><NavLink to='/dashboard/user/comments'> <FaRegCommentDots className="text-white text-xl " />  Commented surveys</NavLink></li>
                        }
                    </ul>
                )
                }
                <div className="divider"></div>
                <ul className="menu text-white">
                    <li><NavLink to='/'><FaHome className="text-white text-xl "></FaHome > Home</NavLink></li>
                    <li><NavLink to='/survey'><SiSurveymonkey className="text-white text-xl "></SiSurveymonkey >Survey</NavLink></li>
                </ul>

            </div>
            <div className="flex-1 mt-14 lg:ml-64">
                
                <Outlet></Outlet>
                
            </div>
        </div>
    )
}

export default Deshboard