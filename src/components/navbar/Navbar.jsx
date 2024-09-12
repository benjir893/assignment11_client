import { Link, NavLink, useNavigate } from "react-router-dom";
import Subnav from "./Subnav";
import Momentdisplay from "./Momentdisplay";
import Navlogo from "./Navlogo";
import { useContext } from "react";
import { Authcontext } from "../../services/AuthProvider";


const Navbar = () => {
    const { user, logOutUser } = useContext(Authcontext);
    const navigate = useNavigate()
    const navlinks = [
        
            user && <> <li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'/queries'}>QUERIES</Link></li>
            <li><Link to={'/recomendation'}>RECOMMENDETIONS</Link></li>
            <li><Link to={'/myqueries'}>MY QUERIES</Link></li>
            <li><Link to={'/myrecomendation'}>MY RECOMMENDATIONS</Link></li></>,
        
        
            !user && <><li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'/queries'}>QUERIES</Link></li>
            <li><Link to={'/recomendation'}>RECOMMENDETIONS</Link></li></>
        
       
        
    ]

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                console.log('user logged out')
                navigate('/login')
            })
            .catch(error => {
                console.error(error)

            })
    }
    return (
        <div className="navbar bg-lime-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-blue-700">
                        {navlinks}

                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl font-bungee_Tint border border-solid border-red-800 mx-1">ProdX</a> */}
                <Navlogo></Navlogo>
                <Momentdisplay></Momentdisplay>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-blue-700">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p>{user?.email}</p>
                        <button onClick={handleLogout} className="btn bg-emerald-200 text-blue-600">LOG OUT</button></> : <>
                        <Link to={'/login'}><button className="btn bg-emerald-200 text-blue-600">LOG IN</button></Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;