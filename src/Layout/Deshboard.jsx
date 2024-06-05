import { NavLink, Outlet } from "react-router-dom"


const Deshboard = () => {
    const isAdmin = true
    return (

        <div className="flex ">
            <div className="h-screen lg:w-64 bg-[#4A4A4A]">
                {isAdmin ?
                    (
                        <ul className="menu text-white uppercase">
                            <li><NavLink to='/dashboard/admin/users'>Manage Users Roles</NavLink></li>
                        </ul>
                    )
                    : (

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