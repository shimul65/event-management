import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Gallery from '../Pages/Gallery/Gallery';
import Blogs from '../Pages/Blogs/Blogs';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Contact from '../Pages/Contact/Contact';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Root from '../MainLayout/Root/Root';
import PrivateRoutes from './PrivateRoutes';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`/servicesData.json`)
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch(`/servicesData.json`)
            },
            {
                path: "/services/:id",
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: () => fetch(`/servicesData.json`)
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>,
                loader: () => fetch(`/galleryData.json`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default routes;