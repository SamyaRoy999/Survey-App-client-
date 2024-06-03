import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"


const Main = () => {

    return (
        <div className="max-w-screen-xl mx-auto ">
            <div className="pb-[70px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Main