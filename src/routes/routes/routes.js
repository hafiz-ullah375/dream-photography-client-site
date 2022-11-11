
import MyReview from "../../Pages/AddReview/MyReview";
import AddServices from "../../Pages/AllServices/AddServices";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../LayOut/Main");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addServices',
                element: <AddServices></AddServices>
            },

            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },

            {
                path: '/myReview',
                element: <MyReview></MyReview>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-pearl.vercel.app/all-services/${params.id}`)

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])