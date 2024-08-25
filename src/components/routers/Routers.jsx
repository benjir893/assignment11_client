import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/homepagecompo/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])