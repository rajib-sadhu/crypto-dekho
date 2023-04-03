import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main.jsx";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage.jsx";
import Home from "../Components/Pages/Home/Home.jsx";
import About from "../Components/Pages/About/About.jsx";
import Contact from "../Components/Pages/Contact/Contact.jsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/contact',
                element:<Contact/>
            },
        ]
    }

]);