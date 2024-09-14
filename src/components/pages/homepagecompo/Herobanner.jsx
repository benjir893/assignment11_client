import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Herobanner = () => {
    return (
        <div className="mx-4">
            <div className="flex my-4">
                <button className="btn btn-outline text-lime-600 hover:bg-lime-300 text-lg font-roboto">Latest Update:</button>
                <Marquee speed={100} pauseOnHover={true} direction="left" className=" text-lime-500 font-roboto text-lg w-20">
                    <Link className="mr-4 link link-hover" to={'/queries'}>Contact us for any on going query status...</Link>
                    <Link className="link link-hover" to={'/recomendation'}>Check out all recommendations...</Link>
                </Marquee>
            </div>
            <div className="carousel w-full h-auto my-4 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" /> */}
                    <img src="https://i.ibb.co/SRQWCbk/wodd-Uten-Kitchen1.jpg"
                        alt="Pizza" className="min-w-80 h-96" />
                    <img
                        src="https://i.ibb.co/B4BGXWq/iPhone11.jpg"
                        alt="Pizza" className="min-w-80 h-96" />
                    <img
                        src="https://i.ibb.co/8x3kPgN/shoe.jpg"
                        alt="Pizza" className="min-w-80 h-96" />
                    <img
                        src="https://i.ibb.co/GdfyLq4/juteseat.jpg"
                        alt="Pizza" className="min-w-80 h-96" />
                    <div className="absolute bg-gradient-to-r from-lime-100 to-lime-0 ">
                        {/* ================bg-gradient-to-r from-cyan-500 to-blue-500" */}
                        <h1 className="text-lime-800 bg-gradient-to-r from-lime-100 to-lime-0 font-roboto font-bold text-4xl ml-20 mt-10 p-2 rounded-lg">Welcome to ProdX Services</h1>
                        <ul className="text-lime-800  font-roboto font-bold text-xl ml-24 p-3">
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Most People's choice</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Most Relaiable Services</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">24/7 Customer Care</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Quick Responce</li>
                        </ul>

                        {/* ========= */}
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle bg-transparent border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/qscGrpq/woodenbedroom.jpg"
                        className="w-full h-96" />
                    <img
                        src="https://i.ibb.co/481XL0c/coverphoto.jpg"
                        className="w-full h-96" />
                    <div className="absolute bg-gradient-to-r from-lime-100 to-lime-0 ">
                        {/* ================bg-gradient-to-r from-cyan-500 to-blue-500" */}
                        <h1 className="text-lime-800 bg-gradient-to-r from-lime-100 to-lime-0 font-roboto font-bold text-4xl ml-20 mt-10 p-2 rounded-lg">Welcome to ProdX Services</h1>
                        <ul className="text-lime-800  font-roboto font-bold text-xl ml-24 p-3">
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Wide Ranges of Services</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Covers all most all Products</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">24/7 Customer Care</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Continuous Follow up</li>
                        </ul>

                        {/* ========= */}
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-transparent border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/6DRHSnj/coverphoto3.jpg"
                        className="w-full h-96" />
                    <img
                        src="https://i.ibb.co/nrj0X3t/logo.webp"
                        className="w-full h-96" />
                    <div className="absolute bg-gradient-to-r from-lime-100 to-lime-0 ">
                        {/* ================bg-gradient-to-r from-cyan-500 to-blue-500" */}
                        <h1 className="text-lime-800 bg-gradient-to-r from-lime-100 to-lime-0 font-roboto font-bold text-4xl ml-20 mt-10 p-2 rounded-lg">Welcome to ProdX Services</h1>
                        <ul className="text-lime-800  font-roboto font-bold text-xl ml-24 p-3">
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Direct contact to Vendor</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Direct Access from Warehouse</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Excellent Feed back from customers</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Continuous Follow up</li>
                        </ul>

                        {/* ========= */}
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle bg-transparent border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-transparent border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/LJJcwNZ/house2.jpg"
                        className="w-full h-96" />
                    <img
                        src="https://i.ibb.co/zh46txL/house1.jpg"
                        className="w-full h-96" />

                    <div className="absolute bg-gradient-to-r from-lime-100 to-lime-0 ">
                        {/* ================bg-gradient-to-r from-cyan-500 to-blue-500" */}
                        <h1 className="text-lime-800 bg-gradient-to-r from-lime-100 to-lime-0 font-roboto font-bold text-4xl ml-20 mt-10 p-2 rounded-lg">Welcome to ProdX Services</h1>
                        <ul className="text-lime-800  font-roboto font-bold text-xl ml-24 p-3">
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">For Real state our Service is Well known</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Hundreds of Options available</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Any City of the Country</li>
                            <li className="bg-gradient-to-r from-yellow-100 to-yellow-0 rounded-md p-1 mt-1">Free site visit any time</li>
                        </ul>

                        {/* ========= */}
                    </div>
                    <div className="absolute mt-60 md:mt-40 md:ml-[700px]">
                        <h1 className="text-lime-800 bg-gradient-to-r from-lime-100 to-lime-0 font-roboto font-bold text-4xl rounded-lg">Follow us on social media <br /> for continous update...</h1>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herobanner;