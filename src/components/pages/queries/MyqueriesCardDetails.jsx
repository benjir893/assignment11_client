import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";


const MyqueriesCardDetails = () => {
    const myquery = useLoaderData();
    const { ProductImage, QueryTitle, ProductName, BrandName, AlternationReason, DatePosted, UserInfo } = myquery;
    return (
        <div>
            <Navbar></Navbar>
            <div className="card bg-base-100 shadow-xl md:grid grid-cols-2 my-1 ">
                <figure className="px-10 pt-10">
                    <img
                        src={ProductImage}
                        alt="Shoes"
                        className=" border border-solid border-lime-500 rounded-lg" />
                </figure>
                <div className="card-body items-start content-start border border-solid border-lime-500 rounded-lg">
                    <h2 className="card-title">{QueryTitle}</h2>
                    <h2 className="card-title">{ProductName}</h2>
                    <h2 className="card-title">{BrandName}</h2>
                    <p>{AlternationReason}</p>
                    <p>{DatePosted}</p>
                    <p>{UserInfo?.name}</p>
                    <figure className="w-20 h-20 rounded-full">
                        <img
                            src={UserInfo?.image}
                            alt="User"
                            className="w-20 h-20 rounded-full" />
                    </figure>

                    {/* <p>{UserInfo.image}</p> */}

                    <div className="card-actions">
                        <Link to={'/queries'}><button className="btn hover:bg-lime-300 bg-lime-500 text-blue-800"><IoArrowBackCircleSharp /></button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyqueriesCardDetails;