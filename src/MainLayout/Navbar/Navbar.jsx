import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/unica.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import auth from "../../Firebase/firebase.config";
import profile from '../../assets/profile.png'


const Navbar = () => {

    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    
    const handleLogOut = () => {
        logOut(auth)
            .then(() => {
                navigate('/login');
                toast.success('User Log Out Successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }

    const navLinks = <>
        <li className=" py-2"><NavLink to='/'>Home</NavLink></li>
        <li className=" py-2"><NavLink to='/services'>Services</NavLink></li>
        {user && <>
            <li className=" py-2"><NavLink to='/gallery'>Gallery</NavLink></li>
            <li className=" py-2"><NavLink to='/blogs'>Blogs</NavLink></li>
        </>
        }
        <li className=" py-2"><NavLink to='/about'>About</NavLink></li>
        <li className=" py-2"><NavLink to='/contact'>Contact</NavLink></li>

    </>


    return (
        <div style={{ fontFamily: 'montserrat,sans-serif', font: 'bold' }} className="navbar bg-base-100 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className=""><img src={logo} alt="" /><p className="md:ml-16 ml-12 text-sm md:text-lg mt-1 font-normal text-[#676767]">Wedding Agency</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-6 px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user ? user.photoURL : profile} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu border menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-fit">
                                <li>
                                    <div className="text-lg"> Name : <br />{user?.displayName}</div>

                                </li>
                                <li>
                                    <div className="text-lg">Email : <br />{user?.email}</div>

                                </li>
                                <li>
                                    <button onClick={handleLogOut}
                                        className="btn rounded-full bg-[#ff635c] hover:bg-[#fcb41e]  hover:text-primary-bg text-xs md:text-lg font-medium my-2 md:font-extrabold text-[#FFF] px-4 border-none">Log out</button>

                                </li>
                            </ul>
                        </div>
                        :
                        <Link to='/login'>
                            <button
                                className="btn rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-lg font-medium md:font-extrabold text-[#FFF] px-7 border-none">LOG IN</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;