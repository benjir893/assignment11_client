
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="mt-10">
            <footer className=" footer bg-lime-200 text-blue-800 font-roboto font-semibold p-10 ">
                <nav className="ml-10" >
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
            </footer>
            <footer className="footer bg-lime-200 text-blue-800 font-roboto font-semibold border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                   <Link to={'/'}><img className="w-16 h-16 rounded-full" src="https://i.ibb.co/rvsWpfQ/prod-Xlogo.webp" alt="logo" /></Link>
                    <p>
                        ProdX Services Ltd.
                        <br />
                        Relaiability is Our Trend
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 ">
                        <Link to={'https://x.com/i/flow/login'} ><button className="text-2xl"><FaTwitter /></button></Link>
                        <Link to={'https://www.youtube.com/'}><button className="text-2xl"><IoLogoYoutube /></button></Link>
                        <Link to={'https://www.facebook.com/'}><button className="text-2xl"><FaFacebookF /></button></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;