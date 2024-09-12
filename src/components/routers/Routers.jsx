import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/homepagecompo/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Users from "../pages/users/Users";
import Subnav from "../navbar/Subnav";
import Queries from "../pages/queries/Queries";
import Myqueries from "../pages/queries/Myqueries";
import AddQuery from "../pages/queries/AddQuery";
import PrivateRouters from "../../services/PrivateRouters";
import MyqueriesCardDetails from "../pages/queries/MyqueriesCardDetails";
import UpdateQuery from "../pages/queries/UpdateQuery";
import Recomendations from "../pages/recomendations/Recomendations";
import RecomendationDetails from "../pages/recomendations/RecomendationDetails";
import Myrecomendations from "../pages/recomendations/Myrecomendations";
import AddMyrecomendation from "../pages/recomendations/AddMyrecomendation";

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
            },
            {
                path:'/users',
                element:<Users></Users>,
                loader:()=>fetch('http://localhost:5000/users')
            },
            {
                path:'/user',
                element:<Subnav></Subnav>,
                loader:()=>fetch('http://localhost:5000/users')
            },
            {
                path:'/queries',
                element:<Queries></Queries>,
                loader:()=>fetch('http://localhost:5000/queryproduct')
            },
            {
                path:'/myqueries',
                element:<Myqueries></Myqueries>,
                loader:()=>fetch('http://localhost:5000/queryproduct')

            },
            {
                path:'/myquerydetails/:id',
                element:<MyqueriesCardDetails></MyqueriesCardDetails>,
                loader:({params})=>fetch(`http://localhost:5000/queryproduct/${params.id}`)
            },
            {
                path:'/updatequery/:id',
                element:<UpdateQuery></UpdateQuery>,
                loader:({params})=>fetch(`http://localhost:5000/queryproduct/${params.id}`) 
            },
            {
                path:'/addquery',
                element:<PrivateRouters><AddQuery></AddQuery></PrivateRouters>
            },
            {
                path:'/recomendation',
                element:<Recomendations></Recomendations>,
                loader:()=>fetch('http://localhost:5000/recomendation')
            },
            {
                path:'/recomenddetails/:id',
                element:<RecomendationDetails></RecomendationDetails>,
                loader:({params})=>fetch(`http://localhost:5000/recomendation/${params.id}`)
            },
            {
                path:'/myrecomendation',
                element:<Myrecomendations></Myrecomendations>,
                loader:()=>fetch('http://localhost:5000/recomendation')
            },
            {
                path:'/addmyrecomendation',
                element:<AddMyrecomendation></AddMyrecomendation>
            }
        ]
    }
])