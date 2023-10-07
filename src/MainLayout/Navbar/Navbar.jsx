import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/unica.jpg'


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {/* {user && <>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
        } */}
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
                <Link to='/' className=""><img src={logo} alt="" /><p className="ml-16 mt-1 font-normal text-[#676767]">Event Agency</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center border gap-3 px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {/* {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                            </li>
                            <li>
                                <button onClick={handleLogout} className="btn btn-sm  btn-ghost">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                } */}
                <Link to='/login'>
                    <button className="btn">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;