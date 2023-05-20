import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                element: <MyToys></MyToys>
            },
            {
                path: "addtoy",
                element: <AddToy></AddToy>
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
        ]
    }
])

export default router;