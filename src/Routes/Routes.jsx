
import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Survey from "../Pages/Survey/Survey.jsx";
import SurvayDetails from "../Pages/SurvayDetails/SurvayDetails.jsx";
import Deshboard from "../Layout/Deshboard.jsx";
import ParticipateUser from "../Pages/Dashboard/User/ParticipateUser.jsx";
import Signup from "../Pages/Signup/Signup.jsx";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers.jsx";
import SurveyCreate from "../Pages/Dashboard/Surveyor/SurveyCreate.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ProUser from "../Pages/ProUser/ProUser.jsx";
import Errors from "../Pages/Error/Error.jsx";
import CommentedProUser from "../Pages/Dashboard/User/CommentedProUser.jsx";
import SurveyDetail from "../App.jsx";
import Reportedsurveys from "../Pages/Dashboard/User/Reportedsurveys.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Errors></Errors>,
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
                element: <SurveyDetail />
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/Pro-user',
                element: <ProUser />
            }


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Deshboard /></PrivateRoute>,
        children: [
            {
                path: "user/surveys",
                element: <ParticipateUser />
            },
            {
                path: "user/my-reports",
                element: <Reportedsurveys />
            },

            // pro user 

            {
                path: "user/comments",
                element: <CommentedProUser />
            },

            // Admin deshdord
            {
                path: "admin/users",
                element: <ManageUsers />
            },
            // dashboard surveyor
            {
                path: "surveyor/create",
                element: <SurveyCreate />
            },

        ]
    }
]);

export default router