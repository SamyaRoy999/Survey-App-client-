
import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home.jsx";

import Error from "../Pages/Error/Error.jsx";
import Login from "../Pages/Login/Login.jsx";
import SurveysPage from "../App.jsx";
import Survey from "../Pages/Survey/Survey.jsx";
import SurvayDetails from "../Pages/SurvayDetails/SurvayDetails.jsx";
import Deshboard from "../Layout/Deshboard.jsx";
import ParticipateUser from "../Pages/Dashboard/ParticipateUser/ParticipateUser.jsx";
import Signup from "../Pages/Signup/Signup.jsx";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/survey',
                element: <Survey></Survey>
            },
            {
                path: '/survey/survayDetails/:id',
                element: <SurvayDetails></SurvayDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/app',
                element: <SurveysPage></SurveysPage>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },


        ]
    },
    {
        path: 'dashboard',
        element: <Deshboard />,
        children: [
            {
                path: "participate",
                element: <ParticipateUser />
            },
            
            // Admin deshdord
            {
                path: "admin/users",
                element: <ManageUsers />
            },
            
        ]
    }
]);

export default router