import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import useSurveyor from "../hooks/useSurveyor";


const Deshboard = () => {
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
   
    return (

        <div className="flex ">
            <div className="h-screen lg:w-64 bg-[#0E6251]">
                {isAdmin ? (
                    <ul className="menu text-white uppercase">
                        <li><NavLink to='/dashboard/admin/users'>Manage Users Roles</NavLink></li>
                    </ul>
                ) : isSurveyor ? (
                    <ul className="menu text-white uppercase">
                        <li><NavLink to='surveyor/create'>Surveyor Create</NavLink></li>
                    </ul>
                ) : (

                    <ul className="menu text-white">
                        <li><NavLink to='/dashboard/participate'>Participate User</NavLink></li>
                    </ul>
                )
                }
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Deshboard