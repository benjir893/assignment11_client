import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/homepagecompo/Home";
import Login from "../pages/homepagecompo/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])