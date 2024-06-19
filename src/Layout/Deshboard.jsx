import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import useSurveyor from "../hooks/useSurveyor";
import useProUser from "../hooks/useProUser";



const Deshboard = () => {
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
    const [isProUser] = useProUser();
    return (

        <div className="flex ">
            <div className="h-screen fixed lg:w-64 bg-[#0E6251] ">
                {isAdmin ? (
                    <ul className="menu text-white uppercase">
                        <li><NavLink to='admin/users'>Manage Users Roles</NavLink></li>
                    </ul>
                ) : isSurveyor ? (
                    <ul className="menu text-white uppercase">
                        <li><NavLink to='surveyor/create'>Surveyor Create</NavLink></li>
                    </ul>
                ) : (

                    <ul className="menu text-white">
                        <li><NavLink to='/dashboard/user/surveys'>Participate User</NavLink></li>
                        <li><NavLink to='/dashboard/user/my-reports'>My Reports</NavLink></li>
                        {isProUser &&
                            <li><NavLink to='/dashboard/user/comments'> Commented surveys</NavLink></li>
                        }
                    </ul>
                )
                }
                <div className="divider"></div>
                <ul className="menu text-white">
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>

            </div>
            <div className="flex-1 ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Deshboard