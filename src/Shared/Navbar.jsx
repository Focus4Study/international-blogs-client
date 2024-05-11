import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

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
                    <a className="btn btn-ghost text-xl">Blog Stream</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className=" rounded-md btn text-sm lg:text-lg text-white lg:font-bold bg-[#D04848] mr-3 border-0"><Link className={'p-3 lg:px-5 lg:py-3'} to={'/login'}>Login</Link></button>
                    <button className="btn rounded-md text-sm lg:text-lg text-white lg:font-bold bg-[#D04848]  mr-3 border-0"><Link className={'p-3 lg:px-5 lg:py-3'} to={'/register'}>Register</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;