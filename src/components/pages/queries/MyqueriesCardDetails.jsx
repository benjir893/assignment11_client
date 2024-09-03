import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";


const MyqueriesCardDetails = () => {
    const myquery = useLoaderData();
    const { ProductImage, QueryTitle, ProductName, BrandName, AlternationReason, DatePosted, UserInfo } = myquery;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={ProductImage}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
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
                        <Link to={'/myqueries'}><button className="btn hover:bg-orange-500 bg-lime-400 text-blue-800"><IoArrowBackCircleSharp /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyqueriesCardDetails;