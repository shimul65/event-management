import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Spinner from "../../Components/Spinner/Spinner";
import { Toaster } from "react-hot-toast";


const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <Spinner></Spinner> : <Outlet></Outlet>
            }
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;