import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "addtoy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "toy/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-fusion-server-mizanphero.vercel.app/toy/${params.id}`)
            },
            {
                path: "updateToy/:id",
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-fusion-server-mizanphero.vercel.app/toy/${params.id}`)
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])

export default router;