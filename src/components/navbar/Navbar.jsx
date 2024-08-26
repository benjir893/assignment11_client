import { Link } from "react-router-dom";
import Subnav from "./Subnav";
import Momentdisplay from "./Momentdisplay";


const Navbar = () => {
    const navlinks = [
        <li><Link>HOME</Link></li>,
        <li><Link>QUERIES</Link></li>,
        <li><Link>RECOMMENDET FOR ME</Link></li>,
        <li><Link>MY QUERIES</Link></li>,
        <li><Link>MY RECOMMENDATION</Link></li>
]
return (
    <div className="navbar bg-orange-200">
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
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-blue-700">
                        {navlinks}
                </ul>
            </div>
            <a className="btn btn-ghost text-xl font-bungee_Tint border border-solid border-red-800 mx-1">ProdX</a>
            <Momentdisplay></Momentdisplay>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-blue-700">
                {navlinks}
            </ul>
        </div>
        <div className="navbar-end">
            <Subnav></Subnav>
            <a className="btn text-orange-600">LOG OUT</a>
        </div>
    </div>
);
};

export default Navbar;