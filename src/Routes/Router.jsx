import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Login/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
            path: "/",
            element: <Home></Home>,
        },
            {
            path: "/add-blog",
            element: <AddBlog></AddBlog>,
        },
            {
            path: "/all-blogs",
            element: <AllBlogs></AllBlogs>,
        },
            {
            path: "/featured-blogs",
            element: <FeaturedBlogs></FeaturedBlogs>,
        },
            {
            path: "/wishlist",
            element: <Wishlist></Wishlist>,
        },
            {
            path: "/login",
            element: <Login></Login>,
        },
            {
            path: "/register",
            element: <Wishlist></Wishlist>,
        },
    ]
    },
]);

export default router