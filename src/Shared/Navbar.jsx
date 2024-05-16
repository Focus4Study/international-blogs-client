import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import '../App.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(
                console.log('logged out successfully'),
                Swal.fire({
                    title: 'Logged Out',
                    text: 'You have been logged out',
                    icon: 'info',
                    confirmButtonText: 'Ok'
                })
            )
            .catch(

        )
    }

    const links = <>
        <button className="mr-3 border-0"><NavLink className={'lg:px-5 lg:py-3'} to={'/'}>Home</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'lg:px-5 lg:py-3'} to={'/add-blog'}>Add Blog</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'lg:px-5 lg:py-3'} to={'/all-blogs'}>All blogs</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'lg:px-5 lg:py-3'} to={'/featured-blogs'}>Featured Blogs</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'lg:px-5 lg:py-3'} to={'/wishlist'}>Wishlist</NavLink></button>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <img className="h-10" src="https://i.ibb.co/dWTwJpJ/Blog-logo.png" alt="" /><a className="btn btn-ghost text-xl">Blog Stream</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="navbar-end md:gap-4 gap-2 flex items-center">
                                <button onClick={handleSignOut} className="rounded-sm h-6 px-2 text-xs md:btn bg-gray-900 text-white">SignOut</button>
                                <div data-tip={user.displayName} className="tooltip tooltip-bottom w-11 ">
                                    <img className="rounded-full" src={user.photoURL} />
                                </div>
                            </div>
                            :
                            <div tabIndex={0} className="navbar-end flex">
                                <Link className={'lg:px-5 lg:pr-2'} to={'/login'}><button className="text-xs p-1 md:p-3 md:px-5 rounded-md md:text-sm lg:text-lg  bg-gray-900 text-white lg:font-bold border-0">Login</button></Link>
                                <Link className={'lg:px-5'} to={'/register'}><button className="text-xs p-1 md:p-3 md:px-5 rounded-md md:text-sm lg:text-lg bg-gray-900 text-white lg:font-bold border-0">Register</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;